using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;

namespace Game.Web.Account
{
    public class FormsAuthenticationService : IFormsAuthenticationService
    {
        public void SignIn(string userId, bool createPersistentCookie)
        {
            FormsAuthentication.SetAuthCookie(userId, createPersistentCookie);
        }

        public void SignOut()
        {
            FormsAuthentication.SignOut();
        }
    }
}