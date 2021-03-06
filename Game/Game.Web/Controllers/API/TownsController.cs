﻿using Game.Data;
using Game.Models.Towns;
using Game.Models.Towns.Common;
using Game.Web.Controllers.API;
using Game.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Game.Web.Controllers
{
    public class TownsController : BaseAPIController
    {


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

        [HttpGet]
        public IHttpActionResult UpdateResourceCost()
        {
            var theVillage = this.Data.Buildings.All().FirstOrDefault();
            theVillage.ResourceCosts.Gold = 500;
            this.Data.SaveChanges();

            return Ok();
        }

    }
}
