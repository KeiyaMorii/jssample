let count = 0;
let timer = setInterval(output, 1000);
function output() {
    count++;
    console.log(count + "秒経過");
    if(count >= 10) {
        clearInterval(timer);
    }
}