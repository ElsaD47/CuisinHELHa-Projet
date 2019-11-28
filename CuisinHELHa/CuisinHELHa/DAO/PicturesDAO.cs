using System.Collections.Generic;
using System.Data.SqlClient;
using CuisinHELHa.DTO;
using CuisinHELHa.Models;

namespace CuisinHELHa.DAO
{
    public class PicturesDAO
    {
        private static readonly string TABLE_NAME = "pictures";
        public static readonly string FIELD_ID_PICTURE = "idPicture";
        public static readonly string FIELD_ID_RECIPE = "idRecipe";
        public static readonly string FIELD_PICTURE = "picture";
        
        //Queries
        private static readonly string REQ_QUERY
            = $"SELECT * FROM {TABLE_NAME}";

        private static readonly string REQ_POST
            = $"INSERT INTO {TABLE_NAME} ({FIELD_ID_RECIPE}, {FIELD_PICTURE}) " +
              $"OUTPUT Inserted.{FIELD_ID_PICTURE} " +
              $"VALUES(@{FIELD_ID_RECIPE}, @{FIELD_PICTURE})";
        
        private static readonly string REQ_DELETE
            = $"DELETE FROM {TABLE_NAME} WHERE {FIELD_ID_PICTURE} = @{FIELD_ID_PICTURE}";
        
        private static readonly string REQ_UPDATE
            = $"UPDATE {TABLE_NAME} SET {FIELD_ID_RECIPE} = @{FIELD_ID_RECIPE}," +
              $"{FIELD_PICTURE} = @{FIELD_PICTURE}," +
              $"WHERE {FIELD_ID_PICTURE} = @{FIELD_ID_PICTURE}";
        
        public static List<PicturesDTO> Query()
        {
            List<PicturesDTO> pictures = new List<PicturesDTO>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    pictures.Add(new PicturesDTO(reader));
                }
            }

            return pictures;
        }
        
        public static PicturesDTO Post(PicturesDTO pictures)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;
                command.Parameters.AddWithValue($@"{FIELD_ID_RECIPE}", pictures.IdRecipe);
                command.Parameters.AddWithValue($@"{FIELD_PICTURE}", pictures.Picture);
                pictures.IdPicture = (int) command.ExecuteScalar();
            }
            return pictures;
        }
        
        public static bool Delete(int id)
        {
            bool hasBeenDeleted = false;

            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE;
                command.Parameters.AddWithValue($@"{FIELD_ID_PICTURE}", id);
                hasBeenDeleted = command.ExecuteNonQuery() == 1;
            }

            return hasBeenDeleted;
        }

        public static bool Update(PicturesDTO picture)
        {
            bool hasBeenChanged = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE;
                command.Parameters.AddWithValue($"{FIELD_ID_RECIPE}", picture.IdRecipe);
                command.Parameters.AddWithValue($"{FIELD_PICTURE}", picture.Picture);
                command.Parameters.AddWithValue($"{FIELD_ID_PICTURE}", picture.IdPicture);

                hasBeenChanged = command.ExecuteNonQuery() == 1;
            }

            return hasBeenChanged;

        }
    }
}