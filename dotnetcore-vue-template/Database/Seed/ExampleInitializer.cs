using System;
using guepardoapps.dotnetcore_vue_template.Database.Models;

namespace guepardoapps.dotnetcore_vue_template.Database.Seed
{
    public class ExampleInitializer : InitializerBase
    {
        protected override void Seed()
        {
            AddEntity(new Example { Id = Guid.NewGuid(), DateTimeAdded = new DateTime(), Value = 42 });
        }
    }
}
