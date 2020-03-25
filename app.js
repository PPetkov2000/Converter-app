function converters() {
  let result1 = decimalToBinary(20);
  let result2 = binaryToDecimal("1111");
  let result3 = decimalToHexadecimal(20);
  let result4 = hexadecimalToDecimal("20");
  let result5 = romanNumeralToDecimal("MDXXXIIV");
  let result6 = binaryToText(
    "01100111 01101111 01101111 01100100 00100000 01100100 01101111 01100111"
  );
  let result7 = textToBinary("good dog");

  function decimalToBinary(decimalNumber) {
    let result = "";

    while (decimalNumber > 0) {
      result = (decimalNumber % 2) + result;
      decimalNumber = Math.floor(decimalNumber / 2);
    }

    return result;
  }

  function binaryToDecimal(binaryNumber) {
    let result = 0;
    let position = 0;

    for (let i = binaryNumber.length - 1; i >= 0; i--) {
      let currentDigit = Number(binaryNumber[i]);
      if (currentDigit === 1) {
        result += currentDigit * 2 ** position;
      } else {
        result = result;
      }
      position++;
    }

    return result;
  }

  function decimalToHexadecimal(decimalNumber) {
    const map = {
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
      15: "F"
    };
    let result = "";

    while (decimalNumber > 0) {
      let remainder = decimalNumber % 16;
      result += map[remainder];

      decimalNumber = Math.floor(decimalNumber / 16);
    }

    return result
      .toString()
      .split("")
      .reverse()
      .join("");
  }

  function hexadecimalToDecimal(hexadecimalNumber) {
    const map = {
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
      15: "F"
    };
    let result = 0;
    let position = 0;

    for (let i = hexadecimalNumber.length - 1; i >= 0; i--) {
      let currentDigit = Number(hexadecimalNumber[i]);
      result += map[currentDigit] * 16 ** position;
      position++;
    }

    return result;
  }

  function romanNumeralToDecimal(romanNumber) {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };

    let result = 0;

    for (let i = 0; i < romanNumber.length; i++) {
      let romanSymbol = romanNumber[i];
      if (!map.hasOwnProperty(romanSymbol)) {
        return "Invalid number!";
      }
      result += map[romanSymbol];
    }

    return result;
  }

  function binaryToText(binaryNumber) {
    return binaryNumber
      .split(" ")
      .map(binaryToDecimal)
      .map(num => String.fromCharCode(num))
      .join("");
  }

  function textToBinary(text) {
    return text
      .split("")
      .map(symbol => symbol.charCodeAt(0))
      .map(num => decimalToBinary(num).padStart(8, 0))
      .join(" ");
  }

  return result4;
}

console.log(converters());
