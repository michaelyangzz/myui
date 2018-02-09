using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myserver.Controllers
{
    public class MenuItem
    {
        public int id { get; set; }
        public int? parentId { get; set; }
        public string text { get; set; }
        public string url { get; set; }
        public string icon { get; set; }
    }
}
