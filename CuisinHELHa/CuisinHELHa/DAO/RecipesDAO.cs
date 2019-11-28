using System.Collections.Generic;
using System.Data.SqlClient;
using CuisinHELHa.DTO;
using CuisinHELHa.Models;

namespace CuisinHELHa.DAO
{
    public class RecipesDAO
    {
        private static readonly string TABLE_NAME = "recipes";
        public static readonly string FIELD_ID_RECIPE = "idRecipe";
        public static readonly string FIELD_ID_USER = "idUser";
        public static readonly string FIELD_NAMERECIPE = "nameRecipe";
        public static readonly string FIELD_POSTDATE = "postDate";
        public static readonly string FIELD_SUMMARY = "summary";
        public static readonly string FIELD_PERSONS = "persons";
        public static readonly string FIELD_PREPTIME = "prepTime";
        public static readonly string FIELD_SPICESRATE = "spicesRate";
        public static readonly string FIELD_RECIPETYPE = "recipeType";
        
        //Queries
        private static readonly string REQ_QUERY
            = $"SELECT * FROM {TABLE_NAME}";

        private static readonly string REQ_POST
            = $"INSERT INTO {TABLE_NAME} ({FIELD_ID_USER}, {FIELD_NAMERECIPE}, {FIELD_POSTDATE}, {FIELD_SUMMARY}, {FIELD_PERSONS}, {FIELD_PREPTIME}, {FIELD_SPICESRATE}, {FIELD_RECIPETYPE}) " +
              $"OUTPUT Inserted.{FIELD_ID_RECIPE} " +
              $"VALUES(@{FIELD_ID_USER}, @{FIELD_NAMERECIPE}, @{FIELD_POSTDATE}, @{FIELD_SUMMARY}, @{FIELD_PERSONS}, @{FIELD_PREPTIME}, @{FIELD_SPICESRATE}, @{FIELD_RECIPETYPE})";

        private static readonly string REQ_DELETE
            = $"DELETE FROM {TABLE_NAME} WHERE {FIELD_ID_RECIPE} = @{FIELD_ID_RECIPE}";

        private static readonly string REQ_UPDATE
            = $"UPDATE {TABLE_NAME} SET {FIELD_ID_USER} = @{FIELD_ID_USER}," +
              $"{FIELD_NAMERECIPE} = @{FIELD_NAMERECIPE}," +
              $"{FIELD_POSTDATE} = @{FIELD_POSTDATE}," +
              $"{FIELD_SUMMARY} = @{FIELD_SUMMARY}," +
              $"{FIELD_PERSONS} = @{FIELD_PERSONS}," +
              $"{FIELD_PREPTIME} = @{FIELD_PREPTIME}," +
              $"{FIELD_SPICESRATE} = @{FIELD_SPICESRATE}," +
              $"{FIELD_RECIPETYPE} = @{FIELD_RECIPETYPE} " +
              $"WHERE {FIELD_ID_RECIPE} = @{FIELD_ID_RECIPE}";

        public static List<RecipesDTO> Query()
        {
            List<RecipesDTO> recipes = new List<RecipesDTO>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    recipes.Add(new RecipesDTO(reader));
                }
            }

            return recipes;
        }

        public static RecipesDTO Post(RecipesDTO recipe)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;
                command.Parameters.AddWithValue($@"{FIELD_ID_USER}", recipe.IdUser);
                command.Parameters.AddWithValue($@"{FIELD_NAMERECIPE}", recipe.NameRecipe);
                command.Parameters.AddWithValue($@"{FIELD_POSTDATE}", recipe.PostDate);
                command.Parameters.AddWithValue($@"{FIELD_SUMMARY}", recipe.Summary);
                command.Parameters.AddWithValue($@"{FIELD_PERSONS}", recipe.Persons);
                command.Parameters.AddWithValue($@"{FIELD_PREPTIME}", recipe.PrepTime);
                command.Parameters.AddWithValue($@"{FIELD_SPICESRATE}", recipe.SpiceRate);
                command.Parameters.AddWithValue($@"{FIELD_RECIPETYPE}", recipe.RecipeType);
                recipe.IdRecipe = (int) command.ExecuteScalar();
            }
            return recipe;
        }

        public static bool Delete(int id)
        {
            bool hasBeenDeleted = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE;
                command.Parameters.AddWithValue($@"{FIELD_ID_RECIPE}", id);
                hasBeenDeleted = command.ExecuteNonQuery() == 1;
            }

            return hasBeenDeleted;
        }

        public static bool Update(RecipesDTO recipe)
        {
            bool hasBeenChanged = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE;
                command.Parameters.AddWithValue($@"{FIELD_ID_RECIPE}", recipe.IdRecipe);
                command.Parameters.AddWithValue($@"{FIELD_ID_USER}", recipe.IdUser);
                command.Parameters.AddWithValue($@"{FIELD_PERSONS}", recipe.Persons);
                command.Parameters.AddWithValue($@"{FIELD_SUMMARY}", recipe.Summary);
                command.Parameters.AddWithValue($@"{FIELD_POSTDATE}", recipe.PostDate);
                command.Parameters.AddWithValue($@"{FIELD_PREPTIME}", recipe.PrepTime);
                command.Parameters.AddWithValue($@"{FIELD_NAMERECIPE}", recipe.NameRecipe);
                command.Parameters.AddWithValue($@"{FIELD_RECIPETYPE}", recipe.RecipeType);
                command.Parameters.AddWithValue($@"{FIELD_SPICESRATE}", recipe.SpiceRate);
                hasBeenChanged = command.ExecuteNonQuery() == 1;
            }

            return hasBeenChanged;
        }
    }
}