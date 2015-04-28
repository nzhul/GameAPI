using Game.Data;
using Game.Models.Towns;
using Game.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Game.Web.Controllers
{
    public class TownsController : ApiController
    {
        protected IUnitOfWork Data;

        public TownsController(IUnitOfWork data)
        {
            this.Data = data;
        }

        public TownsController()
            : this(new UnitOfWork())
        {

        }


        [HttpGet]
        public IHttpActionResult GetBuildings()
        {
            return Ok(this.Data.Buildings.All().Select(b => new BuildingViewModel
            {
                Id = b.Id,
                Name = b.Name,
                Description = b.Description,
                Level = b.Level
            }));
        }
    }
}
