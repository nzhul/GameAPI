using Game.Data.Repositories;
using Game.Models;
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

        int SaveChanges();
    }
}
