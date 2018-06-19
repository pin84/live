
let music = document.querySelector('div.music')
let audio = document.querySelector('div.music audio')

rotate(music)

function rotate(obj) {
  let i = 1
  let rise = setInterval(() => {
    i += 20
    obj.style.bottom = i + 'px'
    if (i > 500) {
      clearInterval(rise)
    }
  }, 500)

  obj.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      obj.style.background = "url(img/music_on.png) no-repeat center"
    } else {
      audio.pause();
      obj.style.background = "url(img/music_off.png) no-repeat center"
    }
  })

}

