import hello from "../src/hello"

describe("hello nothing", () => {
  test('""', () => {
    expect(hello("")).toBe("Hello")
  })
})

describe("hello something", () => {
  test("jest", () => {
    expect(hello("Jest")).toBe("Hello Jest")
  })

  test("JS", () => {
    expect(hello("JS")).toBe("Hello JS")
  })

  test("Babel", () => {
    expect(hello("Babel")).toBe("Hello Babel")
  })
})

describe("ERROR", () => {
  test("true", () => {
    expect(() => hello(true)).toThrow()
  })

  test("false", () => {
    expect(() => hello(false)).toThrow()
  })

  test("undefined", () => {
    expect(() => hello(undefined)).toThrow()
  })

  test("", () => {
    expect(() => hello()).toThrow()
  })
})
