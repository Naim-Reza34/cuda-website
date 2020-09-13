$(document).ready(function(){

    //sticky
    $(".js--services-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky")
        } else {
            $("nav").removeClass("sticky")
        }
    });

    //mixitup-section
    var mixer = mixitup('.mixfilter')
});


