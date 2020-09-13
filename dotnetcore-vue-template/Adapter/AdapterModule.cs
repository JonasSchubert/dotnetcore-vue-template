using Autofac;
using guepardoapps.dotnetcore_vue_template.Adapter.I18nService;

namespace guepardoapps.dotnetcore_vue_template.Adapter
{
    public class AdapterModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<I18nServiceAdapter>().AsImplementedInterfaces();
        }
    }
}
