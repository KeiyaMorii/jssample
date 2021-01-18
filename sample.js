$(function() {
    $("#open").on("click", function() {
        $("img").fadeIn("slow");
    });
    $("#close").on("click", function() {
        $("img").fadeOut("slow");
    });
});