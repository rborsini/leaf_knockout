using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Leaf.Knockout.Models
{
    public class DetailsViewModel
    {

        public DetailsViewModel()
        {
            this.Values = new List<decimal>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public double Power { get; set; }
        public double Energy { get; set; }
        public List<decimal> Values { get; set; }
    }

}