const substitutionModule = (function () {
  const BASE_ALPHA = " abcdefghijklmnopqrstuvwxyz".split("");
  //substitution encodes and decodes messages using a given alphabet by swapping the character at the specified index position.
  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    //returns false if the alphabet isnt the appropriate length or doesnt exist.
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    const SUB_ALPHA = [" ", ...alphabet.split("")];
    //returns false if any characters in the alpha are duplicate
    for (let alpha of SUB_ALPHA) {
      let letterCounter = 0;
      for (let alphaCheck of SUB_ALPHA) {
        if (alpha === alphaCheck) {
          letterCounter += 1;
        }
        if (letterCounter >= 2) {
          return false;
        }
      }
    }
    let returnMSG = "";
    //encoding the message
    if (encode) {
      for (let char of input.split("")) {
        for (let i = 0; i < BASE_ALPHA.length; i++) {
          if (char === BASE_ALPHA[i]) {
            returnMSG += SUB_ALPHA[i];
          }
        }
      }
      return returnMSG;
    }
    //decoding the message
    if (!encode) {
      for (let char of input.split("")) {
        for (let i = 0; i < SUB_ALPHA.length; i++) {
          if (char === SUB_ALPHA[i]) {
            returnMSG += BASE_ALPHA[i];
          }
        }
      }
      return returnMSG;
    }
    //returns false in all other cases
    else {
      return false;
    }
  }

  return {
    substitution,
  };
})();

module.exports = {
  substitution: substitutionModule.substitution
};