function translate(string) {
  string = string.toLowerCase();
  string = string.split(" ");
  let translated = "";

  for (let i = 0; i < string.length; i++) {
    let newString = string[i];
    if (
      newString[0] !== "a" &&
      newString[0] !== "e" &&
      newString[0] !== "i" &&
      newString[0] !== "o" &&
      newString[0] !== "u" &&
      newString[0] !== "y"
    ) {
      if (
        newString[1] !== "a" &&
        newString[1] !== "e" &&
        newString[1] !== "i" &&
        newString[1] !== "o" &&
        newString[1] !== "u" &&
        newString[1] !== "y"
      ) {
        let constanant1 = newString[0];
        let constanant2 = newString[1];
        newString = newString.substring(2);
        newString = `${newString}${constanant1}${constanant2}ay`;
      } else {
        let constanant1 = newString[0];
        newString = newString.substring(1);
        newString = `${newString}${constanant1}ay`;
      }
    } else {
      newString = `${newString}ay`;
    }
    if (i === 0) {
      translated = newString;
    } else {
      translated = `${translated} ${newString}`;
    }
  }
  return translated;
}

module.exports = translate;
