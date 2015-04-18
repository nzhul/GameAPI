using Game.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Models.Towns
{
    public interface IResourceProducer
    {
        ResourceType ProducedResourceType { get; set; }

        int ProductionRate { get; set; }
    }
}
