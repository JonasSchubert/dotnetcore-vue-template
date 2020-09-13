using System.Diagnostics;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace guepardoapps.dotnetcore_vue_template.Pages
{
    public class ErrorModel : PageModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

        public void OnGet()
        {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
        }
    }
}
