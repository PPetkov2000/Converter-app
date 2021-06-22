function convertFromDecimal(num, system) {
  if (system === "roman") {
    return convertToRoman(num)
  }
  const valuesMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  }
  const systemsMap = {
    decimal: 10,
    hexadecimal: 16,
    binary: 2,
  }

  if (!systemsMap.hasOwnProperty(system)) {
    return `Invalid numeric system!`
  }

  let result = ""

  while (num > 0) {
    let remainder = num % systemsMap[system]
    result += valuesMap[remainder]
    num = Math.floor(num / systemsMap[system])
  }

  return result.toString().split("").reverse().join("")
}

function convertFromBinary(num, system) {
  num = num.toString()

  if (!num.match(/^[01]+$/g)) {
    return "Invalid input!"
  }

  let resultToDecimal = 0
  let position = 0

  for (let i = num.length - 1; i >= 0; i--) {
    let currentDigit = Number(num[i])
    if (currentDigit === 1) {
      resultToDecimal += currentDigit * 2 ** position
    }
    position++
  }

  return convertFromDecimal(resultToDecimal, system)
}

function convertFromHexadecimal(num, system) {
  num = num.toString()

  if (!num.match(/^[0-9A-F]+$/g)) {
    return "Invalid input!"
  }

  const valuesMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    A: "10",
    B: "11",
    C: "12",
    D: "13",
    E: "14",
    F: "15",
  }

  let resultToDecimal = 0
  let position = 0

  for (let i = num.length - 1; i >= 0; i--) {
    let currentChar = num[i]
    resultToDecimal += valuesMap[currentChar] * 16 ** position
    position++
  }

  return convertFromDecimal(resultToDecimal, system)
}

function convertFromRoman(num, system) {
  num = num.toString()

  const valuesMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let resultToDecimal = 0

  for (let i = 0; i < num.length; i++) {
    let romanSymbol = num[i]
    if (!valuesMap.hasOwnProperty(romanSymbol)) {
      return "Invalid input!"
    }
    resultToDecimal += valuesMap[romanSymbol]
  }

  return convertFromDecimal(resultToDecimal, system)
}

function convertToRoman(num) {
  const mapValues = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  }

  let result = ""

  while (num > 0) {
    let newMap = Object.keys(mapValues)
      .map(Number)
      .filter((key) => key <= num)
    let highestValue = Math.max(...newMap)
    result += mapValues[highestValue]
    num -= highestValue
  }

  return result
}

module.exports = { convertFromDecimal, convertFromBinary, convertFromHexadecimal, convertFromRoman }

