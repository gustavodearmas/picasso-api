import { mainSendMail } from "../../nodemailer";

const resolversMail = {
  Mutation: {
    sendMail: async (parent, args) => {
      mainSendMail(args).catch(console.error);
      const mailSend = args
      return mailSend;
    },
  },
};

export { resolversMail };
