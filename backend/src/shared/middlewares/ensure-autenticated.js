const jwt = require('jsonwebtoken')
const AppError = require('../errors/AppError')
const { request, response } = require('express')
const { errors } = require('celebrate')

module.exports = async (request, response, next) => {
  const { authorization } = request.headers

  if (!authorization) {
    return response.status(401).json({error: 'token not provided'})
  }
}

const [, token] = authorization.split('')

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET)

    request.user = {
      id: decoded.id,
      name: decoded.name,
    }

    return next()
  } catch (error) {
    throw new AppError(error.message, 401)
  }
