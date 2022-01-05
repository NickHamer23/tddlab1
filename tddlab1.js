function translate(string) {
  string = string.toLowerCase();
  string = string.split(" ");
  let translated = "";

  for (let i = 0; i < string.length; i++) {
    let newString = string[i];
    if (
      newString.charAt(0) !== "a" &&
      newString.charAt(0) !== "e" &&
      newString.charAt(0) !== "i" &&
      newString.charAt(0) !== "o" &&
      newString.charAt(0) !== "u" &&
      newString.charAt(0) !== "y"
    ) {
      if (
        newString.charAt(1) !== "a" &&
        newString.charAt(1) !== "e" &&
        newString.charAt(1) !== "i" &&
        newString.charAt(1) !== "o" &&
        newString.charAt(1) !== "u" &&
        newString.charAt(1) !== "y"
      ) {
        let constanant1 = newString.charAt(0);
        let constanant2 = newString.charAt(1);
        newString = newString.substring(2);
        newString = `${newString}${constanant1}${constanant2}ay`;
      } else {
        let constanant1 = newString.charAt(0);
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
