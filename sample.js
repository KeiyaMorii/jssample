$(function() {
    $("img").animate(
        {"width" : "400px"},1000,"linear",toPassive
    );
});
function toPassive(){
    $("img").hide();
}