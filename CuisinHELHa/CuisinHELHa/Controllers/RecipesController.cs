using System.Collections;
using System.Collections.Generic;
using System.Net;
using CuisinHELHa.DAO;
using CuisinHELHa.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CuisinHELHa.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class RecipesController : ControllerBase
    {
        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<RecipesDTO> Get()
        {
            return RecipesDAO.Query();
        }
        
        [AllowAnonymous]
        [HttpGet("pseudo")]
        public IEnumerable<RecipesPseudoDTO> GetWithPseudo()
        {
            return RecipesDAO.QueryWithPseudo();
        }
        
        [AllowAnonymous]
        [HttpGet("id={id}")]
        public IEnumerable<RecipesPseudoDTO> GetById(int id)
        {
            return RecipesDAO.QueryByIdWithPseudo(id);
        }

        [AllowAnonymous]
        [HttpGet("text={text}")]
        public IEnumerable<RecipesPseudoDTO> GetById(string text)
        {
            text.Replace('_', ' ');
            return RecipesDAO.QueryByTextWithPseudo(text);
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