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

        [HttpGet("recipe={id}")]
        public IEnumerable<ReviewsPseudoDTO> GetByRecipe(int id)
        {
            return ReviewsDAO.QueryByRecipeWithPseudo(id);
        }
        
        [HttpGet("user={id}")]
        public IEnumerable<ReviewsRecipeDTO> GetByUser(int id)
        {
            return ReviewsDAO.QueryByUserWithRecipeName(id);
        }
        
        [HttpGet("average/{id}")]
        public double GetAvgByRecipe(int id)
        {
            return ReviewsDAO.QueryAvgByRecipe(id);
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