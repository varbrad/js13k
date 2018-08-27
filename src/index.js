import './style.scss'

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas')
  canvas.width = 240
  canvas.height = 160

  document.body.appendChild(c)

  function init() {
    // Do stuff here

    update();
  }

  function update() {
    requestAnimationFrame(update)
  }

  init();
})
