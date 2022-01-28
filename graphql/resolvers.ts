import { resolversUser } from "../models/user/resolvers";
import { resolversMail } from "../models/sendMail/resolvers";

export const resolvers = [
  resolversUser,
  resolversMail
];
