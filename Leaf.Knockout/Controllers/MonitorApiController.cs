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
        public IEnumerable<OverviewViewModel> Index([FromUri] int elements = 5)
        {
            return Builder<OverviewViewModel>.CreateListOfSize(elements)
                .TheFirst(elements).With(o => o.Type = "Photovoltaic")
                .TheLast(elements / 2).With(o => o.Type = "Hydroelectric")
                .Build();
        }

        // GET api/monitorapi/5
        [Route("api/monitorapi/{id}")]
        public DetailsViewModel Get(int id)
        {
            List<decimal> values = new List<decimal>();
            Random r = new Random(DateTime.Now.Millisecond);
            for (var i = 0; i < 31; i++)
            {
                values.Add(r.Next(100));
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

    }
}
