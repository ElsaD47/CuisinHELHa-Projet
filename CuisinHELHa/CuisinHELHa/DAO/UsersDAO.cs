using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Claims;
using System.Text;
using CuisinHELHa.DTO;
using CuisinHELHa.Helpers;
using CuisinHELHa.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace CuisinHELHa.DAO
{
    public interface IUsersDAO
    {
        UsersDTO Authenticate(string username, string password);
        IEnumerable<UsersDTO> GetAll();
    }

    public class UsersDAO : IUsersDAO
    {
        private readonly AppSettings _appSettings;

        private static readonly string TABLE_NAME = "users";
        public static readonly string FIELD_ID = "idUser";
        public static readonly string FIELD_FIRSTNAME = "firstName";
        public static readonly string FIELD_LASTNAME = "lastName";
        public static readonly string FIELD_PSEUDO = "pseudo";
        public static readonly string FIELD_MAIL = "mail";
        public static readonly string FIELD_USERTYPE = "userType";
        public static readonly string FIELD_PASSWORD = "password";

        //Queries
        private static readonly string REQ_QUERY
            = $"SELECT * FROM {TABLE_NAME}";
        
        private static readonly string REQ_QUERY_BY_PSEUDO
            = $"SELECT * FROM {TABLE_NAME} WHERE {FIELD_PSEUDO} = @{FIELD_PSEUDO}";

        private static readonly string REQ_QUERY_BY_MAIL
            = $"SELECT * FROM {TABLE_NAME} WHERE {FIELD_MAIL} = @{FIELD_MAIL}";

        private static readonly string REQ_POST
            = $"INSERT INTO {TABLE_NAME} ({FIELD_FIRSTNAME}, {FIELD_LASTNAME}, {FIELD_PSEUDO}, {FIELD_MAIL}, {FIELD_USERTYPE}, {FIELD_PASSWORD}) " +
              $"OUTPUT Inserted.{FIELD_ID} " +
              $"VALUES(@{FIELD_FIRSTNAME}, @{FIELD_LASTNAME}, @{FIELD_PSEUDO}, @{FIELD_MAIL}, @{FIELD_USERTYPE}, @{FIELD_PASSWORD})";

        private static readonly string REQ_DELETE_BY_ID
            = $"DELETE FROM {TABLE_NAME} WHERE {FIELD_ID} = @{FIELD_ID}";
        
        private static readonly string REQ_DELETE_ALL_BUT_ADMIN
            = $"DELETE FROM {TABLE_NAME} WHERE {FIELD_USERTYPE} = 0";

        private static readonly string REQ_DELETE_BY_PSEUDO
            = $"DELETE FROM {TABLE_NAME} WHERE {FIELD_PSEUDO} = @{FIELD_PSEUDO}";

        private static readonly string REQ_UPDATE
            = $"UPDATE {TABLE_NAME} SET {FIELD_FIRSTNAME} = @{FIELD_FIRSTNAME}," +
              $"{FIELD_LASTNAME} = @{FIELD_LASTNAME}," +
              $"{FIELD_PSEUDO} = @{FIELD_PSEUDO}," +
              $"{FIELD_MAIL} = @{FIELD_MAIL}," +
              $"{FIELD_USERTYPE}= @{FIELD_USERTYPE} " +
              $"{FIELD_PASSWORD}= @{FIELD_PASSWORD} " +
              $"WHERE {FIELD_ID} = @{FIELD_ID}";
        
        private static readonly string REQ_UPDATE_PASSWORD
            = $"UPDATE {TABLE_NAME} " +
              $"SET {FIELD_PASSWORD}= @{FIELD_PASSWORD}New " +
              $"WHERE {FIELD_ID} = @{FIELD_ID} " +
              $"AND {FIELD_PASSWORD} = @{FIELD_PASSWORD}Old";

        private static readonly string REQ_UPDATE_MAIL
            = $"UPDATE {TABLE_NAME} " +
              $"SET {FIELD_MAIL}= @{FIELD_MAIL} " +
              $"WHERE {FIELD_ID} = @{FIELD_ID} ";


        public UsersDAO(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }

        public UsersDTO Authenticate(string username, string password)
        {
            var user = Query().SingleOrDefault(x => x.Pseudo == username && x.Password == password);

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.IdUser.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(30),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            return user.WithoutPassword();
        }

        public IEnumerable<UsersDTO> GetAll()
        {
            return Query().WithoutPasswords();
        }

        public static UsersDTO GetUserByPseudo(string pseudo)
        {
            UsersDTO user = new UsersDTO();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY_BY_PSEUDO;
                command.Parameters.AddWithValue($@"{FIELD_PSEUDO}", pseudo);
                Console.WriteLine(command.CommandText);
                try
                {
                    SqlDataReader reader = command.ExecuteReader();
                    if(reader.Read())
                        user = new UsersDTO(reader);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }

            return user;
        }
        
        public static UsersDTO GetUserByMail(string mail)
        {
            UsersDTO user = new UsersDTO();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY_BY_MAIL;
                command.Parameters.AddWithValue($@"{FIELD_MAIL}", mail);

                try
                {
                    SqlDataReader reader = command.ExecuteReader();
                    if(reader.Read())
                        user = new UsersDTO(reader);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }

            return user;
        }

        public static void DeleteAllButAdmin()
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE_ALL_BUT_ADMIN;
                command.ExecuteNonQuery();
            }

        }
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
                    Console.WriteLine(new UsersDTO(reader).Password);
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
                command.Parameters.AddWithValue($@"{FIELD_PASSWORD}", user.Password);

                try
                {
                    user.IdUser = (int) command.ExecuteScalar();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return null;
                }
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
                command.CommandText = REQ_DELETE_BY_ID;
                command.Parameters.AddWithValue($@"{FIELD_ID}", id);
                hasBeenDeleted = command.ExecuteNonQuery() == 1;
            }

            return hasBeenDeleted;
        }

        public static bool Delete(string pseudo)
        {
            bool hasBeenDeleted = false;

            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE_BY_PSEUDO;
                command.Parameters.AddWithValue($@"{FIELD_PSEUDO}", pseudo);
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
                command.Parameters.AddWithValue($@"{FIELD_PASSWORD}", user.Password);

                command.Parameters.AddWithValue($@"{FIELD_ID}", user.IdUser);

                hasBeenChanged = command.ExecuteNonQuery() == 1;
            }

            return hasBeenChanged;
        }
        
        public static bool UpdatePassword(PasswordDTO psw)
        {
            bool hasBeenChanged = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE_PASSWORD;
                command.Parameters.AddWithValue($@"{FIELD_PASSWORD}Old", psw.PasswordOld);
                command.Parameters.AddWithValue($@"{FIELD_PASSWORD}New", psw.PasswordNew);

                command.Parameters.AddWithValue($@"{FIELD_ID}", psw.UserID);
                
                hasBeenChanged = command.ExecuteNonQuery() == 1;
            }

            return hasBeenChanged;
        }
        
        public static bool UpdateMail(MailDTO mail)
        {
            bool hasBeenChanged = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE_MAIL;
                command.Parameters.AddWithValue($@"{FIELD_MAIL}", mail.Mail);

                command.Parameters.AddWithValue($@"{FIELD_ID}", mail.UserID);

                hasBeenChanged = command.ExecuteNonQuery() == 1;
            }

            return hasBeenChanged;
        }
    }
}