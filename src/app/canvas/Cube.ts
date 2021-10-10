import * as p5 from "p5";
import {TurnService} from "../turn.service";
import {AnimationService} from "./animationService";
import {Cubie} from './Cubie';
import {FormControl} from "@angular/forms";

export class Cube {
  animationService: AnimationService;
  queue: string[];
  angle = (Math.PI / 2);
  cubes: Cubie[];

  constructor(private canvas: p5, private width: number, private turnService: TurnService, control: FormControl) {
    this.cubes = new Array(27);
    this.animationService = new AnimationService(this.cubes, this.turnService, control);
    this.queue = [];
    let count: number = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          this.cubes[count] = new Cubie(x, y, z, 50, canvas);
          count++;
        }
      }
    }
    turnService.animationFinished$.subscribe(() => {
      this.queue.shift();
      this.stepAlg();
    });
  }

  show() {
    for (let x = 0; x < 27; x++) {
      this.cubes[x].show();
    }
  }

  loadAlg(turn: string) {
    this.queue.push(turn);
    if (this.animationService.animationInterval == -1) {
      this.stepAlg();
    }
  }

  stepAlg() {
    let nextStep = this.queue[0];
    if (nextStep) {
      this.applyTurn(nextStep);
    }
  }

  applyTurn(turn: string) {
    switch (turn) {
      case 'R':
        this.animationService.turnX([1], 1);
        break;
      case 'R\'':
        this.animationService.turnX([1], -1);
        break;
      case 'r':
        this.animationService.turnX([0, 1], 1);
        break;
      case 'r\'':
        this.animationService.turnX([0, 1], -1);
        break;
      case 'L':
        this.animationService.turnX([-1], -1);
        break;
      case 'L\'':
        this.animationService.turnX([-1], 1);
        break;
      case 'l':
        this.animationService.turnX([0, -1], -1);
        break;
      case 'l\'':
        this.animationService.turnX([0, -1], 1);
        break;
      case 'U':
        this.animationService.turnY([-1], -1);
        break;
      case 'U\'':
        this.animationService.turnY([-1], 1);
        break;
      case 'u':
        this.animationService.turnY([0, -1], -1);
        break;
      case 'u\'':
        this.animationService.turnY([0, -1], 1);
        break;
      case 'D':
        this.animationService.turnY([1], 1);
        break;
      case 'D\'':
        this.animationService.turnY([1], -1);
        break;
      case 'd':
        this.animationService.turnY([0, 1], 1);
        break;
      case 'd\'':
        this.animationService.turnY([0, 1], -1);
        break;
      case 'F':
        this.animationService.turnZ([1], 1);
        break;
      case 'F\'':
        this.animationService.turnZ([1], -1);
        break;
      case 'f':
        this.animationService.turnZ([0, 1], 1);
        break;
      case 'f\'':
        this.animationService.turnZ([0, 1], -1);
        break;
      case 'B':
        this.animationService.turnZ([-1], -1);
        break;
      case 'B\'':
        this.animationService.turnZ([-1], 1);
        break;
      case 'b':
        this.animationService.turnZ([0, -1], -1);
        break;
      case 'b\'':
        this.animationService.turnZ([0, -1], 1);
        break;
      case 'M':
        this.animationService.turnX([0], -1);
        break;
      case 'M\'':
        this.animationService.turnX([0], 1);
        break;
    }
  }
}
