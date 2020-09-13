using guepardoapps.dotnetcore_vue_template.Database.Factories;
using guepardoapps.dotnetcore_vue_template.Database.Models;
using guepardoapps.dotnetcore_vue_template.Database.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace guepardoapps.dotnetcore_vue_template.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("dotnetcore-vue-template/api/v1/[controller]")]
    public class ExamplesController : BaseController<Example, ExamplesController, IExampleRepository, IExampleFactory>
    {
        public ExamplesController(ILogger<ExamplesController> logger, IExampleRepository repository, IExampleFactory factory)
            : base(logger, repository, factory)
        { }
    }
}
