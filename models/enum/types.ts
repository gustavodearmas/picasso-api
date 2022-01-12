import { gql } from "apollo-server-express";

const typesEnums = gql`
  # Se definen los enum fuera de cada tipo, y sun contenido debe ir en mayúscula por asi lo define GraphQl
  enum Enum_Rol {
    ESTUDIANTE
    ADMINISTRADOR
  }

  enum Enum_StatusUsers {
    PENDIENTE
    ACTIVO
    INACTIVO
  }
`;

export { typesEnums };
