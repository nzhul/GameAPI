using Game.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Models.Towns.Human
{
    [Table("UnitProducers")]
    public class Barracks : Building, IUnitProducer
    {

        const HumanUnitType producedUnitType = HumanUnitType.Swordsman;
        const int productionRate = 14;
        const int level = 1;
        const string name = "Barracks";
        const string description = "Barracks is the place where the Swordmans train.";

        public Barracks()
        {

            this.ProducedUnitType = producedUnitType;
            this.ProductionRate = productionRate;
            this.ResourceCosts.Add(ResourceType.Gold, 500);
            this.Level = level;
            this.Name = name;
            this.Description = description;
        }

        public HumanUnitType ProducedUnitType { get; set; }

        public double ProductionRate { get; set; }
    }
}
