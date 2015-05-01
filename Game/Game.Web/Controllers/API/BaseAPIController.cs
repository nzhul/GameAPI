using Game.Data;
using Game.Web.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Game.Web.Controllers.API
{
    public class BaseAPIController : ApiController
    {
        protected IUnitOfWork Data;
        protected IMembershipService membershipService;
        public BaseAPIController(IUnitOfWork data)
        {
            this.Data = data;
            this.membershipService = new MembershipService(this.Data);
        }

        public BaseAPIController()
            : this(new UnitOfWork())
        {

        }
    }
}