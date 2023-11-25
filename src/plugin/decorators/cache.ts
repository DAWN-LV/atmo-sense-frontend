import config from "@/config"
import SerializedStorage from "@/plugin/LocalStorage"

const cacheOut = (key: string): MethodDecorator => {
  const cache = new SerializedStorage(localStorage, `${config.app.title}::${key}`)

  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any[]) {
      const cachedData = localStorage.getItem(key)
      if (cachedData) {
        const jsonData = JSON.parse(cachedData);
        return originalMethod.apply(this, [jsonData, ...args])
      }

      return originalMethod.apply(this, args)
    }

    return descriptor
  }
}

const cacheIn = (key: string): MethodDecorator => {
  const cache = new SerializedStorage(localStorage, `${config.app.title}::${key}`)

  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any[]) {
      const result = originalMethod.apply(this, args)
      if (result !== undefined && result !== null) {
        localStorage.setItem(key, JSON.stringify(result))
      }

      return result
    }

    return descriptor
  }
}

export { cacheOut, cacheIn }