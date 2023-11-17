export function assertDefined<V>(value: V | undefined, errorMessage?: string): V | never {
  if (!value) {
    throw new Error(errorMessage || 'Assertion error: value is not defined.')
  }
  
  return value
}
