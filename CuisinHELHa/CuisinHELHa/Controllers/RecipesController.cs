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

        [HttpGet]
        public IEnumerable<RecipesDTO> Get()
        {
            return RecipesDAO.Query();
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