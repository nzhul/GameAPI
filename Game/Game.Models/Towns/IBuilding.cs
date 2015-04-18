using Game.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Models.Towns
{
    public interface IBuilding
    {
        int Id { get; set; }

        string Name { get; set; }

        Dictionary<ResourceType, int> ResourceCosts { get; set; }

        string Description { get; set; }

        Town Town { get; set; }

        int Level { get; set; }
    }
}
