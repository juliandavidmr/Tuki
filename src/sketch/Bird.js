import c from '../configs'

var {
  height
} = c.canvas.size;

export default class Bird {
  x = 200
  gravity = .6
  velocity = 0
  lift = -15

  constructor(s) {
    this.y = height / 2;
    this.s = s
  }

  show() {
    this.s.fill(255)
    this.s.ellipse(this.x, this.y, 32, 32)
  }

  up() {
    this.velocity += this.lift
  }

  update() {
    this.velocity += this.gravity
    this.velocity *= .9
    this.y += this.velocity

    if (this.y > height) {
      this.y = height
      this.velocity = 0
    }

    if (this.y < 0) {
      this.y = 0
      this.velocity = 0
    }
  }

}