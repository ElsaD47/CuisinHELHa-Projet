using System.Collections.Generic;
using System.Data.SqlClient;
using CuisinHELHa.DTO;
using CuisinHELHa.Models;

namespace CuisinHELHa.DAO
{
    public class ReviewsDAO
    {
        private static readonly string TABLE_NAME = "reviews";
        public static readonly string FIELD_ID_USER = "idUser";
        public static readonly string FIELD_ID_RECIPE = "idRecipe";
        public static readonly string FIELD_RATE = "rate";
        public static readonly string FIELD_REVIEW_MESSAGE = "reviewMessage";
        
        //Queries
        private static readonly string REQ_QUERY
            = $"SELECT * FROM {TABLE_NAME}";

        private static readonly string REQ_POST
            = $"INSERT INTO {TABLE_NAME} ({FIELD_ID_USER}, {FIELD_ID_RECIPE}, {FIELD_RATE}, {FIELD_REVIEW_MESSAGE}) " +
              $"VALUES(@{FIELD_ID_USER}, @{FIELD_ID_RECIPE}, @{FIELD_RATE}, @{FIELD_REVIEW_MESSAGE})";

        private static readonly string REQ_DELETE
            = $"DELETE FROM {TABLE_NAME} WHERE {FIELD_ID_RECIPE} = @{FIELD_ID_RECIPE} AND {FIELD_ID_USER} = @{FIELD_ID_USER}";

        private static readonly string REQ_UPDATE
            = $"UPDATE {TABLE_NAME} SET {FIELD_ID_USER} = @{FIELD_ID_USER}, " +
              $"{FIELD_RATE} = @{FIELD_RATE}, " +
              $"{FIELD_REVIEW_MESSAGE} = @{FIELD_REVIEW_MESSAGE} " +
              $"WHERE {FIELD_ID_RECIPE} = @{FIELD_ID_RECIPE} AND {FIELD_ID_USER} = @{FIELD_ID_USER}";
        
        public static List<ReviewsDTO> Query()
        {
            List<ReviewsDTO> reviews = new List<ReviewsDTO>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    reviews.Add(new ReviewsDTO(reader));
                }
            }

            return reviews;
        }
        
        public static ReviewsDTO Post(ReviewsDTO review)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;

                command.Parameters.AddWithValue($@"{FIELD_ID_USER}", review.IdUser);
                command.Parameters.AddWithValue($@"{FIELD_ID_RECIPE}", review.IdRecipe);
                command.Parameters.AddWithValue($@"{FIELD_RATE}", review.Rate);
                command.Parameters.AddWithValue($@"{FIELD_REVIEW_MESSAGE}", review.ReviewMessage);

                command.ExecuteNonQuery();
            }

            return review;
        }

        public static bool Delete(int idUser, int idRecipe)
        {
            bool hasBeenDeleted = false;

            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE;
                command.Parameters.AddWithValue($@"{FIELD_ID_USER}", idUser);
                command.Parameters.AddWithValue($@"{FIELD_ID_RECIPE}", idRecipe);
                hasBeenDeleted = command.ExecuteNonQuery() == 1;
            }

            return hasBeenDeleted;
        }

        public static bool Update(ReviewsDTO review)
        {
            bool hasBeenChanged = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE;
                command.Parameters.AddWithValue($"{FIELD_RATE}", review.Rate);
                command.Parameters.AddWithValue($"{FIELD_REVIEW_MESSAGE}", review.ReviewMessage);
                command.Parameters.AddWithValue($"{FIELD_ID_USER}", review.IdUser);
                command.Parameters.AddWithValue($"{FIELD_ID_RECIPE}", review.IdRecipe);

                hasBeenChanged = command.ExecuteNonQuery() == 1;
            }

            return hasBeenChanged;

        }
    }
}