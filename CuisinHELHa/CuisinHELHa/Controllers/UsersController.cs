using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using CuisinHELHa.DAO;
using CuisinHELHa.DTO;
using CuisinHELHa.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CuisinHELHa.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private IUsersDAO _usersDAO;

        public UsersController(IUsersDAO usersDao)
        {
            _usersDAO = usersDao;
        }

        [HttpGet]
        public IEnumerable<UsersDTO> Get()
        {
            return UsersDAO.Query();
        }

        
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Post([FromBody] UsersDTO usersDto)
        {
            String errorMessage = "";
            Boolean pseudoExists = UsersDAO.GetUserByPseudo(usersDto.Pseudo).IdUser != 0;
            Boolean mailExists = UsersDAO.GetUserByMail(usersDto.Mail).IdUser != 0;

            if (pseudoExists && mailExists)
            {
                errorMessage = "Both username and email are already taken.";
            } else if (pseudoExists)
            {
                errorMessage = "Username is already being used.";
            } else if (mailExists)
            {
                errorMessage = "Email is already being used.";
            }
            
            if(errorMessage != "")
                return BadRequest(new {message = errorMessage});
            
            var user = UsersDAO.Post(usersDto);
            return Ok(user);
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateModel model)
        {
            Debug.Assert(_usersDAO != null, nameof(_usersDAO) + " != null");
            var user = _usersDAO.Authenticate(model.Username, model.Password);

            if (user == null)
                return BadRequest(new {message = "Username or password is incorrect."});

            return Ok(user);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            if (UsersDAO.Delete(id))
            {
                return Ok();
            }

            return BadRequest();
        }
        
        [HttpDelete("all-but-admin")]
        public void Delete()
        {
            UsersDAO.DeleteAllButAdmin();
        }
        
        [HttpDelete("pseudo={pseudo}")]
        public ActionResult Delete(string pseudo)
        {
            if (UsersDAO.Delete(pseudo))
            {
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut]
        public ActionResult Put([FromBody] UsersDTO usersDto)
        {
            if (UsersDAO.Update(usersDto))
            {
                return Ok();
            }

            return BadRequest();
        }
    }
}