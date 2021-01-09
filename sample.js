function inputCheck() {
    if(document.frm1.lastname.value == "") {
        alert("性を入力してください");
    } else if (document.frm1.firstname.value == "") {
        alert("名を入力してください");
    } else if (!document.frm1.gender[0] .checked &&
        !document.frm1.gender[1] .checked) {
            alert("性別を入力してください");
        } else {
            document.frm1.submit();
        }
}