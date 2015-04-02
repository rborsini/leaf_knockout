using System.Web;
using System.Web.Optimization;

namespace Leaf.Knockout
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/highcharts").Include(
                      "~/Scripts/highcharts.js",
                      "~/Scripts/exporting.js",
                      "~/Scripts/highcharts-ng.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // knockout
            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                      "~/Scripts/knockout-3.3.0.js",
                      "~/Scripts/knockout.mapping-latest.js"));

            // knockout
            bundles.Add(new ScriptBundle("~/bundles/knockout_components").Include(
                      "~/Scripts/ko.components.js"));

            // angular
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.min.js"));

            // gettingStarted page
            bundles.Add(new ScriptBundle("~/bundles/gettingStarted").Include(
                      "~/Scripts/gettingStarted.js"));

            // knockout overview page
            bundles.Add(new ScriptBundle("~/bundles/knockout/overview").Include(
                      "~/Scripts/knockout/overview.js"));

            // knockout details page
            bundles.Add(new ScriptBundle("~/bundles/knockout/details").Include(
                      "~/Scripts/knockout/details.js"));

            // angular overview page
            bundles.Add(new ScriptBundle("~/bundles/angular/overview").Include(
                      "~/Scripts/angular/overview.js"));

            // angular details page
            bundles.Add(new ScriptBundle("~/bundles/angular/details").Include(
                      "~/Scripts/angular/details.js"));


        }
    }
}
