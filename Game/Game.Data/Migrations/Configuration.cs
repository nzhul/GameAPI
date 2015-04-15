namespace Game.Data.Migrations
{
    using Game.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    public sealed class Configuration : DbMigrationsConfiguration<Game.Data.GameDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(GameDbContext context)
        {
            this.AddInitialUsers(context);
        }

        private void AddInitialUsers(GameDbContext context)
        {
            if (!context.Users.Any())
            {
                for (int i = 1; i < 6; i++)
                {
                    var newUser = new User
                    {
                        Username = "User" + i
                    };
                    context.Users.Add(newUser);
                }
                context.SaveChanges();
            }
        }
    }
}
