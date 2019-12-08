using System;
using System.Data.SqlClient;
using CuisinHELHa.DAO;

namespace CuisinHELHa.DTO
{
    public class PasswordDTO
    {
        public int UserID { get; set; }
        public string PasswordNew { get; set; }
        public string PasswordOld { get; set; }

        public PasswordDTO(int userId, string passwordNew, string passwordOld)
        {
            UserID = userId;
            PasswordNew = passwordNew;
            PasswordOld = passwordOld;
        }
        
        public PasswordDTO(){}
        
    }
}