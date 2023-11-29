import { makeAutoObservable } from "mobx"
import NotFoundException from "@/plugin/dictionary/NotFoundExceptions"

type InitialEntries<K, V> = readonly (readonly [K, V])[]

export default class Dictionary<K extends string | number, V> {
  private readonly data: Map<K, V>

  constructor(entries: InitialEntries<K, V> = []) {
    this.data = new Map(entries)

    makeAutoObservable(this)
  }

  get size() {
    return this.data.size
  }

  get keys() {
    return Array.from(this.data.keys())
  }

  get values() {
    return Array.from(this.data.values())
  }

  get<T extends V>(key: K): T {
    const value = this.data.get(key)

    if (!value) {
      throw new NotFoundException(key, this.keys)
    }

    return value as T
  }

  has(key: K) {
    return this.data.has(key)
  }

  set(key: K, value: V) {
    this.data.set(key, value)
  }

  delete(key: K) {
    this.data.delete(key)
  }

  clear() {
    this.data.clear()
  }

  forEach(cb: (value: V, key: K, map: Map<K, V>) => void) {
    this.data.forEach(cb)
  }

  map<R>(cb: (value: V, key: K, map: Map<K, V>) => R) {
    return this.keys.map(key => cb(this.get(key), key, this.data))
  }

  filter(cb: (value: V, key: K, map: Map<K, V>) => boolean): Dictionary<K, V> {
    const entries = Array
      .from(this.data.entries())
      .filter(([key, value]) => cb(value, key, this.data))

    return new Dictionary(entries)
  }
}