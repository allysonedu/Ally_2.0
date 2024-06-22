const { Router } = require('express');

const usersRoutes = require('../../../modules/users/infra/routes/users.routes'); // importação da rota de crianção do usuário!

const sessionsRoutes = require('../../../modules/users/infra/routes/sessions.routes'); // importação da rota de login do usuário!

const forgotRoutes = require('../../../modules/users/infra/routes/forgot.routes');

const resetPasswordRoutes = require('../../../modules/users/infra/routes/resetPassword.routes');

const ensureAuthenticated = require('../../../shared/middlewares/ensure-autenticated');

const routes = Router();

routes.use('/users', usersRoutes);

routes.use('/login', sessionsRoutes);

routes.use('/forgot', forgotRoutes);

routes.use('/reset-password', resetPasswordRoutes);

routes.use(ensureAuthenticated);

module.exports = routes;
