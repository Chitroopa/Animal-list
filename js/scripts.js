$(function() {
  $(".radio").click(function(){
    var animalInput = $("input:radio[name=animal]:checked").val();
    if (animalInput === "bunny")
    {
      $(".turtle").hide();
      $(".tucan").hide();
      $(".bunny").show();
    }
    else if (animalInput === "tucan")
    {
      $(".bunny").hide();
      $(".turtle").hide();
      $(".tucan").show();
    }
    else if (animalInput === "turtle")
    {
      $(".bunny").hide();
      $(".tucan").hide();
      $(".turtle").show();
    }

 });
});
