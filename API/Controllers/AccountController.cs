

using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController: BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public AccountController(DataContext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDto){

            if(await UserExist(registerDto.Username)) return BadRequest("Username is already in taken");

            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return new UserDTO
            {
                Username = user.UserName,
                Token = _tokenService.createToken(user)
            };
        }

[       HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDto){
            var user = await _context.Users.SingleOrDefaultAsync(user => user.UserName == loginDto.Username.ToLower());
            if(user == null) return Unauthorized("User with given name does not exist");

            //the hmac passwordSalt will give the same hashed password
            var hmac = new HMACSHA512(user.PasswordSalt);
            var ComputedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            for(int i = 0; i < ComputedHash.Length; i++){
                if(ComputedHash[i] != user.PasswordHash[i]) return Unauthorized("Password not valid");
            }
            
            return new UserDTO
            {
                Username = user.UserName,
                Token = _tokenService.createToken(user)
            };
        }

        private async Task<bool> UserExist(string username){
            return await _context.Users.AnyAsync(user => user.UserName == username.ToLower());
        }


        
    }
}