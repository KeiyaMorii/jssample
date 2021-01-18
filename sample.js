$(function() {
    $("#open").on("click", function() {
        $("#block").slideDown("normal");
    });
    $("#close").on("click", function() {
        $("#block").slideUp("normal");
    });
});