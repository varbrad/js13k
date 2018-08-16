const d = document
const b = d.body
const w = window

window.addEventListener('DOMContentLoaded', () => {
  const c = d.createElement('canvas')
  c.width = w.innerWidth
  c.height = w.innerHeight

  c.style.backgroundColor = '#333'
  c.style.verticalAlign = 'bottom'

  b.style.margin = 0
  b.style.overflow = 'hidden'

  b.appendChild(c)

  function init() {
    // Do stuff here

    update();
  }

  function update() {
    requestAnimationFrame(update)
  }

  init();
})
