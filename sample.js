$(function() {
    setSubCategory();
    $("#main").on("change", setSubCategory);
});
function setSubCategory() {
    let subList = [
        [ "ノート", "タワー型", "一体型" ],
        [ "マウス", "キーボード", "モニタ", "スピーカー"]
    ];

    let i = $("#main > option:selected").val();

    let sub = $("#sub");
    sub.empty();

    for(let j=0; j < subList[i].length; j++) {
        sub.append("<option value='" + j + "'>" + 
        subList[i][j] + "</option>");
    }
}