using Game.Data.Migrations;
using Game.Models;
using Game.Models.Heroes;
using Game.Models.Units;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Data
{
    public class GameDbContext : DbContext
    {
        public GameDbContext()
            : base("Game")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<GameDbContext, Configuration>());
        }

        public static GameDbContext Create()
        {
            return new GameDbContext();
        }

        public IDbSet<User> Users { get; set; }
        public IDbSet<Unit> Units { get; set; }
        public IDbSet<Hero> Heroes { get; set; }
    }
}
