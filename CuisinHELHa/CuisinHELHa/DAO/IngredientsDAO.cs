using System.Collections.Generic;
using System.Data.SqlClient;
using CuisinHELHa.DTO;
using CuisinHELHa.Models;

namespace CuisinHELHa.DAO
{
    public class IngredientsDAO
    {
        private static readonly string TABLE_NAME = "ingredients";
        public static readonly string FIELD_ID = "idIngredient";
        public static readonly string FIELD_NAMEINGREDIENT = "nameIngredient";

        private static readonly string REQ_QUERY = $"SELECT * FROM {TABLE_NAME}";

        private static readonly string REQ_POST
            = $"INSERT INTO {TABLE_NAME} ({FIELD_NAMEINGREDIENT}) " +
              $"OUTPUT Inserted.{FIELD_ID} " +
              $"VALUES(@{FIELD_NAMEINGREDIENT})";

        private static readonly string REQ_DELETE
            = $"DELETE FROM {TABLE_NAME} WHERE {FIELD_ID} = @{FIELD_ID}";

        private static readonly string REQ_UPDATE
            = $"UPDATE {TABLE_NAME} SET {FIELD_NAMEINGREDIENT} = @{FIELD_NAMEINGREDIENT} " +
              $"WHERE {FIELD_ID} = @{FIELD_ID}";

        public static List<IngredientsDTO> Query()
        {
            List<IngredientsDTO> ingredients = new List<IngredientsDTO>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    ingredients.Add(new IngredientsDTO(reader));
                }
            }
            return ingredients;
        }

        public static IngredientsDTO Post(IngredientsDTO ingredient)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;

                command.Parameters.AddWithValue($@"{FIELD_NAMEINGREDIENT}", ingredient.NameIngredient);
                ingredient.IdIngredient = (int) command.ExecuteScalar();
            }

            return ingredient;
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

        public static bool Update(IngredientsDTO ingredient)
        {
            bool hasBeenChanged = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE;
                command.Parameters.AddWithValue($"{FIELD_NAMEINGREDIENT}", ingredient.NameIngredient);
                command.Parameters.AddWithValue($"{FIELD_ID}", ingredient.IdIngredient);

                hasBeenChanged = command.ExecuteNonQuery() == 1;
            }

            return hasBeenChanged;

        }

    }
}