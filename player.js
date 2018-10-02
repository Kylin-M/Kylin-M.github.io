//初始化全局变量
bgmList = new Array(4);
bgmList[0] = "music/Begin.mp3";
bgmList[1] = "music/WhenTheLightComes.mp3";
bgmList[2] = "music/Clsr.mp3";
bgmList[3] = "music/TimeTravel.mp3";

play_flag = true;//是否为首次播放
index = 0;//播放曲目数组下标
audio = document.getElementById('myAudio');

minute = 0;
second = 0;

icon_margin_left = 395;
i = -3;


function showTime() {
    var Time = audio.currentTime;//已播时间
    var totalTime = audio.duration;//歌曲总时间
    var fill_width = (Time / totalTime) * 300;//播放进度条

    document.getElementById('fill').style.width = fill_width + "px";
    document.getElementById('slider').style.left = fill_width - 6 + "px";
    document.getElementById('display').innerHTML = cTime(Time) + " / " + cTime(totalTime);

    if (audio.currentTime == audio.duration) {
        nextMusic();//当前曲目结束，自动播放下一首
    }

    window.setTimeout("showTime()", 1000);
}

function show_playerList() {//显示、隐藏播放列表
    if (document.getElementById('playlist').style.visibility === "collapse") {
        document.getElementById('playlist').style.visibility = "visible";
    }
    else document.getElementById('playlist').style.visibility = "collapse";
}

function init_bgmList() {//初始化播放列表
    for (var i = 0; i < bgmList.length; i++) {
        document.getElementById('m' + i).innerHTML = bgmList[i].slice(6);
    }
}

function bf() {//播放、暂停
    if (play_flag == true) {
        index = 0;//播放曲目数组下标
        audio.src = bgmList[index];
        play_flag = false;
    }
    showTime();
    if (audio !== null) {
        if (audio.paused) {
            document.getElementById('play_stop').style.backgroundImage = "url('image/stop.png')";
            changePlayerTitle();
            audio.play();// 这个就是播放
        } else {
            document.getElementById('play_stop').style.backgroundImage = "url('image/play.png')";
            audio.pause();// 这个就是暂停
        }
    }
}

function lastMusic() {//上一首
    if (index == 0) index = bgmList.length;
    index--;
    audio.src = bgmList[index];
    changePlayerTitle();
    bf();
    audio.play();
}

/* 迅速点击来回切换歌曲会导致index的赋值出现问题 暂时不知道怎么解决 */

function nextMusic() {//下一首
    if (index == (bgmList.length - 1)) index = -1;
    index++;
    audio.src = bgmList[index];
    changePlayerTitle();
    bf();
    audio.play();
}

function mute() {//静音
    if (audio.muted) {
        document.getElementById('player_voice').style.backgroundImage = "url('image/voice.png')";
    }
    else {
        document.getElementById('player_voice').style.backgroundImage = "url('image/mute.png')";
    }
    audio.muted = !audio.muted;
}

function choiceMusic(obj) {//选择播放
    index = Number(obj.id.slice(1));//根据li的id得到bgmList的序号值
    audio.src = bgmList[index];
    bf();
    audio.play();
}

function changePlayerTitle() {//改变播放器标题
    str = document.getElementById('myAudio').src.split('/');
    document.getElementById('bgm_name').innerText = str[str.length - 1];
}

function cTime(time) {//转换显示的时间格式
    var minute = 0;
    var second = 0;

    minute = Math.floor(time / 60);
    second = Math.round(time % 60);
    second = second < 9 ? "0" + second : second;

    return minute + ":" + second;
}

function changeButtonIcon(obj, flag) {
    if (flag == true) {
        switch (obj.id) {
            case 'player_last':
                obj.style.backgroundImage = "url('image/last2.png')";
                break;
            case 'play_stop':
                if (audio.paused) {
                    obj.style.backgroundImage = "url('image/play2.png')";
                }
                else {
                    obj.style.backgroundImage = "url('image/stop2.png')";
                }
                break;
            case 'player_next':
                obj.style.backgroundImage = "url('image/next2.png')";
                break;
            case 'player_voice':
                if (audio.muted) {
                    obj.style.backgroundImage = "url('image/mute2.png')";
                }
                else {
                    obj.style.backgroundImage = "url('image/voice2.png')";
                }
                break;
            case 'player_list':
                obj.style.backgroundImage = "url('image/list2.png')";
                break;
        }
    }
    else {
        switch (obj.id) {
            case 'player_last':
                obj.style.backgroundImage = "url('image/last.png')";
                break;
            case 'play_stop':
                if (audio.paused) {
                    obj.style.backgroundImage = "url('image/play.png')";
                }
                else {
                    obj.style.backgroundImage = "url('image/stop.png')";
                }
                break;
            case 'player_next':
                obj.style.backgroundImage = "url('image/next.png')";
                break;
            case 'player_voice':
                if (audio.muted) {
                    obj.style.backgroundImage = "url('image/mute.png')";
                }
                else {
                    obj.style.backgroundImage = "url('image/voice.png')";
                }
                break;
            case 'player_list':
                obj.style.backgroundImage = "url('image/list.png')";
                break;
        }
    }
}
