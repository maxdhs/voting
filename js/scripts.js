
$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#votingInfo').show();
  }
  else {
    $('#under-18').show();
  }
});
