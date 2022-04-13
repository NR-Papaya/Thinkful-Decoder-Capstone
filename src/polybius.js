// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // table used for encoding
  const polybiusCovertedTable = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  function polybius(input, encode = true) {
    //check to make sure input for decoding is valid
    const checkProperInput = input.replace(" ", "").length % 2;
    if (encode === false && checkProperInput == 1) {
      return false;
    }
    let returnableArray = [];
    //encoding
    if (encode) {
      returnableArray = input.toLowerCase().split("");
      returnableArray = returnableArray.map((character) => {
        if (character === " ") {
          return character;
        }
        return (character = polybiusCovertedTable[character]);
      });
      return returnableArray.join("");
    }
    //decoding
    if (!encode) {
      const encodedArray = [];
      let stringArray = input.split("");
      let codeNumSet = "";
      //mapping number sets and spaces to a new encoded array.
      for (let codeNum of stringArray) {
        if (codeNum === " ") {
          encodedArray.push(codeNum);
        }
        if (codeNumSet.length < 2 && codeNum !== " ") {
          codeNumSet += codeNum;
        }
        if (codeNumSet.length === 2) {
          encodedArray.push(codeNumSet);
          codeNumSet = "";
        }
      }
      //invert the key value pairs of the orig table for decoding
      const invertedPolybiusConvertedTable = {};
      for (const [key, value] of Object.entries(polybiusCovertedTable)) {
        invertedPolybiusConvertedTable[`${value}`] = key;
      }
      //map over encoded array, replace number sets with the decoded letter or space
      const decodedArray = encodedArray.map((charSet) => {
        if (charSet === "42") {
          return "i/j";
        }
        if (charSet === " ") {
          return charSet;
        } else {
          for (let numSet in invertedPolybiusConvertedTable) {
            if (numSet === charSet) {
              const letter = invertedPolybiusConvertedTable[charSet];
              return letter;
            }
          }
        }
      });
      return decodedArray.join("");
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
