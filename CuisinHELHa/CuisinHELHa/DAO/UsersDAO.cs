using System.Collections.Generic;
using System.Data.SqlClient;
using CuisinHELHa.DTO;
using CuisinHELHa.Models;

namespace CuisinHELHa.DAO
{
    public class UsersDAO
    {
        private static readonly string TABLE_NAME = "users";
        public static readonly string FIELD_ID = "idUser";
        public static readonly string FIELD_FIRSTNAME = "firstName";
        public static readonly string FIELD_LASTNAME = "lastName";
        public static readonly string FIELD_PSEUDO = "pseudo";
        public static readonly string FIELD_MAIL = "mail";
        public static readonly string FIELD_USERTYPE = "userType";
        
        //Queries
        private static readonly string REQ_QUERY
            = $"SELECT * FROM {TABLE_NAME}";

        private static readonly string REQ_POST
            = $"INSERT INTO {TABLE_NAME} ({FIELD_FIRSTNAME}, {FIELD_LASTNAME}, {FIELD_PSEUDO}, {FIELD_MAIL}, {FIELD_USERTYPE}) " +
              $"OUTPUT Inserted.{FIELD_ID} " +
              $"VALUES(@{FIELD_FIRSTNAME}, @{FIELD_LASTNAME}, @{FIELD_PSEUDO}, @{FIELD_MAIL}, @{FIELD_USERTYPE})";
        
        private static readonly string REQ_DELETE
            = $"DELETE FROM {TABLE_NAME} WHERE {FIELD_ID} = @{FIELD_ID}";

        private static readonly string REQ_UPDATE
            = $"UPDATE {TABLE_NAME} SET {FIELD_FIRSTNAME} = @{FIELD_FIRSTNAME}," +
              $"{FIELD_LASTNAME} = @{FIELD_LASTNAME}," +
              $"{FIELD_PSEUDO} = @{FIELD_PSEUDO}," +
              $"{FIELD_MAIL} = @{FIELD_MAIL}," +
              $"{FIELD_USERTYPE}= @{FIELD_USERTYPE} " +
              $"WHERE {FIELD_ID} = @{FIELD_ID}";

        public static List<UsersDTO> Query()
        {
            List<UsersDTO> users = new List<UsersDTO>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    users.Add(new UsersDTO(reader));
                }
            }
            return users;
        }

        public static UsersDTO Post(UsersDTO user)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;

                command.Parameters.AddWithValue($@"{FIELD_FIRSTNAME}", user.FirstName);
                command.Parameters.AddWithValue($@"{FIELD_LASTNAME}", user.LastName);
                command.Parameters.AddWithValue($@"{FIELD_PSEUDO}", user.Pseudo);
                command.Parameters.AddWithValue($@"{FIELD_MAIL}", user.Mail);
                command.Parameters.AddWithValue($@"{FIELD_USERTYPE}", user.UserType);
                
                user.IdUser = (int) command.ExecuteScalar();
            }
            return user;
        }
        
        public static bool Delete(int id)
        {
            bool hasBeenDeleted = false;

            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE;
                command.Parameters.AddWithValue($@"{FIELD_ID}", id);
                hasBeenDeleted = command.ExecuteNonQuery() == 1;
            }
            return hasBeenDeleted;
        } 
        
        public static bool Update(UsersDTO user)
        {
            bool hasBeenChanged = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE;
                command.Parameters.AddWithValue($@"{FIELD_FIRSTNAME}", user.FirstName);
                command.Parameters.AddWithValue($@"{FIELD_LASTNAME}", user.LastName);
                command.Parameters.AddWithValue($@"{FIELD_PSEUDO}", user.Pseudo);
                command.Parameters.AddWithValue($@"{FIELD_MAIL}", user.Mail);
                command.Parameters.AddWithValue($@"{FIELD_USERTYPE}", user.UserType);

                command.Parameters.AddWithValue($"{FIELD_ID}",user.IdUser );

                hasBeenChanged = command.ExecuteNonQuery() == 1;
            }

            return hasBeenChanged;

        }
        
        
        

    }
}