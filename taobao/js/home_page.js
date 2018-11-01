$(document).ready(function () {
    var scroll_width = -100;
    var img_list = $("#img_list");
    var timer = setInterval(function () {
        scroll_width += 100;
        var str = "-" + scroll_width + "%";
        change_img_bt(scroll_width / 100);
        img_list.animate({marginLeft: str});
        if (scroll_width === 300) {
            scroll_width = -100;
        }
    }, 1500);

    $("#nav_switch_recommend a").hover(function () {
        $(this).children().eq(0).addClass("nav_switch_recommend_a_hover_span1");
        $(this).children().eq(1).addClass("nav_switch_recommend_a_hover_span2");
    },function () {
        $(this).children().eq(0).removeClass("nav_switch_recommend_a_hover_span1");
        $(this).children().eq(1).removeClass("nav_switch_recommend_a_hover_span2");
    });

});

function change_img_bt(index) {
    var bt_change_img = $("#bt_change_img li");
    for (var i = 0; i < bt_change_img.length; i++) {
        if (i === index) {
            bt_change_img.eq(i).css("background-color", "#ff2200");
        }
        else bt_change_img.eq(i).css("background-color", "rgba(255, 255, 255, 0.5)");
    }
}

window.onload = function () {
    set_nav_top_height();
};

window.onresize = function () {
    set_nav_top_height();
};

function set_nav_top_height() {
    var nav_height = document.getElementById('nav_bottom').clientHeight;
    document.getElementById('white_block').style.height = nav_height + "px";
    document.getElementById('nav_top').style.height = nav_height + "px";


    var body_width = document.body.clientWidth,
        body_height = document.body.clientHeight;
    var font_size = body_width < body_height ? body_width : body_height;
    if (font_size > 1080) font_size = 1080;
    // document.getElementById('display').innerHTML = font_size + "";
    /*获得最短的那条边的长度*/
    font_size = font_size * 24 / 1080;
    $('html').css("font-size", font_size.toFixed(1) + "px");
}