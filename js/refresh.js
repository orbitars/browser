function update_qr(id) {
    document.getElementById("qr").setAttribute("src", "qrs/qr_" + id + ".png");
}
function fade_else(){
    document.getElementById("title-row").style.opacity = "0";
    document.getElementById("footer-row").style.opacity = "0";
}
function unfade_else(){
    document.getElementById("title-row").style.opacity = "1";
    document.getElementById("footer-row").style.opacity = "1";
}