using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Web.Account
{
    public interface IFormsAuthenticationService
    {
        void SignIn(string userId, bool createPersistentCookie);

        void SignOut();
    }
}
