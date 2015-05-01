using Game.Models;
using Game.Models.Towns;
using Game.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Game.Web.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        [Authorize]
        [HttpGet]
        public ActionResult Towns(int id)
        {
            User currentUser = this.membershipService.GetCurrentUser();

            foreach (var userTown in currentUser.Towns)
            {
                if (userTown.Id == id)
                {
                    var model = new TownViewModel();
                    model.Name = this.Data.Towns.All().FirstOrDefault(t => t.Id == id).Name;
                    return View(model);
                }
            }

            return View();
        }

        public JsonResult GetBuildings()
        {
            var tags = this.Data.Buildings
                .All()
                .OrderBy(x => x.Id)
                .Select(x => x.Name).ToList();

            return Json(tags, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}