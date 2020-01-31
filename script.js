$(document).ready(function(){
     
$("#contenido").addClass("oscuro");

    

    $("#cerrar").click(function(){
      
        $("#banner").remove();
        $("#contenido").removeClass("oscuro");
        $("#contenido").fadeIn(200);
        $("#contenido").removeClass("oscuro");
    });







});