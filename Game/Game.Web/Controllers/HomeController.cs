using Game.Models;
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
            this.Data.Users.Add(new User { Username = "gosho" });
            this.Data.SaveChanges();


            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}