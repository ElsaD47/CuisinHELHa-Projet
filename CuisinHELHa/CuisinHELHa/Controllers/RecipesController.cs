using System.Collections;
using System.Collections.Generic;
using CuisinHELHa.DAO;
using CuisinHELHa.DTO;
using Microsoft.AspNetCore.Mvc;

namespace CuisinHELHa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipesController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<RecipesDTO> Get()
        {
            return RecipesDAO.Query();
        }
        
        [HttpGet("pseudo")]
        public IEnumerable<RecipesPseudoDTO> GetWithPseudo()
        {
            return RecipesDAO.QueryWithPseudo();
        }
        
        [HttpGet("id={id}")]
        public IEnumerable<RecipesPseudoDTO> GetById(int id)
        {
            return RecipesDAO.QueryByIdWithPseudo(id);
        }

        [HttpPost]
        public RecipesDTO Post([FromBody] RecipesDTO recipesDto)
        {
            return RecipesDAO.Post(recipesDto);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            if (RecipesDAO.Delete(id))
            {
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut]
        public ActionResult Put([FromBody] RecipesDTO recipesDto)
        {
            if (RecipesDAO.Update(recipesDto))
            {
                return Ok();
            }

            return BadRequest();
        }
        
    }
}