function showIppan() {
    document.getElementById("ippan_area").className = "active";
    document.getElementById("hojin_area").className = "passive";
}
function showHojin() {
    document.getElementById("ippan_area").className = "passive";
    document.getElementById("hojin_area").className = "active";
}