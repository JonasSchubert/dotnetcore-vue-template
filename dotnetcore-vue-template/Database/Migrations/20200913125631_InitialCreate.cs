using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace guepardoapps.dotnetcore_vue_template.Database.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Examples",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateTimeAdded = table.Column<DateTime>(nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
                    DateTimeUpdated = table.Column<DateTime>(nullable: true),
                    Value = table.Column<uint>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Examples", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Examples",
                columns: new[] { "Id", "DateTimeUpdated", "Value" },
                values: new object[] { new Guid("fa0e4d99-3a6c-4cba-837b-e789bbdf5b47"), null, 42u });

            migrationBuilder.CreateIndex(
                name: "IX_Examples_Id",
                table: "Examples",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Examples");
        }
    }
}
