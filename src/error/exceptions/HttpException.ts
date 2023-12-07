export default class HttpException extends Error {
  name = 'HttpException'

  constructor(
    message: string,
    readonly body: any,
    readonly prevError?: Error
  ) {
    super(message)
  }
}
