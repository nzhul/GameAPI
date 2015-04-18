using Game.Web.Account;
using Game.Web.InputModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Game.Web.Controllers
{
    public class AccountController : BaseController
    {

        private readonly IFormsAuthenticationService formsService;
        private readonly IMembershipService membershipService;

        public AccountController()
        {
            this.formsService = new FormsAuthenticationService();
            this.membershipService = new MembershipService(this.Data);
        }

        [Authorize]
        public ActionResult Settings()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(LoginForm form, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                if (membershipService.ValidateUser(form.UserName, form.Password))
                {
                    formsService.SignIn(form.UserName, form.RememberMe);

                    if (!String.IsNullOrWhiteSpace(returnUrl))
                    {
                        return Redirect(returnUrl);
                    }

                    return RedirectToAction("Index", "Home");
                }

                ModelState.AddModelError("ServerError", "The user name or password provided is incorrect.");
            }

            return View(form);
        }

        [HttpGet]
        public ActionResult Logout()
        {
            formsService.SignOut();
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(RegistrationForm form)
        {
            if (ModelState.IsValid)
            {
                var createStatus = membershipService.CreateUser(form.UserName, form.Password, form.Email);

                if (createStatus == MembershipCreateStatus.Success)
                {
                    formsService.SignIn(form.UserName, false); /* createPersistentCookie*/

                    return RedirectToAction("Index", "Home");
                }

                ModelState.AddModelError("ServerError", ErrorCodeToString(createStatus));
            }

            return View(form);
        }

        private static string ErrorCodeToString(MembershipCreateStatus createStatus)
        {
            switch (createStatus)
            {
                case MembershipCreateStatus.DuplicateUserName:
                    return Resources.Errors.DuplicateUserName;

                case MembershipCreateStatus.DuplicateEmail:
                    return Resources.Errors.DuplicateEmail;

                case MembershipCreateStatus.InvalidPassword:
                    return Resources.Errors.InvalidPassword;

                case MembershipCreateStatus.InvalidEmail:
                    return Resources.Errors.InvalidEmail;

                case MembershipCreateStatus.InvalidAnswer:
                    return Resources.Errors.InvalidAnswer;

                case MembershipCreateStatus.InvalidQuestion:
                    return Resources.Errors.InvalidQuestion;

                case MembershipCreateStatus.InvalidUserName:
                    return Resources.Errors.InvalidUserName;

                case MembershipCreateStatus.ProviderError:
                    return Resources.Errors.ProviderError;

                case MembershipCreateStatus.UserRejected:
                    return Resources.Errors.UserRejected;

                default:
                    return Resources.Errors.UserDefaultMessage;
            }
        }
    }
}