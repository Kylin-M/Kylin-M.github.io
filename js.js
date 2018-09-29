function init() {
    label = new Array(5);
    label[0] = document.getElementById('label1');
    label[1] = document.getElementById('label2');
    label[2] = document.getElementById('label3');
    label[3] = document.getElementById('label4');
    label[4] = document.getElementById('label5');

    li = new Array(5);
    li[0] = document.getElementById('li1');
    li[1] = document.getElementById('li2');
    li[2] = document.getElementById('li3');
    li[3] = document.getElementById('li4');
    li[4] = document.getElementById('li5');

    display_board = new Array(5);
    display_board[0] = document.getElementById('basic_info');
    display_board[1] = document.getElementById('job_intention');
    display_board[2] = document.getElementById('education_exp');
    display_board[3] = document.getElementById('self_evaluation');
    display_board[4] = document.getElementById('hobby');

    hobby_nav = new Array(5);
    hobby_nav[0] = document.getElementById('hobby_l1');
    hobby_nav[1] = document.getElementById('hobby_l2');
    hobby_nav[2] = document.getElementById('hobby_l3');
    hobby_nav[3] = document.getElementById('hobby_l4');
    hobby_nav[4] = document.getElementById('hobby_l5');

    hobby_div = new Array(5);
    hobby_div[0] = document.getElementById('div1');
    hobby_div[1] = document.getElementById('div2');
    hobby_div[2] = document.getElementById('div3');
    hobby_div[3] = document.getElementById('div4');
    hobby_div[4] = document.getElementById('div5');

    // click_label(li[0]);
    // move_label(li[0]);

    click_label(li[4]);
    move_label(li[4]);

}

function move_label(obj) {
    obj.firstChild.style.zIndex = 1;

    var head = 0, tail = -100, timer = null;
    timer = setInterval(function () {
        tail += 3;
        head += 3;
        obj.firstChild.style.left = tail + "px";
        obj.style.marginLeft = head + "px";
        if (head >= 101) clearTimeout(timer);
    }, 2);
}

function click_label(obj) {
    obj.lastChild.style.backgroundImage = "url('image/label_selected_head.png')";
    switch (obj) {
        case li[0]:
            board_hidden(0);
            change_focus(0);
            break;
        case li[1]:
            board_hidden(1);
            change_focus(1);
            break;
        case li[2]:
            board_hidden(2);
            change_focus(2);
            break;
        case li[3]:
            board_hidden(3);
            change_focus(3);
            break;
        case li[4]:
            board_hidden(4);
            change_focus(4);
            click_hobby_nav(hobby_nav[1]);
            break;
    }
}

function board_hidden(index) {
    display_board[4].style.overflow = "hidden";
    for (var i = 0; i < display_board.length; i++) {
        if (i == index) {
            display_board[i].style.visibility = "visible";
        }
        else {
            display_board[i].style.visibility = "hidden";
        }
    }
}

function change_focus(index) {
    for (var i = 0; i < li.length; i++) {
        if (i != index) {
            li[i].removeAttribute('style');
            li[i].firstChild.removeAttribute('style');
            li[i].lastChild.removeAttribute('style');
        }
    }
}

function click_hobby_nav(obj) {
    display_board[4].removeAttribute('style');
    for (var i = 0; i < hobby_nav.length; i++) {
        if (obj == hobby_nav[i]) {
            change_hobby_display(i);
        }
    }
}

function change_hobby_display(index) {
    for (var i = 0; i < li.length; i++) {
        if (i == index) {
            hobby_div[i].style.visibility = "visible";
        }
        else {
            hobby_div[i].style.visibility = "hidden";
        }
    }
}


