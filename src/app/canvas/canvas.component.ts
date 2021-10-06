import { Component, OnInit } from '@angular/core';
import { Cubie } from './Cubie';
import * as p5 from 'p5';
import { TurnService } from '../turn.service';
@Component({
  selector: 'cube-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {
  cubes!: Cubie[];
  angle = (Math.PI / 2);
  constructor(private turnService: TurnService) {
    turnService.turnSource$.subscribe(
      turn => { this.applyTurn(turn) }
    )
  }

  applyTurn(turn: string) {
    switch (turn) {
      case 'R':
        this.turnX(1, 1)
        break;
      case 'R\'':
        this.turnX(1, -1)
        break;
      case 'r':
        this.turnX(1, 1);
        this.turnX(0, 1);
        break;
      case 'r\'':
        this.turnX(1, -1);
        this.turnX(0, -1);
        break;
      case 'L':
        this.turnX(-1, -1);
        break;
      case 'L\'':
        this.turnX(-1, 1);
        break;
      case 'l':
        this.turnX(-1, -1);
        this.turnX(0, -1);
        break;
      case 'l\'':
        this.turnX(-1, 1);
        this.turnX(0, 1);
        break;
      case 'U':
        this.turnY(-1, -1);
        break;
      case 'U\'':
        this.turnY(-1, 1);
        break;
      case 'D':
        this.turnY(1, 1);
        break;
      case 'D\'':
        this.turnY(1, -1);
        break;
      case 'F':
        this.turnZ(1, 1);
        break;
      case 'F\'':
        this.turnZ(1, -1);
        break;
      case 'B':
        this.turnZ(-1, -1);
        break;
      case 'B\'':
        this.turnZ(-1, 1);
        break;
    }
  }

  turnX(row: number, direction: number) {
    let a = this.angle * direction;
    for (let i = 0; i < 27; i++) {
      let temp = this.cubes[i].pos;
      if (temp.x == row) {
        let yPrime = Math.round(temp.y * Math.cos(a) - temp.z * Math.sin(a));
        let zPrime = Math.round(temp.y * Math.sin(a) + temp.z * Math.cos(a));
        temp.y = yPrime;
        temp.z = zPrime;
        this.cubes[i].rotateX(direction);
      }
    }
  }

  turnY(row: number, direction: number) {
    let a = this.angle * direction;
    for (let i = 0; i < 27; i++) {
      let temp = this.cubes[i].pos;
      if (temp.y == row) {
        let xPrime = Math.round(temp.x * Math.cos(a) + temp.z * Math.sin(a));
        let zPrime = Math.round((-1 * temp.x) * Math.sin(a) + temp.z * Math.cos(a));
        temp.x = xPrime;
        temp.z = zPrime;
        this.cubes[i].rotateY(direction);
      }
    }
  }

  turnZ(row: number, direction: number) {
    let a = this.angle * direction;
    for (let i = 0; i < 27; i++) {
      let temp = this.cubes[i].pos;
      if (this.cubes[i].pos.z == row) {
        let xPrime = Math.round(temp.x * Math.cos(a) - temp.y * Math.sin(a));
        let yPrime = Math.round(temp.x * Math.sin(a) + temp.y * Math.cos(a));
        temp.x = xPrime;
        temp.y = yPrime;
        this.cubes[i].rotateZ(direction);
      }
    }
  }

  ngOnInit(): void {
    const sketch = (s: p5) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        let canvas = s.createCanvas(400, 400, s.WEBGL);
        let count = 0;
        this.cubes = new Array(27);
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
              this.cubes[count] = new Cubie(x, y, z, 50, s);
              count++;
            }
          }
        }
        canvas.parent('sketch-holder');
      };

      s.draw = () => {
        canvas.rotateX(s.PI / -10)
        canvas.rotateY(s.PI / -6)
        s.clear();
        for (let x = 0; x < 27; x++) {
          this.cubes[x].show(s);
        }
      };
    }
    let canvas = new p5(sketch);
  }

}

