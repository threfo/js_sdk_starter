console.log('test')

export const plus = (a: number, b: number) => {
  return a + b
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test plus', () => {
    expect(plus(1, 1)).toBe(2)
  })
}
