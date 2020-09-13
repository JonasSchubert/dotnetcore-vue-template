using System;
using System.ComponentModel.DataAnnotations;

namespace guepardoapps.dotnetcore_vue_template.Database.Models
{
  public abstract class Entity
  {
    [Key]
    public Guid Id { get; set; }

    [Required]
    public DateTime DateTimeAdded { get; set; }

    public DateTime? DateTimeUpdated { get; set; }
  }
}
