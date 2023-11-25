export default class LocalStorage {
  constructor(private storage: Storage, private prefix = "") {}

  get<T>(key: string, defaultValue: T): T

  get<T>(key: string): T | undefined

  get<T>(key: string, defaultValue?: T): T | undefined {
    const serializedValue = this.storage.getItem(this.prefix + '::' + key)

    if (serializedValue === null) {
      return defaultValue
    }

    return JSON.parse(serializedValue)
  }

  set<T>(key: string, value: T) {
    if (value !== undefined) {
      this.storage.setItem(this.prefix + '::' + key, JSON.stringify(value))
    } else {
      this.remove(key)
    }
  }

  remove(key: string) {
    this.storage.removeItem(this.prefix + '::' + key)
  }

  clear() {
    this.storage.clear()
  }
}