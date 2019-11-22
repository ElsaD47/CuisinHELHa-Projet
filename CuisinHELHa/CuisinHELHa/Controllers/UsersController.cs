using System.Collections.Generic;
using CuisinHELHa.DAO;
using CuisinHELHa.DTO;
using Microsoft.AspNetCore.Mvc;

namespace CuisinHELHa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<UsersDTO> Get()
        {
            return UsersDAO.Query();
        }

        [HttpGet]
        public UsersDTO Post([FromBody] UsersDTO usersDto)
        {
            return UsersDAO.Post(usersDto);
        }
    }
}