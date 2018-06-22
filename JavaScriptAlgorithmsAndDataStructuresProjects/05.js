function roundCurrency(currency) {
  return Math.round(currency * 100) / 100;
}

function checkCashRegister(price, cash, cid) {
  // Check if cash-in-drawer is equal to the change due
  var cashIn = cid.reduce(function(prev, next) {
    return prev + next[1];
  }, 0);
  if (cashIn === cash - price) {
    return 'Closed';
  }
  var changeArr = [];
  var change = cash - price;
  var currency = cid.map(function(el) {
    return el[1];
  }).reverse();
  var currencyDict = {
    100: 'ONE HUNDRED',
    20: 'TWENTY',
    10: 'TEN',
    5: 'FIVE',
    1: 'ONE',
    0.25: 'QUARTER',
    0.1: 'DIME',
    0.05: 'NICKEL',
    0.01: 'PENNY'
  };
  var currencyKeys = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  for (var i = 0; i < currency.length; i++) {
    if (currency[i] === change) {
      // Change is given. Time to stop cycle
      changeArr.push([currencyDict[currencyKeys[i]], currency[i]]);
      change = 0;
      currency[i] = 0;
      break;
    } else if (currency[i] === 0) {
      // There is no such currency in cash-in-drawer. Continue searching
      continue;
    } else if (change / currencyKeys[i] < 1) {
      // Bill is too large. We are not gonna give it, aren't we? Continue
      continue;
    } else {
      var curLimit = currency[i];
      if (curLimit < change) {
        changeArr.push([currencyDict[currencyKeys[i]], currency[i]]);
        change -= curLimit;
        currency[i] -= curLimit;
      } else {
        var moneyUnit = Math.floor(change / currencyKeys[i]);
        changeArr.push([currencyDict[currencyKeys[i]], moneyUnit * currencyKeys[i]]);
        change = roundCurrency(change - moneyUnit * currencyKeys[i]);
        currency[i] -= moneyUnit * currencyKeys[i];
      }
      if (change === 0) {
        break;
      }
    }
  }
  return change > 0 ? 'Insufficient Funds' : changeArr;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
]);
