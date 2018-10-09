var changeWidth = function () {
    var wid = document.body.clientWidth;
    if (wid < 940) {
        document.getElementById('page').style.width = "600px";
        document.getElementById('left_frame').className = "left_frame_small";
        document.getElementById('left_frame').style.height = "95%";
        document.getElementById('w_fold').style.visibility = "visible";
    }
    else {
        document.getElementById('page').style.width = "920px";
        document.getElementById('left_frame').className = "left_frame";
        document.getElementById('w_fold').style.visibility = "hidden";
    }
};
window.onload = changeWidth();

window.onresize = function () {
    var wid = document.body.clientWidth;
    if (wid < 940) {
        document.getElementById('page').style.width = "600px";
        document.getElementById('left_frame').className = "left_frame_small";
        document.getElementById('left_frame').style.height = "95%";
        document.getElementById('w_fold').removeAttribute("style");
        document.getElementById('w_fold').style.visibility = "visible";
    }
    else {
        document.getElementById('page').style.width = "920px";
        document.getElementById('left_frame').className = "left_frame";
        document.getElementById('left_frame').removeAttribute("style");
        document.getElementById('w_fold').style.visibility = "hidden";
    }
};

function show_left_module() {
    var left_f = document.getElementById('left_frame');
    var fold = document.getElementById('w_fold');
    if (fold.style.left == 0) {
        left_f.style.left = 0;
        fold.style.left = "325px";
    }
    else {
        left_f.style.left = "-340px";
        document.getElementById('w_fold').removeAttribute("style");

    }
}
