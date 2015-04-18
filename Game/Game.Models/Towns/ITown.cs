using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Models.Towns
{
    public interface ITown
    {
        int Id { get; set; }

        User Owner { get; set; }

        string Name { get; set; }

        ICollection<Building> Buildings { get; set; }


    }
}
