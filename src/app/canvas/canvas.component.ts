import {Component, Input, OnInit} from '@angular/core';
import {Cube} from './Cube';
import * as p5 from 'p5';
import {TurnService} from '../turn.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'cube-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {
  cube!: Cube;
  @Input() control!: FormControl;

  constructor(private turnService: TurnService) {
    turnService.turnSource$.subscribe(
      turn => {
        this.cube.loadAlg(turn)
      });
  }


  ngOnInit(): void {
    let canvasX = Math.PI / -10;
    let canvasY = Math.PI / -6;
    const sketch = (canvas_: p5) => {
      canvas_.setup = () => {
        let canvas = canvas_.createCanvas(400, 400, canvas_.WEBGL);
        this.cube = new Cube(canvas_, 50, this.turnService, this.control);
        canvas.parent('sketch-holder');

        let drag = false;
        let x = 0, y = 0;
        let dx = y, dy = 0;
        canvas.mousePressed(() => {
          drag = true;
          x = canvas_.mouseX;
          y = canvas_.mouseY;
        });

        canvas.mouseReleased(() => {
          drag = false;
        });

        canvas.mouseMoved(() => {
          if (drag) {
            dy = (canvas_.mouseX-x)/100;
            dx = (canvas_.mouseY-y)/-100;
            x = canvas_.mouseX;
            y = canvas_.mouseY;
            canvasX += dx;
            canvasY += dy
          }
        });
      };

      canvas_.draw = () => {
        canvas.rotateX(canvasX)
        canvas.rotateY(canvasY)
        canvas_.clear();
        this.cube.show();
      };
    }
    let canvas = new p5(sketch);

  }

}

