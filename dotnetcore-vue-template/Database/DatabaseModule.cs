using Autofac;
using guepardoapps.dotnetcore_vue_template.Database.Factories;
using guepardoapps.dotnetcore_vue_template.Database.Repositories;

namespace guepardoapps.dotnetcore_vue_template.Database
{
    public class DatabaseModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<MainDbContext>().AsImplementedInterfaces().InstancePerLifetimeScope();
            builder.RegisterAssemblyTypes(GetType().Assembly).AsClosedTypesOf(typeof(BaseRepository<>)).AsImplementedInterfaces();
            builder.RegisterAssemblyTypes(GetType().Assembly).AsClosedTypesOf(typeof(IBaseFactory<>)).AsImplementedInterfaces();
        }
    }
}
