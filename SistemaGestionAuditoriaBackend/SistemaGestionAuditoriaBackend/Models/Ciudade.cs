using System;
using System.Collections.Generic;

namespace SistemaGestionAuditoriaBackend.Models
{
    public partial class Ciudade
    {
        public Ciudade()
        {
            Auditoria = new HashSet<Auditoria>();
        }

        public int CiudadId { get; set; }
        public string? NombreCiudad { get; set; }

        public virtual ICollection<Auditoria> Auditoria { get; set; }
    }
}
