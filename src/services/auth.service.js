import Query from './api/query'
const Joi = require('@hapi/joi');

const userSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: false }),
  password: Joi.string().required()
})

export async function signup(signupData) {
  try {
    const user = await userSchema.validateAsync(signupData);
    const response = await new Query('auth/signup').setBody(user).post()
    return response
  }
  catch (err) {
    throw err
  }
}

export function login(email, password) {
  // TODO: Handle signup
}