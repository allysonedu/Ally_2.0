const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const UsersController = require('../controller/UsersController');

const resetPasswordRoutes = Router();
const usersController = new UsersController();

resetPasswordRoutes.patch(
  '/:token',
  celebrate({
    [Segments.BODY]: {
      password: Joi.string().min(6).required('Password is required'),
    },
    [Segments.PARAMS]: {
      token: Joi.string().min(6).required('Token is required'),
    },
  }),
  usersController.resetPassword
);

module.exports = resetPasswordRoutes;
