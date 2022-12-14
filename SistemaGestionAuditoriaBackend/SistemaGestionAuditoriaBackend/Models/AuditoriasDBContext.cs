using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SistemaGestionAuditoriaBackend.Models
{
    public partial class AuditoriasDBContext : DbContext
    {
        public AuditoriasDBContext()
        {
        }

        public AuditoriasDBContext(DbContextOptions<AuditoriasDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Auditoria> Auditorias { get; set; } = null!;
        public virtual DbSet<Ciudade> Ciudades { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Auditoria>(entity =>
            {
                entity.Property(e => e.Empresa)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Estado)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.HasOne(d => d.Auditor)
                    .WithMany(p => p.Auditoria)
                    .HasForeignKey(d => d.AuditorId)
                    .HasConstraintName("fk_Auditorias_Usuario");

                entity.HasOne(d => d.Ciudad)
                    .WithMany(p => p.Auditoria)
                    .HasForeignKey(d => d.CiudadId)
                    .HasConstraintName("fk_Auditorias_Ciudades");
            });

            modelBuilder.Entity<Ciudade>(entity =>
            {
                entity.HasKey(e => e.CiudadId)
                    .HasName("pk_Ciudades");

                entity.Property(e => e.NombreCiudad)
                    .HasMaxLength(180)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.Property(e => e.Cedula)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.ClaveUsuario)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.NombreUsuario)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.TipoUsuario)
                    .HasMaxLength(280)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
