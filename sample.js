$(function() {
    $("#fruits > li")
    .css("background-color", "blue")
    .filter(":even")
    .css("color", "white");
});