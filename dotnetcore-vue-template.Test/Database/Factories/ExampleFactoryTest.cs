using System.Collections.Generic;
using FluentAssertions;
using guepardoapps.dotnetcore_vue_template.Database.Factories;
using guepardoapps.dotnetcore_vue_template.Database.Models;
using Xunit;

namespace guepardoapps.dotnetcore_vue_template.Test.Database.Factories
{
    public class ExampleFactoryTest
    {
        public static readonly IEnumerable<object[]> MapSource = new[] {
            new object[] {
				// TODO
            },
            new object[] {
				// TODO
            },
            new object[] {
				// TODO
            }
        };

        private readonly IExampleFactory _exampleFactory;

        public ExampleFactoryTest()
        {
            _exampleFactory = new ExampleFactory();
        }

        [Theory]
        [MemberData(nameof(MapSource))]
        public void Map_Should_Return_Expected(Example input, Example original, Example expected)
        {
            // Arrange & Act
            var actual = _exampleFactory.Map(input, original);

            // Assert
            actual.Should().BeEquivalentTo(expected);
        }
    }
}