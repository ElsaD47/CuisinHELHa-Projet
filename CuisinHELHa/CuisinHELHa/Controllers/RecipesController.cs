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

        [HttpPost]
        public RecipesDTO Post([FromBody] RecipesDTO recipesDto)
        {
            return RecipesDAO.Post(recipesDto);
        }
        
    }
}