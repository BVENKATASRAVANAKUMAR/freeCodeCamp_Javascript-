function checkCashRegister(price, cash, cid) {
    const currencyUnit = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let totalCid = 0;
    for (let i = 0; i < cid.length; i++) {
      totalCid += cid[i][1];
    }
    let changeDue = cash - price;
    let changeArray = [];
  
    if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCid === changeDue) {
      return { status: "CLOSED", change: cid };
    } else {
      for (let i = currencyUnit.length - 1; i >= 0; i--) {
        const [denominationName, denominationValue] = currencyUnit[i];
        const cidValue = cid[i][1];
        const numBillsToUse = Math.floor(changeDue / denominationValue);
        const valueToUse = numBillsToUse * denominationValue;
  
        if (valueToUse > 0) {
          if (valueToUse <= cidValue) {
            changeArray.push([denominationName, valueToUse]);
            changeDue = (changeDue - valueToUse).toFixed(2);
          } else {
            changeArray.push([denominationName, cidValue]);
            changeDue = (changeDue - cidValue).toFixed(2);
          }
        }
      }
  
      if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "OPEN", change: changeArray };
      }
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));