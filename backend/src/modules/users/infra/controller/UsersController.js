const CreateNewUserService = require('../../services/CreateNewUserService');

const ForgotPasswordService = require('../../services/ForgotPasswordService');

const ResetPasswordService = require('../../services/ResetPasswordService');

const MailProvider = require('../../../../shared/providers/MailProvider');

const UsersRepository = require('../../repositories/UsersRepository');

const usersRepository = new UsersRepository();

class UsersController {
  async createUsers(request, response) {
    const { name, email, whatsapp, password, username } = request.body;

    const createUser = new CreateNewUserService(usersRepository);

    const user = await createUser.execute({
      name,
      email,
      whatsapp,
      password,
      username,
    });

    return response.json({ user });
  }

  async forgotPassword(request, response) {
    const mailProvider = new MailProvider();

    const forgotPassword = new ForgotPasswordService(
      usersRepository,
      mailProvider
    );
    const { email } = request.body;

    const forgot = await forgotPassword.execute({ email });

    return response.json(forgot);
  }

  async resetPassword(request, response) {
    const resetPassword = new ResetPasswordService(usersRepository);

    const { token } = request.params;
    const { password } = request.body;

    const result = await resetPassword.execute({
      token,
      password,
    });
    return response.json(result);
  }
  async getAllUsers(request, response) {
    return response.json({ getAll: true });
  }
  async updateUsers(request, response) {
    return response.json({ update: true });
  }
  async deleteUsers(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = UsersController;
