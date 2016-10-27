function numeralControl(originalNumber) {
  var alteredNumber = originalNumber;
  var numeralArray = [];
  if (alteredNumber % 10 != 0) {
    var onesPlace = alteredNumber % 10;
    numeralArray.push(onesDigitConverter(onesPlace));
    alteredNumber -= onesPlace;
  };
  if (alteredNumber % 100 != 0) {
    var tensPlace = alteredNumber % 100;
    numeralArray.push(tensDigitConverter(tensPlace));
    alteredNumber -= tensPlace;
  };
  if (alteredNumber % 1000 != 0) {
    var hundredsPlace = alteredNumber % 1000;
    numeralArray.push(hundredsDigitConverter(hundredsPlace));
    alteredNumber -= hundredsPlace;
  };

  numeralArray.reverse();
  return numeralArray.join("");
}

function onesDigitConverter(onesPlace) {
  var onesDigits = [];
  if (onesPlace < 4) {
    for (i = 0; i < onesPlace; i++) {
      onesDigits.push("I");
    };

  } else if (onesPlace === 4) {
    onesDigits.push("IV");

  } else if (5 <= onesPlace && onesPlace < 9) {
    onesDigits.push("V");
    for (i = 5; i < onesPlace; i++) {
      onesDigits.push("I");
    };

  } else if (onesPlace === 9) {
    onesDigits.push("IX");
  };

  return onesDigits.join("");
}

function tensDigitConverter(tensPlace) {
  var tensDigits = [];
  if (tensPlace < 40) {
    for (i = 0; i < tensPlace; i += 10) {
      tensDigits.push("X");
    };

  } else if (tensPlace === 40) {
    tensDigits.push("XL");

  } else if (50 <= tensPlace && tensPlace < 90) {
    tensDigits.push("L");
    for (i = 50; i < tensPlace; i += 10) {
      tensDigits.push("X");
    };

  } else if (tensPlace === 90) {
    tensDigits.push("XC");
  };

  return tensDigits.join("");
}

function hundredsDigitConverter(hundredsPlace) {
  var hundredsDigits = [];
  if (hundredsPlace < 400) {
    for (i = 0; i < hundredsPlace; i += 100) {
      hundredsDigits.push("C");
    };

  } else if (hundredsPlace === 400) {
    hundredsDigits.push("CD");

  } else if (500 <= hundredsPlace && hundredsPlace < 900) {
    hundredsDigits.push("D");
    for (i = 500; i < hundredsPlace; i += 100) {
      hundredsDigits.push("C");
    };

  } else if (hundredsPlace === 900) {
    hundredsDigits.push("CM");
  };

  return hundredsDigits.join("");
}




$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    $("#output").text(numeralControl(parseInt($("#input").val())));

  });
});
