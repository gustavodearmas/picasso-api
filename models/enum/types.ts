import { gql } from "apollo-server-express";

const typesEnums = gql`
  # Se definen los enum fuera de cada tipo, y sun contenido debe ir en mayúscula por asi lo define GraphQl
  enum Enum_Rol {
    PENDIENTE
    ESTUDIANTE
    ADMINISTRADOR
  }

  enum Enum_StatusUsers {
    PENDIENTE
    ACTIVO
    INACTIVO
  }

  enum Enum_AFP {
    COLPENSIONES 
    COLFONDOS
    PORVENIR
    PROTECCION
    SKANDIA
  }

  enum Enum_ARL {
    COLPATRIA
    COLMENA_SEGUROS
    LA_EQUIDAD_SEGUROS
    LIBERTY_SEGUROS_DE_VIDA_SA
    MAPFRE_SEGUROS
    POSITIVA
    SEGUROS_BOLIVAR_SA 
  }

  enum Enum_EPS {
    MEDIMAS
    FAMISANAR
    NUEVA_EPS
    SALUD_TOTAL
    SURA
    ALIANSALUD
    SANITAS
    COMPENSAR
    COOMEVA
    SALUDVIDA
    CAFESALUD
    COMFANDI 
  }

  enum Enum_RH {
    A_POSITIVO
    A_NEGATIVO
    B_POSITIVO
    B_NEGATIVO
    AB_POSITIVO
    AB_NEGATIVO
    O_POSITIVO
    O_NEGATIVO 
  }
  enum Enum_Issuance {
    MADRE
    PADRE
    TIO
    HERMANO
    ABUELA
    ABUELO
    OTRO
    
  }
  enum Enum_Locality {
    ANTONIO_NARINIO
    BARRIOS_UNIDOS
    BOSA
    CHAPINERO
    CIUDAD_BOLIVAR
    ENGATIVA
    FONTIBON
    KENNEDY
    CANDELARIA
    MARTIRES
    PUENTE_ARANDA
    RAFAEL_URIBE_URIBE
    SAN_CRISTOBAL
    SANTA_FE
    SUBA
    SUMAPAZ
    TEUSAQUILLO
    TUNJUELITO
    USAQUEN
    USME  
  }


`;

export { typesEnums };
