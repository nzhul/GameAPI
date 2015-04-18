using Game.Models.Enums;
using Game.Models.Units;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Models.Towns
{
    public interface IUnitProducer
    {
        HumanUnitType ProducedUnitType { get; set; }

        double ProductionRate { get; set; }
    }
}
