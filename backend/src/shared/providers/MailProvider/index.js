const nodemailer = require('nodemailer');

class MailProvider {
  constructor() {
    this.transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io', // host SMTP fornecido pelo serviço Mailtrap
      port: 2525, // porta fornecida pelo serviço Mailtrap
      auth: {
        user: process.env.MAIL_USER, // Substitua pelo seu usuário Mailtrap "subistituida"
        pass: process.env.MAIL_PASS, // Substitua pela sua senha Mailtrap "subistituida"
      },
    });
  }

  async sendMail({ template, to, subject }) {
    await this.transport.sendMail({
      from: 'NoReply <noreply@Ally.com.br>', // Substitua pelo seu endereço de email, meu email da aplicação!
      to, // Endereço de email do destinatário
      subject, // Assunto do email
      html: template, // Corpo do email em HTML (opcional)
    });
  }
}

module.exports = MailProvider;
