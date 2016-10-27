//
var symbolArray = [["I", "V", "X"], ["X", "L", "C"], ["C", "D", "M"], ["M"]];

function numeralControl(originalNumber) {
  var alteredNumber = originalNumber;
  var numeralArray = [];
  if (alteredNumber % 10 != 0) {
    var onesPlace = alteredNumber % 10;
    numeralArray.push(digitConverter(onesPlace, symbolArray[0]));
    alteredNumber -= onesPlace;
  };
  if (alteredNumber % 100 != 0) {
    var tensPlace = alteredNumber % 100;
    numeralArray.push(digitConverter(tensPlace / 10, symbolArray[1]));
    alteredNumber -= tensPlace;
  };
  if (alteredNumber % 1000 != 0) {
    var hundredsPlace = alteredNumber % 1000;
    numeralArray.push(digitConverter(hundredsPlace / 100, symbolArray[2]));
    alteredNumber -= hundredsPlace;
  };
  if (alteredNumber % 10000 != 0 && alteredNumber < 4000) {
    var thousandsPlace = alteredNumber % 10000;
    numeralArray.push(digitConverter(thousandsPlace / 1000, symbolArray[3]));
  } else if (alteredNumber >= 4000) {
    numeralArray = ["Please enter a number smaller than 4000"];
  }

  numeralArray.reverse();
  return numeralArray.join("");
}

function digitConverter(number, symbols) {
  var digits = [];
  if (number < 4) {
    for (i = 0; i < number; i++) {
      digits.push(symbols[0]);
    };

  } else if (number === 4) {
    digits.push(symbols[0] + symbols[1]);

  } else if (5 <= number && number < 9) {
    digits.push(symbols[1]);
    for (i = 5; i < number; i++) {
      digits.push(symbols[0]);
    };

  } else if (number === 9) {
    digits.push(symbols[0] + symbols[2]);
  }

  return digits.join("");
}


//
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    $("#output").text(numeralControl(parseInt($("#input").val())));

  });
});
