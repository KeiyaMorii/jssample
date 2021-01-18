$(function() {
    let imageArea = $("#imageArea");
    for(let i=1; i<=5; i++) {
        imageArea.append(
            "<img src='images-j/flower" + i + ".jpg'>"
        );
    }

    $("#next").on("click", function() {
        if(parseInt(imageArea.css("left")) > -800) {
            imageArea.animate({
                "left" : "-=200px" 
            }, "fast", "linear");
        }
    });

    $("#prev").on("click", function() {
        if(parseInt(imageArea.css("left")) < 0) {
            imageArea.animate({
                "left" : "+=200px" 
            }, "fast", "linear");
        }
    });
});