using System;
using System.Data.SqlClient;
using CuisinHELHa.DAO;

namespace CuisinHELHa.DTO
{
    public class UsersDTO
    {
        public int IdUser { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Pseudo { get; set; }
        public string Mail { get; set; }
        public bool UserType { get; set; }

        public UsersDTO()
        {
        }

        public UsersDTO(int idUser, string firstName, string lastName, string pseudo, string mail, bool userType)
        {
            this.IdUser = idUser;
            FirstName = firstName;
            LastName = lastName;
            Pseudo = pseudo;
            Mail = mail;
            UserType = userType;
        }

        public UsersDTO(SqlDataReader reader)
        {
            IdUser = Convert.ToInt32(reader[UsersDAO.FIELD_ID].ToString());
            FirstName = reader[UsersDAO.FIELD_FIRSTNAME].ToString();
            LastName = reader[UsersDAO.FIELD_LASTNAME].ToString();
            Pseudo = reader[UsersDAO.FIELD_PSEUDO].ToString();
            Mail = reader[UsersDAO.FIELD_MAIL].ToString();
            UserType = Convert.ToBoolean(reader[UsersDAO.FIELD_USERTYPE].ToString());
        }
    }
}