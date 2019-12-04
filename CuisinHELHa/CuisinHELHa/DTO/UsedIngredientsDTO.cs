using System;
using System.Data.SqlClient;
using CuisinHELHa.DAO;

namespace CuisinHELHa.DTO
{
    public class UsedIngredientsDTO
    {
        public int IdIngredient { get; set; }
        public int IdRecipe { get; set; }
        public short Quantity { get; set; }
        public string Unit { get; set; }
        public string NameIngredient { get; set; }

        public UsedIngredientsDTO()
        {
        }

        public UsedIngredientsDTO(int idIngredient, int idRecipe, short quantity, string unit, string nameIngredient)
        {
            IdIngredient = idIngredient;
            IdRecipe = idRecipe;
            Quantity = quantity;
            Unit = unit;
            NameIngredient = nameIngredient;
        }

        public UsedIngredientsDTO(SqlDataReader reader)
        {
            IdIngredient = Convert.ToInt32(reader[IngredientsDAO.FIELD_ID_INGREDIENT].ToString());
            IdRecipe = Convert.ToInt32(reader[IngredientsDAO.FIELD_ID_RECIPE].ToString());
            Quantity = Convert.ToInt16(reader[IngredientsDAO.FIELD_QUANTITY].ToString());
            Unit = reader[IngredientsDAO.FIELD_UNIT].ToString();
            NameIngredient = reader[IngredientsDAO.FIELD_NAME_INGREDIENT].ToString();
        }
    }
}