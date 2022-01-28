import { gql } from "apollo-server-express";

const typesMail = gql`
  type Mail {
    to: String!
    subject: String!
    message: String!
  }

  type Mutation {
    sendMail(to: String!, subject: String!, message: String!): Mail
  }
`;

export { typesMail };
