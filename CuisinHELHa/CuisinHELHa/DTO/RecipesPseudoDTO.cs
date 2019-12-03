using System;
using System.Data.SqlClient;
using CuisinHELHa.DAO;

namespace CuisinHELHa.DTO
{
    public class RecipesPseudoDTO
    {
        public int IdRecipe { get; set; }
        public int IdUser { get; set; }
        public string NameRecipe { get; set; }
        public string PostDate { get; set; }
        public string Summary { get; set; }
        public int Persons { get; set; }
        public int PrepTime { get; set; }
        public int SpiceRate { get; set; }
        public string RecipeType { get; set; }
        public string Pseudo { get; set; }

        public RecipesPseudoDTO(int idRecipe, int idUser, string nameRecipe, string postDate, string summary, int persons, int prepTime, int spiceRate, string recipeType, string pseudo)
        {
            this.IdRecipe = idRecipe;
            IdUser = idUser;
            NameRecipe = nameRecipe;
            PostDate = postDate;
            Summary = summary;
            Persons = persons;
            PrepTime = prepTime;
            SpiceRate = spiceRate;
            RecipeType = recipeType;
            Pseudo = pseudo;
        }

        public RecipesPseudoDTO()
        {
        }

        public RecipesPseudoDTO(SqlDataReader reader)
        {
            IdRecipe = Convert.ToInt32(reader[RecipesDAO.FIELD_ID_RECIPE].ToString());
            IdUser = Convert.ToInt32(reader[RecipesDAO.FIELD_ID_USER].ToString()) ;
            NameRecipe = reader[RecipesDAO.FIELD_NAMERECIPE].ToString();
            PostDate = reader[RecipesDAO.FIELD_POSTDATE].ToString();
            Summary = reader[RecipesDAO.FIELD_SUMMARY].ToString();
            Persons = Convert.ToInt32(reader[RecipesDAO.FIELD_PERSONS].ToString());
            PrepTime = Convert.ToInt32(reader[RecipesDAO.FIELD_PREPTIME].ToString());
            SpiceRate = Convert.ToInt32(reader[RecipesDAO.FIELD_SPICESRATE].ToString());
            RecipeType = reader[RecipesDAO.FIELD_RECIPETYPE].ToString();
            Pseudo = reader[RecipesDAO.FIELD_USER_PSEUDO_USER].ToString();
        }
    }
}