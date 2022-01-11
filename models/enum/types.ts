import { gql } from "apollo-server-express";

const typesEnums = gql`
  # Se definen los enum fuera de cada tipo, y sun contenido debe ir en mayúscula por asi lo define GraphQl
  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  enum Enum_StatusUsers {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }
`;

export { typesEnums };
