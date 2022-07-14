function zoomIn() {
    document.body.style.zoom = "150%"
}

function zoomOut() {
    document.body.style.zoom = "100%"
}

var root = document.getElementsByTagName("html")[0];

function toggleTheme() {
    "filter:grayscale(100%)" === root.getAttribute("style") ? root.setAttribute("style", "filter:grayscale(0%)") : root.setAttribute("style", "filter:grayscale(100%)")
}

function link() {

    var a = document.getElementsByTagName("a");

    for (var i = 0; i < a.length; i++) {
        a[i].classList.toggle("acc-link-style");
    }
}

function toggleOpen() {
    var t = document.getElementById("accIconsDisplay");
    t.classList.toggle("close");
}