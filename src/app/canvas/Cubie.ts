import * as p5 from 'p5';
import { Colors } from './Colors'
export class Cubie {
  pos!: p5.Vector;
  rot!: p5.Vector;
  len: number;
  colors: Colors;

  constructor(x: number, y: number, z: number, len_: number, c: p5) {
    this.pos = c.createVector(x, y, z);
    this.rot = c.createVector(0, 0, 0);
    this.len = len_;
    this.colors = new Colors();
  }
  
  show(canvas: p5) {
    let radius: number = this.len / 2;
    canvas.push();
    canvas.translate(this.len * this.pos.x, this.len * this.pos.y, this.len * this.pos.z);
    canvas.rotateX(this.rot.x);
    canvas.rotateY(this.rot.y);
    canvas.rotateZ(this.rot.z);
    canvas.fill("#F00");
    canvas.stroke(0);
    canvas.strokeWeight(4);
    
    for (let i = -1; i <= 1; i += 2) {
      //Z-fixed
      canvas.fill(i == 1 ? this.colors.xrow[0].color : this.colors.xrow[2].color);
      canvas.beginShape();
      canvas.vertex(-radius, -radius, i * radius);
      canvas.vertex(radius, -radius, i * radius);
      canvas.vertex(radius, radius, i * radius);
      canvas.vertex(-radius, radius, i * radius);
      canvas.endShape(canvas.CLOSE);
      //Y-fixed
      canvas.beginShape();
      canvas.fill(i != 1 ? this.colors.yrow[3].color : this.colors.yrow[1].color);
      canvas.vertex(-radius, i * radius, -radius);
      canvas.vertex(radius, i * radius, -radius);
      canvas.vertex(radius, i * radius, radius);
      canvas.vertex(-radius, i * radius, radius);
      canvas.endShape(canvas.CLOSE);
      //x-fixed
      canvas.beginShape();
      canvas.fill(i == 1 ? this.colors.xrow[1].color : this.colors.xrow[2].color);
      canvas.vertex(i * radius, -radius, -radius);
      canvas.vertex(i * radius, radius, -radius);
      canvas.vertex(i * radius, radius, radius);
      canvas.vertex(i * radius, -radius, radius);
      canvas.endShape(canvas.CLOSE);
    }
    canvas.pop();
  }

  rotateX(direction: number)
  {
    direction == 1 ? this.colors.rotateY() : this.colors.rotateYPrime();;
  }

  rotateY(direction: number)
  {
    direction != 1 ? this.colors.rotateX() : this.colors.rotateXPrime();
  }
  
  rotateZ(direction: number)
  {
    direction == 1 ? this.colors.rotateZ() : this.colors.rotateZPrime();
  }
}