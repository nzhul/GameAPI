using Game.Data.Migrations;
using Game.Models;
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
    }
}
