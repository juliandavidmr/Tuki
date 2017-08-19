import configs from '../configs'
import Bird from './Bird'
import Bar from './Bar'
import Point from './Point'

export default function sketch(s) {
  let x, y, backgroundColor = 0;

  var bird = new Bird(s);
  var bars = []
  var points = []
  var countSpaces = 0
  var periodBars = 80

  const {
    width,
    height
  } = configs.canvas.size;

  s.setup = () => {
    s.createCanvas(width, height);
  };

  s.draw = () => {
    s.background(backgroundColor);

    // Bars
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

    // points bird 
    if (points.length >= 20) {
      points.splice(0, Math.random() * 4 )
    }
    points.push(new Point(bird.x, bird.y, s))

    points.map(p => {
      p.show()
      p.update()
    })

    bird.update()
    bird.show()

    if (s.frameCount % periodBars === 0) {
      bars.push(new Bar(s))
      bars.length > 30 ? bars.shift() : 0
      upPeriodBar()
    }
  
    // text
    s.textSize(20);
    s.text("Espacios " + countSpaces, 10, 30);
  };

  s.mousePressed = () => {

  };

  s.keyPressed = () => {
    if (s.key == ' ') {
      console.log('SPACE')
      bird.up()
      countSpaces++;
    }
  }

  function upPeriodBar() {
    s.frameCount !== 40? periodBars-- : 0;
  }
}