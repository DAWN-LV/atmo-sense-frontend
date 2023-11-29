export const emailValidation = {
  required: 'Email is required',
  pattern: {
    value: /^\S+@\S+\.\S+$/,
    message: 'Invalid email format'
  }
}