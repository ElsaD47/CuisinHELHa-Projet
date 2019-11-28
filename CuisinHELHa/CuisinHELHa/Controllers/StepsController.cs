using System.Collections.Generic;
using CuisinHELHa.DAO;
using CuisinHELHa.DTO;
using Microsoft.AspNetCore.Mvc;

namespace CuisinHELHa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StepsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<StepsDTO>Get()
        {
            return StepsDAO.Query();
        }

        [HttpPost]
        public StepsDTO Post([FromBody] StepsDTO stepsDto)
        {
            return StepsDAO.Post(stepsDto);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            if (StepsDAO.Delete(id))
            {
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut]
        public ActionResult Put([FromBody] StepsDTO stepsDto)
        {
            if (StepsDAO.Update(stepsDto))
            {
                return Ok();
            }

            return BadRequest();
        }
    }
}