using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Models.Units.Human
{
    public class Swordsman : IUnit
    {
        const int minDamage = 1;
        const int maxDamage = 3;

        public int Id { get; set; }

        public string Name { get; set; }

        public Enums.AttackTypes AttackTypes { get; set; }

        public int Attack { get; set; }

        public int Defense { get; set; }

        public int MinDamage { get; set; }

        public int MaxDamage { get; set; }

        public int Health { get; set; }

        public int Speed { get; set; }

        public int Size { get; set; }

        public int Growth { get; set; }

        public string Description { get; set; }

        public int StackSize { get; set; }

    }
}
