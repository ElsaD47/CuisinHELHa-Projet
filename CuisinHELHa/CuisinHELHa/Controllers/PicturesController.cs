using System.Collections.Generic;
using CuisinHELHa.DAO;
using CuisinHELHa.DTO;
using Microsoft.AspNetCore.Mvc;

namespace CuisinHELHa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PicturesController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<PicturesDTO> Get()
        {
            return PicturesDAO.Query();
        }

        [HttpPost]
        public PicturesDTO Post([FromBody] PicturesDTO picturesDto)
        {
            return PicturesDAO.Post(picturesDto);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            if (PicturesDAO.Delete(id))
            {
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut]
        public ActionResult Put([FromBody] PicturesDTO picturesDto)
        {
            if (PicturesDAO.Update(picturesDto))
            {
                return Ok();
            }

            return BadRequest();
        }
    }
}