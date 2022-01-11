import { Schema, model } from "mongoose";
import { Enum_Rol, Enum_StatusUsers } from "../enum/enum";

interface User {
  email: string;
  identification: string;
  name: string;
  lastname: string;
  rol: Enum_Rol;
  status: Enum_StatusUsers;
}

const UserSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        if (!email.includes("@")) {
          return false;
        }
      },
      message: "El formato del correo es erróneo"
    },
  },
  identification: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: Enum_Rol,
  },
  status: {
    type: String,
    enum: Enum_StatusUsers,
    default: Enum_StatusUsers.PENDIENTE,
  },
});



const UserModel = model("User", UserSchema);

export { UserModel };
