using System;
using System.Collections.Generic;

namespace SistemaGestionAuditoriaBackend.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            Auditoria = new HashSet<Auditoria>();
        }

        public int UsuarioId { get; set; }
        public string? NombreUsuario { get; set; }
        public string? Cedula { get; set; }
        public string? TipoUsuario { get; set; }
        public string? ClaveUsuario { get; set; }

        public virtual ICollection<Auditoria> Auditoria { get; set; }
    }
}
