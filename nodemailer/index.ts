import nodemailer from "nodemailer";

export const mainSendMail = async (args) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "gustavo.dearmas1@gmail.com", // generated ethereal user
      pass: "bkyeijrkkmvcsifh", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Nombre de Remitente" <email@remitente.com>',
    to: args.to,
    subject: args.subject,
    text: args.message, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  //console.log("Mensaje enviado: %s", info.messageId);
}
