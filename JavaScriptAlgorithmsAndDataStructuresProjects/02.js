function convertToRoman(num) {
  // Decimal representation for i = 3 i.e. (a_3)*1e3 + (a_2)*1e2 + (a_1)*10 + a_0
  var ai = [Math.floor(((num % 1e3) % 1e2) % 10), Math.floor(((num % 1e3) % 1e2) / 10), Math.floor((num % 1e3) / 1e2), Math.floor(num / 1e3)];
  var arabicToRoman = {
    1: ['I', 'X', 'C', 'M'],
    5: ['V', 'L', 'D']
  };
  var romanNumber = '';
  for (var i = 3; i >= 0; i--) {
    if (ai[i]) {
      switch (ai[i]) {
        case 1:
        case 2:
        case 3:
          romanNumber += arabicToRoman[1][i].repeat(ai[i]);
          break;
        case 4:
          romanNumber += arabicToRoman[1][i] + arabicToRoman[5][i];
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          romanNumber += arabicToRoman[5][i] + arabicToRoman[1][i].repeat(ai[i] % 5);
          break;
        case 9:
          romanNumber += arabicToRoman[1][i] + arabicToRoman[1][i + 1];
          break;
      }
    }
  }
  return romanNumber;
}

convertToRoman(36);
