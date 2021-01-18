$(function() {
    $("#large").on("click", function() {
        $("#photo").animate({
            "width" : "90%",
            "height" : "90%"
        }, 2000, "linear");
    });
});