function onesDigitConverter(number) {
  var romanNumeralArray = [];
  if (number < 4) {
    for (i = 0; i < number; i++) {
      romanNumeralArray.push("I");
    };

  } else if (number === 4) {
    romanNumeralArray.push("IV");

  } else if (5 <= number && number < 9) {
    romanNumeralArray.push("V");
    for (i = 5; i < number; i++) {
      romanNumeralArray.push("I");
    };

  } else if (number === 9) {
    romanNumeralArray.push("IX");
  };

  return romanNumeralArray.join("");
}

function tensDigitConverter(number) {
  var romanNumeralArray = [];
  if (number < 40) {
    for (i = 0; i < number; i++) {
      romanNumeralArray.push("x");
    };

  } else if (number === 40) {
    romanNumeralArray.push("XL");

  } else if (50 <= number && number < 90) {
    romanNumeralArray.push("L");
    for (i = 5; i < number; i++) {
      romanNumeralArray.push("X");
    };

  } else if (number === 90) {
    romanNumeralArray.push("XC");
  };

  return romanNumeralArray.join("");
}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    $("#output").text(onesDigitConverter(parseInt($("#input").val())));

  });
});
