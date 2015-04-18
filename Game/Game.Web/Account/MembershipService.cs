﻿using Game.Data;
using Game.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;

namespace Game.Web.Account
{
    public class MembershipService : IMembershipService
    {
        private readonly IUnitOfWork Data;

        public MembershipService(IUnitOfWork data)
        {
            this.Data = data;
        }

        public int MinPasswordLength
        {
            get { return 4; }
        }

        public bool ValidateUser(string userName, string password)
        {
            User user = this.Data.Users.All().FirstOrDefault(u => u.Username == userName);
            return (user != null) && user.IsActive && (user.Password.Equals(password, StringComparison.Ordinal)); 
        }

        public MembershipCreateStatus CreateUser(string userName, string password, string email)
        {
            if (this.Data.Users.All().Any(u => u.Username == userName))
            {
                return MembershipCreateStatus.DuplicateUserName;
            }

            if (this.Data.Users.All().Any(u => u.Email == email))
            {
                return MembershipCreateStatus.InvalidEmail;
            }

            User newUser = new User
            {
                Username = userName,
                Password = password,
                Email = email,
                IsActive = true
            };

            this.Data.Users.Add(newUser);
            this.Data.SaveChanges();

            return MembershipCreateStatus.Success;
        }

        public bool ChangePassword(string userName, string oldPassword, string newPassword)
        {
            User user = this.Data.Users.All().FirstOrDefault(u => u.Username == userName);

            if ((user != null) && (user.IsActive) && (user.Password.Equals(oldPassword, StringComparison.Ordinal)))
            {
                user.Password = newPassword;
                this.Data.SaveChanges();
            }

            return false;
        }
    }
}