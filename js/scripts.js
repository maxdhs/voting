$(document).ready(function() {
  $("form#appointments").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var descriptionOfAppointment = $("#descriptionOfAppointment").val();
    var date = $("#date").val();
    var appointmentTime = $("#appointmentTime").val();
    var result = [name, descriptionOfAppointment, date, appointmentTime];
    $("#output").text("CONFIRMED for: " + result);
  });
});
