import { gql } from "apollo-server-express";

const typesUser = gql`
# Se deben coloar todos los campos del modelos, para este caso es el modelo de usuarios
type User {
  _id: ID! # Se debe colocar ID en mayúscula, ya que así lo pide GraphQl
  nameUser: String!
  lastName: String!
  identification: String!
  email: String!
  movil: String!
  phone: String
  nationality: String
  birthDay: Date!
  cityBirth: String
  emergencyContact: String
  issuance: Enum_Issuance
  address: String
  locality: Enum_Locality
  strata: Float
  AFP: Enum_AFP
  ARL: Enum_ARL
  EPS: Enum_EPS
  RH: Enum_RH
  UPZ: String
  role: Enum_Rol
  statusUser: Enum_StatusUsers
  nameGuardian: String
  lastNameGuardian: String
  identificationGuardian: String
  phoneGuardian: String
  emailGuardian: String
  addressGuardian: String
}

type Query {
    #Estas constantes deben conincidir con los nombres en los query de los resolver 
    Users: [User]
    User(_id:String!): User 
}

type Mutation {
    createUser(
      nameUser: String!
      lastName: String!
      identification: String!
      email: String!
      movil: String!
      phone: String!
      nationality: String
      birthDay: Date!
      cityBirth: String
      emergencyContact: String
      issuance: Enum_Issuance
      address: String
      locality: Enum_Locality
      strata: Float
      AFP: Enum_AFP
      ARL: Enum_ARL
      EPS: Enum_EPS
      RH: Enum_RH
      UPZ: String
      role: Enum_Rol
      statusUser: Enum_StatusUsers
      nameGuardian: String
      lastNameGuardian: String
      identificationGuardian: String
      phoneGuardian: String
      emailGuardian: String
      addressGuardian: String
    ): User

    editUser(
      _id: String!
      nameUser: String
      lastName: String
      identification: String
      email: String
      movil: String
      phone: String
      nationality: String
      birthDay: Date
      cityBirth: String
      emergencyContact: String
      issuance: Enum_Issuance
      address: String
      locality: Enum_Locality
      strata: Float
      AFP: Enum_AFP
      ARL: Enum_ARL
      EPS: Enum_EPS
      RH: Enum_RH
      UPZ: String
      role: Enum_Rol
      statusUser: Enum_StatusUsers
      nameGuardian: String
      lastNameGuardian: String
      identificationGuardian: String
      phoneGuardian: String
      emailGuardian: String
      addressGuardian: String
      ): User
    
    # Se puede eliminar por uno o mas campos si se usa la funcion findOneAndDelete en mogoose
    deleteUser(_id: String): User
  }
`;

export { typesUser };
