const UsersRepository = require('../../repositories/UsersRepository');

const SessionsService = require('../../services/SessionService');

const userRepository = new UsersRepository();

class SessionsController {
  async login(request, response) {
    const sessionsService = new SessionsService(userRepository);

    const user = await sessionsService.execute(request.body);

    return response.json(user);
  }
}

module.exports = SessionsController;
