$(function() {
    $.getJSON("item.json",
    function(data) {
        for(let i=0; i<data.length; i++) {
            $("#dataTable").append("<tr></tr>")
            .find("tr:last")
            .append("<td>" + data[i].code + "</td>")
            .append("<td>" + data[i].name + "</td>")
            .append("<td>" + data[i].price + "</td>");
        }
    }
    );
});