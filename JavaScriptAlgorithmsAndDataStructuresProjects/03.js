function rot13(str) { // LBH QVQ VG!
  var charRangeStart = 65;
  var charRangeEnd = 90;
  var decodedChars = [];
  for (var i = 0; i < str.length; i++) {
    var messageCharCode = str.charCodeAt(i);
    var shiftedCharCode = 0;
    if (messageCharCode >= 65 && messageCharCode <= 90) {
      shiftedCharCode = messageCharCode + 13 <= charRangeEnd ? messageCharCode + 13 : charRangeStart + (messageCharCode + 12) % charRangeEnd;
    } else {
      shiftedCharCode = messageCharCode;
    }
    decodedChars.push(String.fromCharCode(shiftedCharCode));
  }
  return decodedChars.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
