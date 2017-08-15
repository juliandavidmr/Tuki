import c from '../configs'

var {
  height,
  width
} = c.canvas.size;

export default class Bar {

  w = 20
  speed = 4
  highlight = false;

  constructor(s) {
    this.top = Math.random() * height / 2
    this.bottom = Math.random() * height / 2

    this.x = width
    this.s = s
  }

  update() {
    this.x -= this.speed
  }

  offscreen() {
    return (this.x < -this.w)
  }

  /**
   * @param {Object} bird
   */
  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    return false;
  }

  show() {
    if (this.highlight) {
      this.s.fill(255, 0, 0)
    } else {
      this.s.fill(255)
    }
    this.s.rect(this.x, 0, this.w, this.top)
    this.s.rect(this.x, height - this.bottom, this.w, this.bottom)
  }
}