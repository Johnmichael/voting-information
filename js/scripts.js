$(document).ready(function(){
  $("form#main-form").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#age").val());
    if (age >= 18) {
      alert("hey");
    }
    $("#oldenough").text(age);
  });
});
