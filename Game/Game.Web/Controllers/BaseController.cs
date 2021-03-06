﻿using Game.Data;
using Game.Web.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Game.Web.Controllers
{
    public class BaseController : Controller
    {
        protected IUnitOfWork Data;
        protected IMembershipService membershipService;

        public BaseController(IUnitOfWork data)
        {
            this.Data = data;
            this.membershipService = new MembershipService(this.Data);
        }

        public BaseController()
            : this(new UnitOfWork())
        {

        }
    }
}