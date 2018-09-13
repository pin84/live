<template>
  <div class="wrapper">
    <!-- <h1>canvas001</h1> -->
    <canvas id="canvas" width="600" height="300">一个可以跟随鼠标移动的小球。</canvas>
  </div>
</template>
<script>
export default {

  mounted() {
    this.initCanvas()
  },

  methods: {
    
    initCanvas() {
      let canvas = document.getElementById('canvas')
      let ctx = canvas.getContext('2d')
      let raf
      let running = false

      let ball = {
        x: 100,
        y: 100,
        vx: 5,
        vy: 2,
        radius: 25,
        color: 'blue',
        draw: function () {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
          ctx.closePath()
          ctx.fillStyle = this.color
          ctx.fill()
        }
      }

      function clear(){
          // ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      function draw() {
        clear()
        ball.draw()
        ball.x += ball.vx
        ball.y += ball.vy
        // ball.vy *= .99;
        // ball.vy += .25;
        if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
          ball.vy = -ball.vy;
        }
        if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
          ball.vx = -ball.vx;
        }
        raf = window.requestAnimationFrame(draw)
      }

      canvas.addEventListener('mousemove',(e)=>{
        if(!running){
          clear()
          ball.x = e.clientX
          ball.y = e.clientY
          ball.draw()
        }
      })

      canvas.addEventListener('click', function (e) {
        if(!running){
          raf = window.requestAnimationFrame(draw);
          running = true
        }
      });

      canvas.addEventListener('mouseout', function (e) {
        window.cancelAnimationFrame(raf);
        running = false;
      });


      ball.draw()


    }




  }
}
</script>
<style lang="stylus" scoped>
// *
//   margin 0
//   padding 0
#canvas
  border 1px solid gray
</style>
