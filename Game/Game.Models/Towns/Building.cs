using Game.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Models.Towns
{
    public abstract class Building : IBuilding
    {

        public int Id { get; set; }

        public string Name { get; set; }

        public Dictionary<ResourceType, int> ResourceCosts { get; set; }

        public string Description { get; set; }

        public virtual Town Town { get; set; }

        public int Level { get; set; }

    }
}
