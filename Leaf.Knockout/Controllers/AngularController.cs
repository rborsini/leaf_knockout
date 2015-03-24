using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Leaf.Knockout.Controllers
{
    public class AngularController : Controller
    {
        //
        // GET: /Angular/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Details()
        {
            return View();
        }
    }
}
