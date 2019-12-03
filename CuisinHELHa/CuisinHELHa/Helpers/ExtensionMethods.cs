using System.Collections.Generic;
using System.Linq;
using CuisinHELHa.DTO;

namespace CuisinHELHa.Helpers
{
    public static class ExtensionMethods
    {
        public static IEnumerable<UsersDTO> WithoutPasswords(this IEnumerable<UsersDTO> users)
        {
            return users.Select(x => x.WithoutPassword());
        }

        public static UsersDTO WithoutPassword(this UsersDTO user)
        {
            user.Password = null;
            return user;
        }
    }
}