$(function() {
  $(".radio").click(function(){
    var animalInput = $("input:radio[name=animal]:checked").val();
    if (animalInput === "bunny")
    {
      $(".animal").hide();
      $(".bunny").show();
    }
    else if (animalInput === "tucan")
    {
      $(".animal").hide();
      $(".tucan").show();
    }
    else if (animalInput === "turtle")
    {
      $(".animal").hide();
      $(".turtle").show();
    }

 });
});
