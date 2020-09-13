using guepardoapps.dotnetcore_vue_template.Database.Models;

namespace guepardoapps.dotnetcore_vue_template.Database.Factories
{
    public interface IBaseFactory<T> where T : Entity
    {
        T Map(T entity, T originalEntity);
    }
}
