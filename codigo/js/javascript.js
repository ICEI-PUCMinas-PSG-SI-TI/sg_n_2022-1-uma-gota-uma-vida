$(document).ready(function(){
    
    $("#login").fadeOut();
    $("#login_button").click(function(){
        $("#registrar").fadeToggle(700);
        $("#login").fadeIn(3000);
    });
    $("#registrar_button").click(function(){
        $("#login").fadeToggle(700);
        $("#registrar").fadeIn(3000);
    });
    
});