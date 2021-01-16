$(function() {
    $("input[name='target']").on("change", function(){
        $("#ippan_area, #hojin_area").toggleClass
        ("active passive");
    });
});