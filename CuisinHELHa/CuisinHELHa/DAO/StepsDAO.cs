using System.Collections.Generic;
using System.Data.SqlClient;
using CuisinHELHa.DTO;
using CuisinHELHa.Models;

namespace CuisinHELHa.DAO
{
    public class StepsDAO
    {
        private static readonly string TABLE_NAME = "steps";
        public static readonly string FIELD_ID_STEP = "idStep";
        public static readonly string FIELD_ID_RECIPE = "idRecipe";
        public static readonly string FIELD_STEP = "step";
        public static readonly string FIELD_STEPNUMBER = "stepNumber";
        
        //Queries
        private static readonly string REQ_QUERY
            = $"SELECT * FROM {TABLE_NAME}";
        
        private static readonly string REQ_QUERY_BY_RECIPE
            = $"SELECT * FROM {TABLE_NAME} " +
              $"WHERE {FIELD_ID_RECIPE} = @{FIELD_ID_RECIPE}";
        
        private static readonly string REQ_POST
            = $"INSERT INTO {TABLE_NAME} ({FIELD_ID_RECIPE}, {FIELD_STEP}, {FIELD_STEPNUMBER}) " +
              $"OUTPUT Inserted.{FIELD_ID_STEP} " +
              $"VALUES(@{FIELD_ID_RECIPE}, @{FIELD_STEP}, @{FIELD_STEPNUMBER})";

        private static readonly string REQ_DELETE
            = $"DELETE FROM {TABLE_NAME} WHERE {FIELD_ID_STEP} = @{FIELD_ID_STEP}";

        private static readonly string REQ_UPDATE
            = $"UPDATE {TABLE_NAME} SET {FIELD_ID_RECIPE} = @{FIELD_ID_RECIPE}," +
              $"{FIELD_STEP} = @{FIELD_STEP}," +
              $"{FIELD_STEPNUMBER} = @{FIELD_STEPNUMBER} "+
              $"WHERE {FIELD_ID_STEP} =@{FIELD_ID_STEP}";
        
        public static List<StepsDTO> Query()
        {
            List<StepsDTO> recipes = new List<StepsDTO>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    recipes.Add(new StepsDTO(reader));
                }
            }
            return recipes;
        }
        
        public static List<StepsDTO> QueryByRecipe(int id)
        {
            List<StepsDTO> recipes = new List<StepsDTO>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;
                command.Parameters.AddWithValue($@"{FIELD_ID_RECIPE}", id);

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    recipes.Add(new StepsDTO(reader));
                }
            }
            return recipes;
        }

        public static StepsDTO Post(StepsDTO step)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;

                command.Parameters.AddWithValue($@"{FIELD_ID_RECIPE}", step.IdRecipe);
                command.Parameters.AddWithValue($@"{FIELD_STEP}", step.Step);
                command.Parameters.AddWithValue($@"{FIELD_STEPNUMBER}", step.StepNumber);
                step.IdStep = (int) command.ExecuteScalar();
            }

            return step;
        }

        public static bool Delete(int id)
        {
            bool hasBeenDeleted = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE;
                command.Parameters.AddWithValue($@"{FIELD_ID_STEP}", id);
                hasBeenDeleted = command.ExecuteNonQuery() == 1;

            }

            return hasBeenDeleted;
        }

        public static bool Update(StepsDTO step)
        {
            bool hasBeenChanged = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE;
                command.Parameters.AddWithValue($@"{FIELD_ID_RECIPE}", step.IdRecipe);
                command.Parameters.AddWithValue($@"{FIELD_STEP}", step.Step);
                command.Parameters.AddWithValue($@"{FIELD_ID_STEP}", step.IdStep);
                command.Parameters.AddWithValue($@"{FIELD_STEPNUMBER}", step.StepNumber);
                hasBeenChanged = command.ExecuteNonQuery() == 1;

            }

            return hasBeenChanged;
        }
        
    }
}