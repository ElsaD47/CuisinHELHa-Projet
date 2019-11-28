﻿using System.Collections.Generic;
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

        [HttpPost]
        public UsersDTO Post([FromBody] UsersDTO usersDto)
        {
            return UsersDAO.Post(usersDto);
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