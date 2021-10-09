import * as p5 from 'p5';
import { Colors } from './Colors'
export class Cubie {
  pos!: p5.Vector;
  rot!: p5.Vector;
  len: number;
  colors: Colors;
  canvas: p5;
  a: number;

  constructor(x: number, y: number, z: number, len_: number, c: p5) {
    this.canvas = c;
    this.pos = c.createVector(x, y, z);
    this.rot = c.createVector(0, 0, 0);
    this.len = len_;
    this.colors = new Colors();
    this.a = Math.PI / 2;
  }

  show() {
    let radius: number = this.len / 2;
    this.canvas.push();
    this.canvas.rotateX(this.rot.x);
    this.canvas.rotateY(this.rot.y);
    this.canvas.rotateZ(this.rot.z);
    this.canvas.translate(this.len * this.pos.x, this.len * this.pos.y, this.len * this.pos.z);
    this.canvas.fill("#F00");
    this.canvas.stroke(0);
    this.canvas.strokeWeight(4);

    for (let i = -1; i <= 1; i += 2) {
      //Z-fixed
      this.canvas.fill(i == 1 ? this.colors.xrow[0].color : this.colors.xrow[2].color);
      this.canvas.beginShape();
      this.canvas.vertex(-radius, -radius, i * radius);
      this.canvas.vertex(radius, -radius, i * radius);
      this.canvas.vertex(radius, radius, i * radius);
      this.canvas.vertex(-radius, radius, i * radius);
      this.canvas.endShape(this.canvas.CLOSE);
      //Y-fixed
      this.canvas.beginShape();
      this.canvas.fill(i != 1 ? this.colors.yrow[3].color : this.colors.yrow[1].color);
      this.canvas.vertex(-radius, i * radius, -radius);
      this.canvas.vertex(radius, i * radius, -radius);
      this.canvas.vertex(radius, i * radius, radius);
      this.canvas.vertex(-radius, i * radius, radius);
      this.canvas.endShape(this.canvas.CLOSE);
      //x-fixed
      this.canvas.beginShape();
      this.canvas.fill(i == 1 ? this.colors.xrow[1].color : this.colors.xrow[3].color);
      this.canvas.vertex(i * radius, -radius, -radius);
      this.canvas.vertex(i * radius, radius, -radius);
      this.canvas.vertex(i * radius, radius, radius);
      this.canvas.vertex(i * radius, -radius, radius);
      this.canvas.endShape(this.canvas.CLOSE);
    }
    this.canvas.pop();
  }

  rotateX(direction: number) {
    let angle = this.a*direction;
    let yPrime = Math.round(this.pos.y * Math.cos(angle) - this.pos.z * Math.sin(angle));
    let zPrime = Math.round(this.pos.y * Math.sin(angle) + this.pos.z * Math.cos(angle));
    this.pos.y = yPrime;
    this.pos.z = zPrime;
    direction == 1 ? this.colors.rotateY() : this.colors.rotateYPrime();;
  }

  rotateY(direction: number) {
    let angle = this.a*direction;
    let xPrime = Math.round(this.pos.x * Math.cos(angle) + this.pos.z * Math.sin(angle));
    let zPrime = Math.round((-1 * this.pos.x) * Math.sin(angle) + this.pos.z * Math.cos(angle));
    this.pos.x = xPrime;
    this.pos.z = zPrime;
    direction != 1 ? this.colors.rotateX() : this.colors.rotateXPrime();
  }

  rotateZ(direction: number) {
    let angle = this.a*direction;
    let xPrime = Math.round(this.pos.x * Math.cos(angle) - this.pos.y * Math.sin(angle));
    let yPrime = Math.round(this.pos.x * Math.sin(angle) + this.pos.y * Math.cos(angle));
    this.pos.x = xPrime;
    this.pos.y = yPrime;
    direction == 1 ? this.colors.rotateZ() : this.colors.rotateZPrime();
  }
}