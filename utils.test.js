const { describe, expect, it } = require("@jest/globals")
const { capitalize } = require("./utils.js")

describe("Test Utils", () => {
  it("should capitalize string", () => {
    const str = capitalize("some string")
    expect(typeof str).toBe("string")
    expect(str[0]).toBe("S")
  })
})