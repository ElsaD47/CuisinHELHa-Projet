using System.Collections.Generic;
using System.Data.SqlClient;
using CuisinHELHa.DTO;
using CuisinHELHa.Models;

namespace CuisinHELHa.DAO
{
    public class IngredientsDAO
    {
        
        private static readonly string TABLE_INGREDIENT = "ingredients";
        private static readonly string TABLE_USED_INGREDIENT = "usedIngredients";
        public static readonly string FIELD_ID_INGREDIENT = "idIngredient";
        public static readonly string FIELD_ID_RECIPE = "idRecipe";
        public static readonly string FIELD_NAME_INGREDIENT = "nameIngredient";
        public static readonly string FIELD_UNIT = "unit";
        public static readonly string FIELD_QUANTITY = "quantity";

        //pour les ingredients simples
        
        private static readonly string REQ_QUERY_INGREDIENT = $"SELECT * FROM {TABLE_INGREDIENT}";

        private static readonly string REQ_POST_INGREDIENT
            = $"INSERT INTO {TABLE_INGREDIENT} ({FIELD_NAME_INGREDIENT}) " +
              $"OUTPUT Inserted.{FIELD_ID_INGREDIENT} " +
              $"VALUES(@{FIELD_NAME_INGREDIENT})";

        private static readonly string REQ_DELETE_INGREDIENT
            = $"DELETE FROM {TABLE_INGREDIENT} WHERE {FIELD_ID_INGREDIENT} = @{FIELD_ID_INGREDIENT}";

        private static readonly string REQ_UPDATE_INGREDIENT
            = $"UPDATE {TABLE_INGREDIENT} SET {FIELD_NAME_INGREDIENT} = @{FIELD_NAME_INGREDIENT} " +
              $"WHERE {FIELD_ID_INGREDIENT} = @{FIELD_ID_INGREDIENT}";

        public static List<IngredientsDTO> Query()
        {
            List<IngredientsDTO> ingredients = new List<IngredientsDTO>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY_INGREDIENT;

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
                command.CommandText = REQ_POST_INGREDIENT;

                command.Parameters.AddWithValue($@"{FIELD_NAME_INGREDIENT}", ingredient.NameIngredient);
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
                command.CommandText = REQ_DELETE_INGREDIENT;
                command.Parameters.AddWithValue($@"{FIELD_ID_INGREDIENT}", id);
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
                command.CommandText = REQ_UPDATE_INGREDIENT;
                command.Parameters.AddWithValue($"{FIELD_NAME_INGREDIENT}", ingredient.NameIngredient);
                command.Parameters.AddWithValue($"{FIELD_ID_INGREDIENT}", ingredient.IdIngredient);

                hasBeenChanged = command.ExecuteNonQuery() == 1;
            }
            return hasBeenChanged;
        }

        //pour les ingrédients liés aux recettes

        public static readonly string REQ_QUERY_FROM_RECIPE 
            = $"SELECT u.*, i.{FIELD_NAME_INGREDIENT} FROM {TABLE_USED_INGREDIENT} u " +
              $"JOIN {TABLE_INGREDIENT} i ON u.{FIELD_ID_INGREDIENT} = i.{FIELD_ID_INGREDIENT} " +
              $"WHERE {FIELD_ID_RECIPE} = @{FIELD_ID_RECIPE}";

        public static readonly string REQ_POST_TO_RECIPE
            = $"INSERT INTO {TABLE_USED_INGREDIENT} " +
              $"({FIELD_ID_RECIPE}, {FIELD_ID_INGREDIENT}, {FIELD_QUANTITY}, {FIELD_UNIT}) " +
              $"VALUES (@{FIELD_ID_RECIPE}, @{FIELD_ID_INGREDIENT}, @{FIELD_QUANTITY}, @{FIELD_UNIT})";

        public static readonly string REQ_DELETE_FROM_RECIPE
            = $"DELETE FROM {TABLE_USED_INGREDIENT} " +
              $"WHERE {FIELD_ID_RECIPE} = @{FIELD_ID_RECIPE} " +
              $"AND {FIELD_ID_INGREDIENT} = @{FIELD_ID_INGREDIENT}";

        public static readonly string REQ_UPDATE_IN_RECIPE
            = $"UPDATE {TABLE_USED_INGREDIENT} " +
              $"SET {FIELD_QUANTITY} = @{FIELD_QUANTITY}, {FIELD_UNIT} = @{FIELD_UNIT} " +
              $"WHERE {FIELD_ID_RECIPE} = @{FIELD_ID_RECIPE} " +
              $"AND {FIELD_ID_INGREDIENT} = @{FIELD_ID_INGREDIENT}";

        public static List<UsedIngredientsDTO> QueryFromRecipe(int recipeId)
        {
            List<UsedIngredientsDTO> ingredients = new List<UsedIngredientsDTO>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY_FROM_RECIPE;
                command.Parameters.AddWithValue($"{FIELD_ID_RECIPE}", recipeId);

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    ingredients.Add(new UsedIngredientsDTO(reader));
                }
            }
            return ingredients;
        }
        
        public static UsedIngredientsDTO PostToRecipe(UsedIngredientsDTO ingredient)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST_TO_RECIPE;

                command.Parameters.AddWithValue($@"{FIELD_ID_RECIPE}", ingredient.IdRecipe);
                command.Parameters.AddWithValue($@"{FIELD_ID_INGREDIENT}", ingredient.IdIngredient);
                command.Parameters.AddWithValue($@"{FIELD_QUANTITY}", ingredient.Quantity);
                command.Parameters.AddWithValue($@"{FIELD_UNIT}", ingredient.Unit);
                command.ExecuteNonQuery();
            }

            return ingredient;
        }

        public static bool DeleteFromRecipe(int idRecipe, int idIngredient)
        {
            bool hasBeenDeleted = false;

            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE_FROM_RECIPE;
                command.Parameters.AddWithValue($@"{FIELD_ID_RECIPE}", idRecipe);
                command.Parameters.AddWithValue($@"{FIELD_ID_INGREDIENT}", idIngredient);
                hasBeenDeleted = command.ExecuteNonQuery() == 1;
            }

            return hasBeenDeleted;
        }

        public static bool UpdateInRecipe(UsedIngredientsDTO ingredient)
        {
            bool hasBeenChanged = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE_IN_RECIPE;
                command.Parameters.AddWithValue($"{FIELD_ID_RECIPE}", ingredient.IdRecipe);
                command.Parameters.AddWithValue($"{FIELD_ID_INGREDIENT}", ingredient.IdIngredient);
                command.Parameters.AddWithValue($"{FIELD_QUANTITY}", ingredient.Quantity);
                command.Parameters.AddWithValue($"{FIELD_UNIT}", ingredient.Unit);

                hasBeenChanged = command.ExecuteNonQuery() == 1;
            }
            return hasBeenChanged;
        }

    }
}