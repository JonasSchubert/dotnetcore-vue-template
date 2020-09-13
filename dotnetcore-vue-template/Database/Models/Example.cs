using System.ComponentModel.DataAnnotations;

namespace guepardoapps.dotnetcore_vue_template.Database.Models
{
  public class Example : Entity
  {
    [Required]
    public uint Value { get; set; }
  }
}
