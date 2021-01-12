const olympic = new Date("2021-7-23");
let hoge = new Date();
let diff = olympic.getTime() - hoge.getTime();

alert("オリンピックまでの日数は" + Math.floor(diff / 1000 / 60 / 60 / 24) + "日後です");

console.log(new Date());