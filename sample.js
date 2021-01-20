$(function() {
    $("#btn").on("click", showMessage);
});
function showMessage() {
    let time = $("input[name='time']:checked").val();
    if(time == "朝") {
        alert("おはよう");
    } else if(time == "昼") {
        alert("こんにちは");
    } else if(time == "夜") {
        alert("こんばんは");
    } else {
        alert("いずれかの時間帯を選択して下さい");
    }
}