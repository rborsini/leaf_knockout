using FizzWare.NBuilder;
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
        [Route("api/monitorapi"), HttpGet]
        public IEnumerable<OverviewViewModel> Index([FromUri] int length = 5)
        {
           return Builder<OverviewViewModel>.CreateListOfSize(length)
                .TheFirst(length).With(o => o.Type = "Photovoltaic")
                .TheLast(length / 2).With(o => o.Type = "Hydroelectric")
                .Build();
            
            //return new OverviewViewModel[] { 
            //    new OverviewViewModel() { Id= 1, Name = "Plant_1", Type = "Photovoltaic" }, 
            //    new OverviewViewModel() { Id= 2, Name = "Plant_2", Type = "Hydroelectric" }
            //};
        }

        // GET api/monitorapi/5
        [Route("api/monitorapi/{id}")]
        public DetailsViewModel Get(int id)
        {
            List<Value> values = new List<Value>();
            Random r = new Random(DateTime.Now.Millisecond);
            for (var i = 0; i < 31; i++)
            {
                values.Add(new Value() { X = i, Y = r.Next(100) });
            }

            return new DetailsViewModel()
            {
                Id = id,
                Name = "Plant " + id.ToString(),
                Power = new Random().Next(100),
                Energy = new Random().Next(100000),
                Values = values
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
