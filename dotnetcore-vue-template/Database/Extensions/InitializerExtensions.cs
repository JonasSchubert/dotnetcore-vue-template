using guepardoapps.dotnetcore_vue_template.Database.Seed;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Reflection;

namespace guepardoapps.dotnetcore_vue_template.Database.Extensions
{
    public static class InitializerExtensions
    {
        public static void ApplyInitializationsFromAssembly(this ModelBuilder modelBuilder, Assembly assembly)
        {
            var types = assembly
                .GetTypes()
                .Where(t => t.BaseType == typeof(InitializerBase))
                .ToList();

            types.ForEach(t => ((InitializerBase)Activator.CreateInstance(t)).Seed(modelBuilder));
        }
    }
}
