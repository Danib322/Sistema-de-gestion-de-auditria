use [AuditoriasDB]

Create Table Ciudades 
(
	CiudadId int not null IDENTITY (1,1),
	NombreCiudad varchar(180),
	CONSTRAINT pk_Ciudades PRIMARY KEY (CiudadId)
);

Create Table Usuarios 
(
	UsuarioId int not null IDENTITY (1,1),
	NombreUsuario varchar(200),
	Cedula varchar(12),
	TipoUsuario varchar(280),
	ClaveUsuario varchar(60);
	CONSTRAINT pk_Usuarios PRIMARY KEY (UsuarioId)
);

Create Table Auditorias 
(
	AuditoriaId int not null IDENTITY (1,1),
	Empresa varchar(200),
	Estado varchar(12),
	AuditorId int,
	CiudadId int,
	CONSTRAINT pk_Auditorias PRIMARY KEY (AuditoriaId),
	CONSTRAINT fk_Auditorias_Usuario FOREIGN KEY (AuditorId) REFERENCES Usuarios(UsuarioId),
	CONSTRAINT fk_Auditorias_Ciudades FOREIGN KEY (CiudadId) REFERENCES Ciudades(CiudadId),
);

