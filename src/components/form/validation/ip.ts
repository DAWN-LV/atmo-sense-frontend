export const ipValidation = {
  required: 'IP Address is required',
  pattern: {
    value: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(\.25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(\.25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(\.25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^[a-fA-F0-9:]{7,39}$/,
    message: 'Invalid IP address'
  }
}