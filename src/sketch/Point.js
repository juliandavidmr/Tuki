export default class Point {

  constructor(x, y, s) {
    this.x = x
    this.y = y
    this.s = s
  }

  update() {
    this.x-=4
  }

  show() {
    this.s.point(this.x, this.y);
  }

}