using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace myserver.Controllers
{
    [Route("api/[controller]/[action]")]
    [Authorize]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public class A
        {
            public string u { get; set; }
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<int> Login([FromBody]A u)
        {
            if (User.Identity.IsAuthenticated)
                return 1;

            if (u.u != "123")
                return 0;

            var claims = new List<Claim>
                {
                 new Claim(ClaimTypes.Name, "123@qq.com"),
                 new Claim("FullName", "YangBei")
                };

            var claimsIdentity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme);

            var authProperties = new AuthenticationProperties
            {
                //AllowRefresh = <bool>,
                // Refreshing the authentication session should be allowed.

                ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(5),
                // The time at which the authentication ticket expires. A 
                // value set here overrides the ExpireTimeSpan option of 
                // CookieAuthenticationOptions set with AddCookie.

                IsPersistent = true
                // Whether the authentication session is persisted across 
                // multiple requests. Required when setting the 
                // ExpireTimeSpan option of CookieAuthenticationOptions 
                // set with AddCookie. Also required when setting 
                // ExpiresUtc.

                //IssuedUtc = <DateTimeOffset>,
                // The time at which the authentication ticket was issued.

                //RedirectUri = <string>
                // The full path or absolute URI to be used as an http 
                // redirect response value.
            };

            await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(claimsIdentity),
                authProperties);

            return 1;
        }

        [HttpPost]
        public async Task<int> Logout()
        {
            await HttpContext.SignOutAsync(
    CookieAuthenticationDefaults.AuthenticationScheme);

            return 1;
        }

        [HttpGet]
        public IEnumerable<MenuItem> GetMenus()
        {
                return new List<MenuItem>
            {
                new MenuItem() { id=1,parentId=null, icon="menu-icon fa fa-desktop", text="Dashboard", url="/dashboard" },
                new MenuItem() { id=2,parentId=1, icon="menu-icon fa fa-caret-right",  text="Layouts", url="/dashboard" },
                new MenuItem() { id=3,parentId=2, icon="menu-icon fa fa-caret-right", text="Top Menu", url="/topmenu" },
                new MenuItem() { id=4,parentId=2, icon="menu-icon fa fa-caret-right",  text="Top Menu2", url="/topmenu2" },
                new MenuItem() { id=5,parentId=2, icon="menu-icon fa fa-caret-right", text="Top Menu3", url="/topmenu" },
                new MenuItem() { id=6,parentId=5, icon="menu-icon fa fa-leaf green",  text="Top Menu4", url="/topmenu4" },
                new MenuItem() { id=7,parentId=5, icon="menu-icon fa fa-plus purple",  text="Top Menu5", url="/topmenu5" },
                new MenuItem() { id=8,parentId=1, icon="menu-icon fa fa-desktop",  text="Elements", url="/elements" },


                new MenuItem() { id=9,parentId=null, icon="menu-icon fa fa-desktop", text="Dashboard", url="/dashboard" },
                new MenuItem() { id=10,parentId=9, icon="menu-icon fa fa-caret-right",  text="Layouts", url="/dashboard" },
                new MenuItem() { id=11,parentId=10, icon="menu-icon fa fa-caret-right", text="Top Menu", url="/topmenu" },
                new MenuItem() { id=12,parentId=10, icon="menu-icon fa fa-caret-right",  text="Top Menu2", url="/topmenu2" },
                new MenuItem() { id=13,parentId=10, icon="menu-icon fa fa-caret-right", text="Top Menu3", url="/topmenu" },
                new MenuItem() { id=14,parentId=13, icon="menu-icon fa fa-leaf green",  text="Top Menu4", url="/topmenu4" },
                new MenuItem() { id=15,parentId=13, icon="menu-icon fa fa-plus purple",  text="Top Menu5", url="/topmenu5" },
                new MenuItem() { id=16,parentId=9, icon="menu-icon fa fa-desktop",  text="Elements", url="/elements" },
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
