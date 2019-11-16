import asyncHello from "../src/asyncHello"

const ms1 = 100
const ms2 = 3000
const text1 = "ABC"
const text2 = "123"

describe("something", () => {
  test(`${ms1}ms, ${text1}`, async () => {
    const result1 = await asyncHello(ms1, text1)
    return expect(result1).toBe(`Hello ${text1}`)
  })

  test(`${ms2}ms, ${text2}`, async () => {
    const result1 = await asyncHello(ms2, text2)
    return expect(result1).toBe(`Hello ${text2}`)
  })
})
