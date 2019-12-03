using System;
using System.Data.SqlClient;
using CuisinHELHa.DAO;

namespace CuisinHELHa.DTO
{
    public class ReviewsPseudoDTO
    {
        public int IdUser { get; set; }
        
        public int IdRecipe { get; set; }
        
        public int Rate { get; set; }
        
        public string ReviewMessage { get; set; }
        public string Pseudo { get; set; }

        public ReviewsPseudoDTO()
        {
        }

        public ReviewsPseudoDTO(int idUser, int idRecipe, int rate, string reviewMessage, string pseudo)
        {
            IdUser = idUser;
            IdRecipe = idRecipe;
            Rate = rate;
            ReviewMessage = reviewMessage;
            Pseudo = pseudo;
        }

        public ReviewsPseudoDTO(SqlDataReader reader)
        {
            IdUser = Convert.ToInt32(reader[ReviewsDAO.FIELD_ID_USER].ToString());
            IdRecipe = Convert.ToInt32(reader[ReviewsDAO.FIELD_ID_RECIPE].ToString());
            Rate = Convert.ToInt32(reader[ReviewsDAO.FIELD_RATE].ToString());
            ReviewMessage = reader[ReviewsDAO.FIELD_REVIEW_MESSAGE].ToString();
            Pseudo = reader[ReviewsDAO.FIELD_USER_PSEUDO].ToString();

        }
    }
}