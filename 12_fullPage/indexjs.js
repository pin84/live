$(function () {
    //1、调用fullpage
    $(".main").fullpage({
        sectionsColor: ["#1bbc9b", "#1bbc9b", "#1bbc9b", "#1bbc9b"]
    });


    console.log('sdfsdf')
    //控制音频播放
    var audiobox = document.getElementById("audiobox");
    var audio = document.getElementById("audio");

    audiobox.onclick = function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
})