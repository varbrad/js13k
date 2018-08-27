const WIDTH = 240
const HEIGHT = 160
const SCALE = 4

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas')
  const gx = canvas.getContext('2d')
  canvas.width = WIDTH * SCALE
  canvas.height = HEIGHT * SCALE
  gx.scale(SCALE, SCALE)

  document.body.appendChild(canvas)

  function init() {
    // Do stuff here

    update();
  }

  function update() {
    gx.clearRect(0, 0, WIDTH, HEIGHT)

    // Loopy loop
    requestAnimationFrame(update)
  }

  init();
})
