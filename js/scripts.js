$(document).ready(function(){
  $("form#main-form").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#age").val());
    if (age >= 18) {
      $(".votinginfo21").show();
      $(".thingstodoadult").show();
      $(".dothisadult").show();
      $(".dothisminorplain").show();
    } else {
    $(".votinginfominor").show();
    $(".thingstodominor").show();
    $(".dothisminor").show();
    $(".dothisadultplain").show();

    }
  });
});
