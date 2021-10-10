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
    const sketch = (canvas_: p5) => {
      canvas_.setup = () => {
        let canvas = canvas_.createCanvas(400, 400, canvas_.WEBGL);
        this.cube = new Cube(canvas_, 50, this.turnService, this.control);
        canvas.parent('sketch-holder');
      };

      canvas_.draw = () => {
        canvas.rotateX(canvas_.PI / -10)
        canvas.rotateY(canvas_.PI / -6)
        canvas_.clear();
        this.cube.show();
      };
    }
    let canvas = new p5(sketch);
  }

}

