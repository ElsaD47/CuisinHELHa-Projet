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

        [HttpPost]
        public IngredientsDTO Post([FromBody] IngredientsDTO ingredientDto)
        {
            return IngredientsDAO.Post(ingredientDto);
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

        [HttpPut]
        public ActionResult Put([FromBody] IngredientsDTO ingredientDTO)
        {
            if (IngredientsDAO.Update(ingredientDTO))
            {
                return Ok();
            }

            return BadRequest();
        }
        
    }
}