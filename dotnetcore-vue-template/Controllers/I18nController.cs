using System.Collections.Generic;
using System.Threading.Tasks;
using guepardoapps.dotnetcore_vue_template.Adapter.I18nService;
using Microsoft.AspNetCore.Mvc;

namespace guepardoapps.dotnetcore_vue_template.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("dotnetcore-vue-template/api/v1/[controller]")]
    public class I18nController : ControllerBase
    {
        private readonly II18nServiceAdapter _i18nServiceAdapter;

        public I18nController(II18nServiceAdapter i18nServiceAdapter)
        {
            _i18nServiceAdapter = i18nServiceAdapter;
        }

        [HttpGet]
        [Route("GetAvailableIetf")]
        public async Task<ActionResult<List<string>>> GetAvailableIetf() => await _i18nServiceAdapter.GetAvailableIetf();

        [HttpGet]
        [Route("GetIetfTranslations/{ietfTag}")]
        public async Task<ActionResult<Dictionary<string, Dictionary<string, string>>>> GetIetfTranslations(string ietfTag) => await _i18nServiceAdapter.GetIetfTranslations(ietfTag);

        [HttpGet]
        [Route("GetAllIetfTranslations")]
        public async Task<ActionResult<Dictionary<string, Dictionary<string, Dictionary<string, string>>>>> GetAllIetfTranslations() => await _i18nServiceAdapter.GetAllIetfTranslations();
    }
}
