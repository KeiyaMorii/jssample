function showImage(number) {
    let htmlstr = "<img src='images/frog" + number + ".jpg'>";
    document.getElementById("imageArea").innerHTML = htmlstr;
}
window.onload = function() {
    document.getElementById("btn").onclick = function() {
        showImage(1);
        this.disabled = true;
    };
};