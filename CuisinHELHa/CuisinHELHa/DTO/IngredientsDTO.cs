using System;
using System.Data.SqlClient;
using CuisinHELHa.DAO;

namespace CuisinHELHa.DTO
{
    public class IngredientsDTO
    {
        public int IdIngredient { get; set; }
        public string NameIngredient { get; set; }

        public IngredientsDTO(int idIngredient, string nameIngredient)
        {
            this.IdIngredient = idIngredient;
            this.NameIngredient = nameIngredient;
        }

        public IngredientsDTO()
        {
        }

        public IngredientsDTO(SqlDataReader reader)
        {
            IdIngredient = Convert.ToInt32(reader[IngredientsDAO.FIELD_ID].ToString());
            NameIngredient = reader[IngredientsDAO.FIELD_NAMEINGREDIENT].ToString();
        }
    }
}