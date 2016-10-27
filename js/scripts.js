function numeralControl(originalNumber) {
  var alteredNumber = originalNumber;
  var numeralArray = [];
  if (alteredNumber % 10 != 0) {
    var onesPlace = alteredNumber % 10;
    numeralArray.push(onesDigitConverter(onesPlace));
    alteredNumber -= onesPlace;
  }
  if (alteredNumber % 100 != 0) {
    var tensPlace = alteredNumber % 100;
    numeralArray.push(tensDigitConverter(tensPlace));
    alteredNumber -= tensPlace;
  };
  numeralArray.reverse();
  return numeralArray.join("");
}

function onesDigitConverter(onesPlace) {
  var romanNumeralArray = [];
  if (onesPlace < 4) {
    for (i = 0; i < onesPlace; i++) {
      romanNumeralArray.push("I");
    };

  } else if (onesPlace === 4) {
    romanNumeralArray.push("IV");

  } else if (5 <= onesPlace && onesPlace < 9) {
    romanNumeralArray.push("V");
    for (i = 5; i < onesPlace; i++) {
      romanNumeralArray.push("I");
    };

  } else if (onesPlace === 9) {
    romanNumeralArray.push("IX");
  };

  return romanNumeralArray.join("");
}

function tensDigitConverter(tensPlace) {
  console.log(tensPlace);
  var romanNumeralArray = [];
  if (tensPlace < 40) {
    for (i = 0; i < tensPlace; i += 10) {
      romanNumeralArray.push("X");
    };

  } else if (tensPlace === 40) {
    romanNumeralArray.push("XL");

  } else if (50 <= tensPlace && tensPlace < 90) {
    romanNumeralArray.push("L");
    for (i = 50; i < tensPlace; i += 10) {
      romanNumeralArray.push("X");
    };

  } else if (tensPlace === 90) {
    romanNumeralArray.push("XC");
  };

  return romanNumeralArray.join("");
}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    $("#output").text(numeralControl(parseInt($("#input").val())));

  });
});
