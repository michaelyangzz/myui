using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace myserver.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
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
