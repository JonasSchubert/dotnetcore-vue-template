using System;
using System.Collections.Generic;
using guepardoapps.dotnetcore_vue_template.Database.Models;

namespace guepardoapps.dotnetcore_vue_template.Database.Repositories
{
    public interface IBaseRepository<T> where T : Entity
    {
        void Attach(IEnumerable<Guid> entityIds);

        Guid Create(T entity);

        void Create(IEnumerable<T> entities);

        void Delete(T entity);

        void Detach(IEnumerable<T> entities);

        bool Exists(Guid id);

        T FirstOrDefault(Func<T, bool> predicate);

        IList<T> Get();

        IList<T> Get(Func<T, bool> predicate);

        void SaveChanges();

        T SingleOrDefault(Func<T, bool> predicate);

        void Update(T entity);
    }
}
