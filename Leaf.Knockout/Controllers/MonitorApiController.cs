using Leaf.Knockout.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Leaf.Knockout.Controllers
{
    public class MonitorApiController : ApiController
    {
        // GET api/monitorapi
        public IEnumerable<OverviewViewModel> Get()
        {
            return new OverviewViewModel[] { 
                new OverviewViewModel() { Id= 1, Name = "Plant_1", Type = "Photovoltaic" }, 
                new OverviewViewModel() { Id= 2, Name = "Plant_2", Type = "Hydroelectric" }
            };
        }

        // GET api/monitorapi/5
        public DetailsViewModel Get(int id)
        {
            return new DetailsViewModel()
            {
                Id = id,
                Name = "Plant " + id.ToString(),
                Power = new Random().Next(100),
                Energy = new Random().Next(100000)
            };
        }

        // POST api/monitorapi
        public void Post([FromBody]string value)
        {
        }

        // PUT api/monitorapi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/monitorapi/5
        public void Delete(int id)
        {
        }
    }
}
