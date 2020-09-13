using guepardoapps.dotnetcore_vue_template.Database.Models;

namespace guepardoapps.dotnetcore_vue_template.Database.Repositories
{
    public class ExampleRepository : BaseRepository<Example>, IExampleRepository
    {
        public ExampleRepository(IDbContext dbContext) : base(dbContext)
        {
        }
    }
}
