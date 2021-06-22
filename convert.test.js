const { describe, expect, it } = require("@jest/globals")
const { convertFromDecimal, convertFromHexadecimal, convertFromBinary, convertFromRoman } = require("./convert.js")

describe("Calculation Functions", () => {
  describe("Convert from Decimal", () => {
    it("10 should be equal to 1010 in binary", () => {
      const result = convertFromDecimal(10, "binary")
      expect(result).toBe("1010")
    })
    it("10 should be equal to A in hexadecimal", () => {
      const result = convertFromDecimal(10, "hexadecimal")
      expect(result).toBe("A")
    })
    it("10 should be equal to X in roman", () => {
      const result = convertFromDecimal(10, "roman")
      expect(result).toBe("X")
    })
  })
  describe("Convert from Hexadecimal", () => {
    it("A should be equal to 10 in decimal", () => {
      const result = convertFromHexadecimal("A", "decimal")
      expect(result).toBe("10")
    })
    it("A should be equal to 1010 in binary", () => {
      const result = convertFromHexadecimal("A", "binary")
      expect(result).toBe("1010")
    })
    it("A should be equal to X in roman", () => {
      const result = convertFromHexadecimal("A", "roman")
      expect(result).toBe("X")
    })
  })
  describe("Convert from Binary", () => {
    it("1010 should be equal to 10 in decimal", () => {
      const result = convertFromBinary("1010", "decimal")
      expect(result).toBe("10")
    })
    it("1010 should be equal to A in hexadecimal", () => {
      const result = convertFromBinary("1010", "hexadecimal")
      expect(result).toBe("A")
    })
    it("1010 should be equal to X in roman", () => {
      const result = convertFromBinary("1010", "roman")
      expect(result).toBe("X")
    })
  })
  describe("Convert from Roman", () => {
    it("X should be equal to 10 in decimal", () => {
      const result = convertFromRoman("X", "decimal")
      expect(result).toBe("10")
    })
    it("X should be equal to A in hexadecimal", () => {
      const result = convertFromRoman("X", "hexadecimal")
      expect(result).toBe("A")
    })
    it("X should be equal to 1010 in binary", () => {
      const result = convertFromRoman("X", "binary")
      expect(result).toBe("1010")
    })
  })
})