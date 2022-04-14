const caesarModule = (function () {
  function caesar(input, shift = null, encode = true) {
    let inputMSG = input.toLowerCase();
    let outputMSG = [];
    //returns false if the shift paramater fails to meet the requirements
    if (shift > 25 || shift < -25 || shift === 0 || shift === null) {
      return false;
    }
    if (!encode) {
      shift = -shift;
      encode = true;
    }
    if (encode) {
      for (let i = 0; i < inputMSG.length; i++) {
        // handles special chars and spaces
        if (inputMSG.charCodeAt(i) > 122 || inputMSG.charCodeAt(i) < 97) {
          outputMSG.push(inputMSG[i]);
        }
        // handles chars shifted within alphabet range
        if (
          inputMSG.charCodeAt(i) + shift <= 122 &&
          inputMSG.charCodeAt(i) + shift >= 97
        ) {
          outputMSG.push(String.fromCharCode(inputMSG.charCodeAt(i) + shift));
        }
        //loop the alpha around
        else {
          // loop a to z
          if (
            inputMSG.charCodeAt(i) >= 97 &&
            inputMSG.charCodeAt(i) + shift < 97
          ) {
            const charCode = 122 - (97 - (inputMSG.charCodeAt(i) + shift) - 1);
            outputMSG.push(String.fromCharCode(charCode));
          }
          // loop z to a
          if (
            inputMSG.charCodeAt(i) <= 122 &&
            inputMSG.charCodeAt(i) + shift > 122
          ) {
            const charCode = 97 + (inputMSG.charCodeAt(i) + shift - 123);
            outputMSG.push(String.fromCharCode(charCode));
          }
        }
      }
    }
    return outputMSG.join("");
  }

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar
};