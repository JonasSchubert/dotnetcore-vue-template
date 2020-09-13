using guepardoapps.dotnetcore_vue_template.Database.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;

namespace guepardoapps.dotnetcore_vue_template.Database
{
    public interface IDbContext
    {
        IModel Model { get; }

        DatabaseFacade Database { get; }

        ChangeTracker ChangeTracker { get; }

        DbSet<T> Set<T>() where T : Entity;

        EntityEntry<T> Entry<T>(T entity) where T : class;

        int SaveChanges();

        void Rollback();
    }
}