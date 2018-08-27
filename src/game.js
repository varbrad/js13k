import { WIDTH, HEIGHT } from "./consts";

class Game {
  constructor(gc) {
    this.gc = gc;
  }

  init() {
    this.update();
  }

  update() {
    this.gc.clearRect(0, 0, WIDTH, HEIGHT);

    requestAnimationFrame(() => this.update());
  }
}

export default Game;
