import { gql } from "apollo-server-express";
import { typesEnums } from "../models/enum/types";
import { typesUser } from "../models/user/types";
import { typesMail } from "../models/sendMail/types";

const typesGlobals = gql`
  # Se define este scalar porque grapql por defecto no tiene el tipo de dato date
  scalar Date
`;

export const types = [
  typesGlobals,
  typesEnums,
  typesUser,
  typesMail
];
