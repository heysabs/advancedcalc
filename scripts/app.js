$(document).ready(function() {

  $("#basic-calc").click(function() {
    var num1 = $("#basic-num-1").val();
    var num2 = $("#basic-num-2").val();
    var operation = $("#basic-operation").val();
    var result = eval(num1 + " " + operation + " " + num2);
    $("#basic-answer-alert").html(result);
  });

  $("#trip-calc").click(function() {
    var distance = $("#trip-distance").val();
    var mpg = $("#trip-mpg").val();
    var cost = $("#trip-cost").val();
    var speed = $("#trip-speed").val();
    var result;
    if (speed < 60) {
      result = (distance / (mpg * cost));
    } else {
      result = distance / (mpg - ((speed - 60) * 2)) * cost;
    }
    $("#trip-answer-alert").html(result);
  });

  $("#bmi-calc").click(function() {
    var mass = $("#bmi-mass").val();
    var height = $("#bmi-height").val();
    var result;
    mass = mass * 2.20462;
    height = height * 39.3701;
    result = (mass / (height * height)) * 703;
    $("#bmi-answer-alert").html(result);
  });

  $("#mortgage-calc").click(function() {
    var loan = $("#mortgage-loan").val();
    var apr = $("#mortgage-apr").val();
    var term = $("#mortgage-term").val();
    var result = loan * apr * ((1+apr)^term) / (((1+apr)^term) - 1);
    $("#mortgage-answer-alert").html(result);
  });



});
