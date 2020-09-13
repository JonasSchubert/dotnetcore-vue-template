﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using guepardoapps.dotnetcore_vue_template.Database;

namespace guepardoapps.dotnetcore_vue_template.Database.Migrations
{
    [DbContext(typeof(MainDbContext))]
    partial class MainDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("guepardoapps.dotnetcore_vue_template.Database.Models.Example", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<DateTime>("DateTimeAdded")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime(6)")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<DateTime?>("DateTimeUpdated")
                        .HasColumnType("datetime(6)");

                    b.Property<uint>("Value")
                        .HasColumnType("int unsigned");

                    b.HasKey("Id");

                    b.HasIndex("Id");

                    b.ToTable("Examples");

                    b.HasData(
                        new
                        {
                            Id = new Guid("fa0e4d99-3a6c-4cba-837b-e789bbdf5b47"),
                            DateTimeAdded = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Value = 42u
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
