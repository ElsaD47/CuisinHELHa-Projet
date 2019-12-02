using System;
using System.Data.SqlClient;
using CuisinHELHa.DAO;

namespace CuisinHELHa.DTO
{
    public class StepsDTO
    {
        public int IdStep { get; set; }
        
        public int IdRecipe { get; set; }
        
        public string Step { get; set; }
        
        public int StepNumber { get; set; }

        public StepsDTO()
        {
        }

        public StepsDTO(int idStep, int idRecipe, string step, int stepNumber)
        {
            IdStep = idStep;
            IdRecipe = idRecipe;
            Step = step;
            StepNumber = StepNumber;
        }

        public StepsDTO(SqlDataReader reader)
        {
            IdStep = Convert.ToInt32(reader[StepsDAO.FIELD_ID_STEP].ToString());
            IdRecipe = Convert.ToInt32(reader[StepsDAO.FIELD_ID_RECIPE].ToString());
            Step = reader[StepsDAO.FIELD_STEP].ToString();
            StepNumber = Convert.ToInt32(reader[StepsDAO.FIELD_STEPNUMBER].ToString());
        }
    }
    
}