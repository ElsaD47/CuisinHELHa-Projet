using System;
using System.Collections.Generic;
using System.Diagnostics;
using CuisinHELHa.DAO;
using CuisinHELHa.DTO;
using CuisinHELHa.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CuisinHELHa.Controllers
{
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

        [HttpPost]
        public UsersDTO Post([FromBody] UsersDTO usersDto)
        {
            return UsersDAO.Post(usersDto);
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateModel model)
        {
            Debug.Assert(_usersDAO != null, nameof(_usersDAO) + " != null");
            var user = _usersDAO.Authenticate(model.Username, model.Password);

            if (user == null)
                return BadRequest(new {message = "Username or password is incorrect"});

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