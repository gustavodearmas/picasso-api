import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { Enum_Rol, Enum_StatusUsers, Enum_AFP, Enum_ARL, Enum_EPS, Enum_RH, Enum_Issuance, Enum_Locality } from "../enum/enum";

interface User {
  nameUser: string;
  lastName: string;
  identification: string;
  email: string;
  movil: string;
  phone: string;
  nationality: string;
  birthDay: Date;
  cityBirth: string;
  emergencyContact: string;
  issuance: Enum_Issuance;
  address: string;
  locality: Enum_Locality;
  strata: number;
  AFP: Enum_AFP;
  ARL: Enum_ARL;
  EPS: Enum_EPS;
  RH: Enum_RH;
  UPZ: string;
  role: Enum_Rol
  statusUser: Enum_StatusUsers;
  nameGuardian: string;
  lastNameGuardian: string;
  identificationGuardian: string;
  phoneGuardian: string;
  emailGuardian: string;
  addressGuardian: string;
}

const UserSchema = new Schema<User>({
  nameUser: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  identification: {
    type: String,
    required: true,
    unique: true,
  },
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
  movil: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  nationality: {
    type: String,
  },
  birthDay: {
    type: Date,
    required: true,
  },
  cityBirth: {
    type: String,
  },
  emergencyContact: {
    type: String,
  },
  issuance: {
    type: String,
    enum: Enum_Issuance
  },
  address: {
    type: String,
  },
  locality: {
    type: String,
  },
  strata: {
    type: Number,
  },
  AFP: {
    type: String,
    enum: Enum_AFP
  },
  ARL: {
    type: String,
    enum: Enum_ARL,
  },
  EPS: {
    type: String,
    enum: Enum_EPS,
  },
  RH: {
    type: String,
    enum: Enum_RH,
  },
  UPZ: {
    type: String,
  },
  role: {
    type: String,
    enum: Enum_Rol,
    default: Enum_Rol.PENDIENTE,
  },
  statusUser: {
    type: String,
    enum: Enum_StatusUsers,
  },
  nameGuardian: {
    type: String,
  },
  lastNameGuardian: {
    type: String,
  },
  identificationGuardian: {
    type: String,
  },
  phoneGuardian: {
    type: String,
  },
  addressGuardian: {
    type: String,
  },
});

const UserModel = model("User", UserSchema);

export { UserModel };
