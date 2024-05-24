const connection = require('../../../shared/database/connection');

class UsersRepository {
  async checkUserEmail(email) {
    return connection('users').where({ email }).first();
  }

  async createUser(payload) {
    return connection.transaction(
      async trx => trx('users').insert(payload).returning('*') // para tar criando o usuario
    );
  }
}

module.exports = UsersRepository;
