import configs from '../configs'
import Bird from './Bird'
import Bar from './Bar'
import Point from './Point'

export default function sketch(s) {
  let x, y, backgroundColor = 0;

  var bird = new Bird(s);
  var bars = []
  var points = []

  const {
    width,
    height
  } = configs.canvas.size;

  s.setup = () => {
    s.createCanvas(width, height);

    bars.push(new Bar(s))
  };

  s.draw = () => {
    s.background(backgroundColor);

    for (var index = bars.length - 1; index >= 0; index--) {
      var bar = bars[index];
      bar.show()
      bar.update()

      if (bar.hits(bird)) {
        console.log("HIT")
      }

      if (bar.offscreen()) {
        bars.splice(index, 1)
      }
    }

    if (points.length >= 20) {
      points.splice(0, 1)
    }
    points.push(new Point(bird.x, bird.y, s))

    points.map(p => {
      p.show()
      p.update()
    })

    bird.update()
    bird.show()

    if (s.frameCount % 80 === 0) {
      bars.push(new Bar(s))
      bars.length > 10 ? bars.shift() : 0
    }
  };

  s.mousePressed = () => {

  };

  s.keyPressed = () => {
    if (s.key == ' ') {
      console.log('SPACE')
      bird.up()
    }
  }
}