let obj1 = {
    name: "よしお",
    greet: function(age, from) {
        console.log(this.name + "です、はじめまして");
        console.log("年齢は" + age + "歳です");
        console.log("出身地は" + from + "です");
    }
};
let obj2 = {
    name: "ユリ子"
};
let param = [6, "アメリカ"];
obj1.greet.apply(obj2,param);