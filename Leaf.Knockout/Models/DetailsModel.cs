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
            this.Values = new List<Value>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public double Power { get; set; }
        public double Energy { get; set; }

        public List<Value> Values { get; set; }

        public List<int> XValues { get { return this.Values.Select(v => v.X).ToList(); } }
        public List<decimal> YValues { get { return this.Values.Select(v => v.Y).ToList(); } }
    }

    public class Value
    {
        public int X { get; set; }
        public decimal Y { get; set; }
    }

}