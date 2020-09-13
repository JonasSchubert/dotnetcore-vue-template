using guepardoapps.dotnetcore_vue_template.Database.Models;

namespace guepardoapps.dotnetcore_vue_template.Database.Factories
{
    public class ExampleFactory : IExampleFactory
    {
        public Example Map(Example example, Example originalExample)
        {
            if (example != null)
            {
                originalExample.Value = example.Value;
                return originalExample;
            }
            else
            {
                return originalExample;
            }
        }
    }
}
