using System;
using System.Data.SqlClient;
using CuisinHELHa.DAO;

namespace CuisinHELHa.DTO
{
    public class PicturesDTO
    {
        public int IdPicture { get; set; }
        
        public int IdRecipe { get; set; }
        
        public string Picture { get; set; }

        public PicturesDTO()
        {
        }

        public PicturesDTO(int idPicture, int idRecipe, string picture)
        {
            this.IdPicture = idPicture;
            IdRecipe = idRecipe;
            Picture = picture;
        }

        public PicturesDTO(SqlDataReader reader)
        {
            IdPicture = Convert.ToInt32(reader[PicturesDAO.FIELD_ID_PICTURE].ToString());
            IdRecipe = Convert.ToInt32(reader[PicturesDAO.FIELD_ID_RECIPE].ToString());
            Picture = reader[PicturesDAO.FIELD_PICTURE].ToString();
        }
    }
}