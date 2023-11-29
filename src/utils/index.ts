export function assertDefined<V>(value: V | undefined, errorMessage?: string): V | never {
  if (!value) {
    throw new Error(errorMessage || 'Assertion error: value is not defined.')
  }
  
  return value
}

export function classNames(...args: Array<string | Record<string, boolean> | undefined>): string {
  return args.map(arg => {
    if (typeof arg === 'string') {
      return arg
    }

    if (typeof arg === 'object' && arg !== null) {
      return Object.entries(arg)
        .filter(([_, value]) => value)
        .map(([key, _]) => key)
        .join(' ')
    }
  })
  .filter(Boolean)
  .join(' ')
}
