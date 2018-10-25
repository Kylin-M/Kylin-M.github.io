$(document).ready(function () {
    var scroll_width = 0;
    var img_list = $("#img_list");
    var timer = setInterval(function () {
        scroll_width += 100;
        var str = "-" + scroll_width + "%";
        img_list.animate({marginLeft: str});
        if (scroll_width === 300) {
            scroll_width = -100;
        }
    }, 1000);
});