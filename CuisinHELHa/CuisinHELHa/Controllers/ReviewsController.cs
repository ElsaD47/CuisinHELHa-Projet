using System.Collections.Generic;
using CuisinHELHa.DAO;
using CuisinHELHa.DTO;
using Microsoft.AspNetCore.Mvc;

namespace CuisinHELHa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<ReviewsDTO> Get()
        {
            return ReviewsDAO.Query();
        }

        //?
        [HttpPost]
        public ReviewsDTO Post([FromBody] ReviewsDTO reviewsDto)
        {
            return ReviewsDAO.Post(reviewsDto);
        }

        [HttpDelete("{idUser}/{idRecipe}")]
        public ActionResult Delete(int idUser, int idRecipe)
        {
            if (ReviewsDAO.Delete(idUser, idRecipe))
            {
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut]
        public ActionResult Put([FromBody] ReviewsDTO reviewsDto)
        {
            if (ReviewsDAO.Update(reviewsDto))
            {
                return Ok();
            }

            return BadRequest();
        }
    }
}