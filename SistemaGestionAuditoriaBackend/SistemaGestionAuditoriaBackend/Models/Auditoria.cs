using System;
using System.Collections.Generic;

namespace SistemaGestionAuditoriaBackend.Models
{
    public partial class Auditoria
    {
        public int AuditoriaId { get; set; }
        public string? Empresa { get; set; }
        public string? Estado { get; set; }
        public int? AuditorId { get; set; }
        public int? CiudadId { get; set; }

        public virtual Usuario? Auditor { get; set; }
        public virtual Ciudade? Ciudad { get; set; }
    }
}
