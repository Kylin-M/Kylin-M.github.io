draw_shade = Array(6);
draw_shade[0] = document.getElementById('draw1').firstChild;
draw_shade[1] = document.getElementById('draw2').firstChild;
draw_shade[2] = document.getElementById('draw3').firstChild;
draw_shade[3] = document.getElementById('draw4').firstChild;
draw_shade[4] = document.getElementById('draw5').firstChild;
draw_shade[5] = document.getElementById('draw6').firstChild;

draw_img = Array(6);
draw_img[0] = document.getElementById('draw1');
draw_img[1] = document.getElementById('draw2');
draw_img[2] = document.getElementById('draw3');
draw_img[3] = document.getElementById('draw4');
draw_img[4] = document.getElementById('draw5');
draw_img[5] = document.getElementById('draw6');

index = -1;
draw = undefined;

function draw_hover(obj) {
    for (var i = 0; i < draw_img.length; i++) {
        if (draw_img[i] == obj) {
            draw_shade[i].style.zIndex = 1;
            index = i;
        }
    }
}

function show_draw(obj) {
    for (var i = 0; i < draw_img.length; i++) {
        if (draw_shade[i] == obj) {
            alert("click");
            //alert("draw", "show");
        }
    }
}

function mouseLeave() {
    draw_shade[index].removeAttribute('style');
}

draw_img[0].addEventListener("mouseout", mouseLeave);
draw_img[1].addEventListener("mouseout", mouseLeave);
draw_img[2].addEventListener("mouseout", mouseLeave);
draw_img[3].addEventListener("mouseout", mouseLeave);
draw_img[4].addEventListener("mouseout", mouseLeave);
draw_img[5].addEventListener("mouseout", mouseLeave);

