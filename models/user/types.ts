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
    photo: String
    emergencyContact: String
    issuance: Enum_Issuance
    address: String
    locality: Enum_Locality
    strata: Float
    afp: Enum_AFP
    arl: Enum_ARL
    eps: Enum_EPS
    rh: Enum_RH
    upz: String
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
    User(_id: String!): User
    UsersById(_id: [String]!): [User]
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
      photo: String
      emergencyContact: String
      issuance: Enum_Issuance
      address: String
      locality: Enum_Locality
      strata: Float
      afp: Enum_AFP
      arl: Enum_ARL
      eps: Enum_EPS
      rh: Enum_RH
      upz: String
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
      photo: String
      emergencyContact: String
      issuance: Enum_Issuance
      address: String
      locality: Enum_Locality
      strata: Float
      afp: Enum_AFP
      arl: Enum_ARL
      eps: Enum_EPS
      rh: Enum_RH
      upz: String
      role: Enum_Rol
      statusUser: Enum_StatusUsers
      nameGuardian: String
      lastNameGuardian: String
      identificationGuardian: String
      phoneGuardian: String
      emailGuardian: String
      addressGuardian: String
    ): User

    disableUser(_id: String!, statusUser: Enum_StatusUsers): User
  }
`;

export { typesUser };
