const jwt = require('jsonwebtoken');

const AppError = require('../../../shared/errors/AppError');

const { compare } = require('../../../shared/utils/encrypt');

class SessionsService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(payload) {
    const { email, password } = payload;

    const user = await this.userRepository.checkUserEmail(email);
    if (!user) throw new AppError('user not faund');

    await compare(password, user.password);

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    delete user.password;

    return {
      token,
      user,
    };
  }
}

module.exports = SessionsService;
