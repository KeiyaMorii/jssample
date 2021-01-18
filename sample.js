$(function() {
    $("#large").on("click", function() {
        $("#photo").animate({
            "width" : "90%",
            "height" : "90%"
        }, 3000, "swing").animate({
            "width" : "20%",
            "height" : "20%"
        }, 300, "swing");
    });
});