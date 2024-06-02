import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5) {
  p5.setup = () => p5.canva = p5.createCanvas(p5.windowWidth, p5.windowHeight);

  p5.draw = () => {
    p5.canva.style = ('background', '#fff0d6')
    //p5.background('#fff0d6');
    p5.ellipse(100, 100, 50, 50);

  };
}

export default function Sketch() {
  return <ReactP5Wrapper sketch={sketch} />;
}