const connection = require('../../../shared/database/connection');

class UsersRepository {
  async checkUserEmail(email) {
    return connection('users').where({ email }).first();
  }

  async createUser(payload) {
    return connection.transaction(
      async trx => trx('users').insert(payload).returning('*') // para estar criando o usuario
    );
  }

  async saveTokenInDb(payload) {
    return connection.transaction(async trx =>
      trx('users_token').insert(payload).returning('token')
    );
  }

  async getTokenUser(token) {
    return connection('users_token')
      .join('users', 'users.id', 'users_token.user_id')
      .where({
        token,
      })
      .first();
  }

  async updatePasswordAndDeleteToken(payload) {
    return connection.transaction(async trx => {
      await trx('users')
        .update({
          password: payload.password,
        })
        .where({
          id: payload.userId,
        });
      await trx('users_token').del().where({
        user_id: payload.userId,
      });
    });
  }
  async getuserById(userId) {
    return connection('users').where({ id: userId }).first();
  }
}

module.exports = UsersRepository;
