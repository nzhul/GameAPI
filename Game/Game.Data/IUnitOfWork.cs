using Game.Data.Repositories;
using Game.Models;
using Game.Models.Heroes;
using Game.Models.Units;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Data
{
    public interface IUnitOfWork
    {
        IRepository<User> Users { get; }
        IRepository<Unit> Units { get; }
        IRepository<Hero> Heroes { get; }

        int SaveChanges();
    }
}
