//////////////////////////  USERS   /////////////////////////

enum Enum_Rol{
    PENDIENTE ='PENDIENTE',
    ESTUDIANTE = 'ESTUDIANTE',
    ADMINISTRADOR = 'ADMINISTRADOR',
  }


enum Enum_StatusUsers{
    ACTIVO = 'ACTIVO',
    INACTIVO = 'INACTIVO',
    OCULTO = 'OCULTO',
}

enum Enum_AFP {
  COLPENSIONES='COLPENSIONES',
  COLFONDOS='COLFONDOS',
  PORVENIR='PORVENIR',
  PROTECCION='PROTECCION',
  SKANDIA='SKANDIA',
}

enum Enum_ARL {
  COLPATRIA='COLPATRIA',
  COLMENA_SEGUROS='COLMENA_SEGUROS',
  LA_EQUIDAD_SEGUROS='LA_EQUIDAD_SEGUROS',
  LIBERTY_SEGUROS_DE_VIDA_SA='LIBERTY_SEGUROS_DE_VIDA_SA',
  MAPFRE_SEGUROS='MAPFRE_SEGUROS',
  POSITIVA='POSITIVA',
  SEGUROS_BOLIVAR_SA='SEGUROS_BOLIVAR_S.A', 
}


enum Enum_EPS {
  MEDIMAS='MEDIMAS',
  FAMISANAR='FAMISANAR',
  NUEVA_EPS='NUEVA_EPS',
  SALUD_TOTAL='SALUD_TOTAL',
  SURA='SURA',
  ALIANSALUD='ALIANSALUD',
  SANITAS='SANITAS',
  COMPENSAR='COMPENSAR',
  COOMEVA='COOMEVA',
  SALUDVIDA='SALUDVIDA',
  CAFESALUD='CAFESALUD',
  COMFANDI='COMFANDI',
}

enum Enum_RH {
  A_POSITIVO='A_POSITIVO',
  A_NEGATIVO='A_NEGATIVO',
  B_POSITIVO='B_POSITIVO',
  B_NEGATIVO='B_NEGATIVO',
  AB_POSITIVO='AB_POSITIVO',
  AB_NEGATIVO='AB_NEGATIVO',
  O_POSITIVO='O_POSITIVO',
  O_NEGATIVO ='O_NEGATIVO',
}

enum Enum_Issuance {
  MADRE='MADRE',
  PADRE='PADRE',
  TIO='TIO',
  HERMANO='HERMANO',
  ABUELA='ABUELA',
  ABUELO='ABUELO',
  OTRO='OTRO',
  
}
enum Enum_Locality {
  ANTONIO_NARINIO='ANTONIO_NARINIO',
  BARRIOS_UNIDOS='BARRIOS_UNIDOS',
  BOSA='BOSA',
  CHAPINERO='CHAPINERO',
  CIUDAD_BOLIVAR='CIUDAD_BOLIVAR',
  ENGATIVA='ENGATIVÁ',
  FONTIBON='FONTIBÓN',
  KENNEDY='KENNEDY',
  CANDELARIA='CANDELARIA',
  MARTIRES='MÁRTIRES',
  PUENTE_ARANDA='PUENTE_ARANDA',
  RAFAEL_URIBE_URIBE='RAFAEL_URIBE_URIBE',
  SAN_CRISTOBAL='SAN_CRISTOBAL',
  SANTA_FE='SANTA_FÉ',
  SUBA='SUBA',
  SUMAPAZ='SUMAPAZ',
  TEUSAQUILLO='TEUSAQUILLO',
  TUNJUELITO='TUNJUELITO',
  USAQUEN='USAQUÉN',
  USME ='USME',
}




export {Enum_Rol, Enum_StatusUsers, Enum_AFP, Enum_ARL, Enum_EPS, Enum_RH, Enum_Issuance, Enum_Locality }