import { WIDTH, HEIGHT, SCALE } from './consts'
import Game from './game'

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas')
  const gc = canvas.getContext('2d')
  canvas.width = WIDTH * SCALE
  canvas.height = HEIGHT * SCALE
  gc.scale(SCALE, SCALE)

  const game = new Game(gc)
  document.body.appendChild(canvas)
  game.init();
})
