const CreateNewUserService = require('../../services/CreateNewUserService');

const UsersRepository = require('../../repositories/UsersRepository');

const userRepository = new UsersRepository();

class UsersController {
  async createUsers(request, response) {
    const { name, email, whatsapp, password, username } = request.body;

    const createUser = new CreateNewUserService(userRepository);

    const user = await createUser.execute({
      name,
      email,
      whatsapp,
      password,
      username,
    });

    return response.json({ user });
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
