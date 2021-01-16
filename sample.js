$(function() {
    $("#btn").on("click", sayHello);
});
function sayHello() {
    alert("こんにちは");
    $("#btn").off("click", sayHello);
    $(this).attr("disabled", "disabled");
}