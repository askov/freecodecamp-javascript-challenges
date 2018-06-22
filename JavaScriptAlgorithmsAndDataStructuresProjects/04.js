function telephoneCheck(str) {
  // Good luck!
  return /^1?(?:\d{3}|\(\d{3}\))-?\d{3}-?\d{4}$/g.test(str.replace(/\s/g, ''));
}



telephoneCheck("555-555-5555");
