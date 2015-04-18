using Game.Web.Helpers;
using Game.Web.Resources;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Game.Web.InputModels
{
    public class LoginForm
    {
        [Required]
        [DisplayName("User name")]
        [RegularExpression(ValidationHelper.UserNameRegularExpression, ErrorMessageResourceType = typeof(Errors), ErrorMessageResourceName = "InvalidUserName")]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [DisplayName("Password")]
        public string Password { get; set; }

        [DisplayName("Remember me?")]
        public bool RememberMe { get; set; }
    }
}