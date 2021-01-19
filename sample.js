$(function() {
    $("#btn").on("click", function() {
        $(this).prop("disabled", true);
    });

    $("#btn2").on("click", function() {
        $("#btn").prop("disabled", false);
    });
});