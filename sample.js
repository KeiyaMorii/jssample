var tickets = [125, 177, 236, 395, 404, 492, 501, 580 ];
for (var i = 0; i < tickets.length; i++) {
    if (tickets[i] >= 500) {
        break
    }
    console.log(tickets[i]);
}
console.log("終了");