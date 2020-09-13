using System.Collections.Generic;
using System.Threading.Tasks;

namespace guepardoapps.dotnetcore_vue_template.Adapter.I18nService
{
    public interface II18nServiceAdapter
    {
        Task<List<string>> GetAvailableIetf();

        Task<Dictionary<string, Dictionary<string, string>>> GetIetfTranslations(string ietfTag);

        Task<Dictionary<string, Dictionary<string, Dictionary<string, string>>>> GetAllIetfTranslations();
    }
}
