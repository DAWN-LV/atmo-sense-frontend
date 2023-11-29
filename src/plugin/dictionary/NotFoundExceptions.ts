export default class NotFoundException extends Error {
  name = 'NotFoundException'

  constructor(
    readonly key: string | number,
    readonly keys: ReadonlyArray<string | number>,
  ) {
    super(`Dictionary key "${key}" is not found`)
  }
}
