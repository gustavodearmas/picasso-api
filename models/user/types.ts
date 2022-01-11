import { gql } from "apollo-server-express";

const typesUser = gql`
# Se deben coloar todos los campos del modelos, para este caso es el modelo de usuarios
type User {
  _id: ID! # Se debe colocar ID en mayúscula, ya que así lo pide GraphQl
  name: String! #El simbolo de ! hace que el campo sea requerido
  lastname: String!
  identification: String!
  email: String!
  status: Enum_StatusUsers
  rol: Enum_Rol!
}

type Query {
    #Estas constantes deben conincidir con los nombres en los query de los resolver 
    Users: [User]
    User(_id:String!): User 
}

type Mutation {
    createUser(
      name: String!
      lastname: String!
      identification: String!
      email: String!
      status: Enum_StatusUsers
      rol: Enum_Rol!
    ): User

    editUser(
      _id: String!
      name: String
      lastname: String
      identification: String
      email: String
      status: Enum_StatusUsers
      rol: Enum_Rol
      ): User
    
    # Se puede eliminar por uno o mas campos si se usa la funcion findOneAndDelete en mogoose
    deleteUser(_id: String, email: String): User
  }
`;

export { typesUser };