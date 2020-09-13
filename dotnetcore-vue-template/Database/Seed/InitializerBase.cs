using guepardoapps.dotnetcore_vue_template.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace guepardoapps.dotnetcore_vue_template.Database.Seed
{
    public abstract class InitializerBase
    {
        private ModelBuilder _modelBuilder;

        public void Seed(ModelBuilder modelBuilder)
        {
            _modelBuilder = modelBuilder;
            Seed();
        }

        protected abstract void Seed();

        protected void AddEntity<T>(T entity)
            where T : Entity
        {
            _modelBuilder.Entity<T>().HasData(entity);
        }
    }
}
