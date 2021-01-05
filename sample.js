var user = {
    name : "山田太郎",
    age : 25,
    heigth : 170
};
for (var key in user) {
    console.log(key + " : " + user[key]);
}