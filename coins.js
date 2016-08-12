 var coinPurse = {
    quarters : 2,
    dimes : 1,
    nickels : 1,
    pennies : 2,
  };

function coinCounter (quarters,dimes,nickels,pennies) {

 coinPurse.quarters = 0.50;
 coinPurse.dimes = 0.10;
 coinPurse.nickels = 0.05;
 coinPurse.pennies = 0.02;

  return quarters+dimes+nickels+pennies;
}

var coins = coinCounter(coinPurse.quarters,coinPurse.dimes,coinPurse.nickels,coinPurse.pennies);
console.log("um i dont know",coinCounter(coinPurse.quarters,coinPurse.dimes,coinPurse.nickels,coinPurse.pennies));