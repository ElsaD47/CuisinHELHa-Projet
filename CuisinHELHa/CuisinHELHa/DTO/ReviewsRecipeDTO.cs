using System;
using System.Data.SqlClient;
using CuisinHELHa.DAO;

namespace CuisinHELHa.DTO
{
    public class ReviewsRecipeDTO
    {
        public int IdUser { get; set; }
        
        public int IdRecipe { get; set; }
        
        public int Rate { get; set; }
        
        public string ReviewMessage { get; set; }
        public string NameRecipe { get; set; }

        public ReviewsRecipeDTO()
        {
        }

        public ReviewsRecipeDTO(int idUser, int idRecipe, int rate, string reviewMessage, string nameRecipe)
        {
            IdUser = idUser;
            IdRecipe = idRecipe;
            Rate = rate;
            ReviewMessage = reviewMessage;
            NameRecipe = nameRecipe;
        }

        public ReviewsRecipeDTO(SqlDataReader reader)
        {
            IdUser = Convert.ToInt32(reader[ReviewsDAO.FIELD_ID_USER].ToString());
            IdRecipe = Convert.ToInt32(reader[ReviewsDAO.FIELD_ID_RECIPE].ToString());
            Rate = Convert.ToInt32(reader[ReviewsDAO.FIELD_RATE].ToString());
            ReviewMessage = reader[ReviewsDAO.FIELD_REVIEW_MESSAGE].ToString();
            NameRecipe = reader[ReviewsDAO.FIELD_NAME_RECIPE].ToString();

        }
    }
}