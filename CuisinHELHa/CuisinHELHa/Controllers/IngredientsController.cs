using System.Collections;
using System.Collections.Generic;
using CuisinHELHa.DAO;
using CuisinHELHa.DTO;
using Microsoft.AspNetCore.Mvc;

namespace CuisinHELHa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IngredientsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<IngredientsDTO> Get()
        {
            return IngredientsDAO.Query();
        }

        [HttpGet("recipe={recipeId}")]
        public IEnumerable<UsedIngredientsDTO> GetFromRecipe(int recipeId)
        {
            return IngredientsDAO.QueryFromRecipe(recipeId);
        }

        [HttpPost]
        public IngredientsDTO Post([FromBody] IngredientsDTO ingredientDto)
        {
            return IngredientsDAO.Post(ingredientDto);
        }

        [HttpPost("recipe")]
        public UsedIngredientsDTO PostToRecipe([FromBody] UsedIngredientsDTO ingredientDto)
        {
            return IngredientsDAO.PostToRecipe(ingredientDto);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            if (IngredientsDAO.Delete(id))
            {
                return Ok();
            }
            return BadRequest();
        }
        
        [HttpDelete("recipe={idRecipe}/ingredient={idIngredient}")]
        public ActionResult DeleteFromRecipe(int idRecipe, int idIngredient)
        {
            if (IngredientsDAO.DeleteFromRecipe(idRecipe, idIngredient))
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPut]
        public ActionResult Put([FromBody] IngredientsDTO ingredientDto)
        {
            if (IngredientsDAO.Update(ingredientDto))
            {
                return Ok();
            }

            return BadRequest();
        }
        
        [HttpPut ("recipe")]
        public ActionResult PutInRecipe([FromBody] UsedIngredientsDTO ingredientDto)
        {
            if (IngredientsDAO.UpdateInRecipe(ingredientDto))
            {
                return Ok();
            }

            return BadRequest();
        }
        
    }
}