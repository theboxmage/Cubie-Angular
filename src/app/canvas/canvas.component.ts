import { Component, OnInit } from '@angular/core';
import { Cubie } from './Cubie';
import { Cube } from './Cube';
import * as p5 from 'p5';
import { TurnService } from '../turn.service';
@Component({
  selector: 'cube-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {
  cube!: Cube;
  constructor(private turnService: TurnService) {
    turnService.turnSource$.subscribe(
      turn => { this.cube.applyTurn(turn) }
    )
  }


  ngOnInit(): void {
    const sketch = (s: p5) => {
      s.setup = () => {
        let canvas = s.createCanvas(400, 400, s.WEBGL);
        let count = 0;
        this.cube = new Cube(s, 50);
        canvas.parent('sketch-holder');
      };

      s.draw = () => {
        canvas.rotateX(s.PI / -10)
        canvas.rotateY(s.PI / -6)
        s.clear();
        this.cube.show();
      };
    }
    let canvas = new p5(sketch);
  }

}

