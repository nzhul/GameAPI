using Game.Models.Heroes;
using Game.Models.Towns;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Models
{
    public class User
    {
        private ICollection<Hero> heroes;
        private ICollection<Town> towns;

        public User()
        {
            this.heroes = new HashSet<Hero>();
            this.towns = new HashSet<Town>();
        }

        public int Id { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public bool IsActive { get; set; }

        public virtual ICollection<Hero> Heroes
        {
            get { return this.heroes; }
            set { this.heroes = value; }
        }

        public virtual ICollection<Town> Towns
        {
            get { return this.towns; }
            set { this.towns = value; }
        }
    }
}
