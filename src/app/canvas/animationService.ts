import {Cubie} from './Cubie';
import {TurnService} from '../turn.service';
import {FormControl} from "@angular/forms";


export class AnimationService {
  speed: number;
  animationInterval: number = -1;
  constructor(private cubes: Cubie[], private turnService: TurnService, control:  FormControl) {
    this.speed = control.value;
    control.valueChanges.subscribe(speed => {
      this.speed = speed;
    });
  }

  turnX(index = [1], dir = 1) {
    this.animationInterval = setInterval(this.animateX.bind(this), 20, index, dir)
  }

  turnY(index = [1], dir = 1) {
    this.animationInterval = setInterval(this.animateY.bind(this), 20, index, dir)
  }

  turnZ(index = [1], dir = 1) {
    this.animationInterval = setInterval(this.animateZ.bind(this), 20, index, dir)
  }

  animateX(index: number[], dir: number) {
    let endPoint = false;
    for (let i = 0; i < 27; i++) {
      if (index.includes(Math.round(this.cubes[i].pos.x))) {
        this.cubes[i].rot.x += dir * Math.PI / this.speed;
      }
      if (Math.abs(this.cubes[i].rot.x) > Math.PI / 2) {
        endPoint = true;
      }
    }
    if (endPoint) {
      clearInterval(this.animationInterval);
      this.animationInterval = -1;
      for (let i = 0; i < 27; i++) {
        if (index.includes(Math.round(this.cubes[i].pos.x))) {
          this.cubes[i].rot.x = 0;
          this.cubes[i].rotateX(dir);
        }
      }
      this.turnService.finishAnimation();
    }
  }

  animateY(index: number[], dir: number) {
    let endPoint = false;
    for (let i = 0; i < 27; i++) {
      if (index.includes(Math.round(this.cubes[i].pos.y))) {
        this.cubes[i].rot.y += dir * Math.PI / this.speed;
      }
      if (Math.abs(this.cubes[i].rot.y) > Math.PI / 2) {
        endPoint = true;
      }
    }
    if (endPoint) {
      clearInterval(this.animationInterval);
      this.animationInterval = -1;
      for (let i = 0; i < 27; i++) {
        if (index.includes(Math.round(this.cubes[i].pos.y))) {
          this.cubes[i].rot.y = 0;
          this.cubes[i].rotateY(dir);
        }
      }
      this.turnService.finishAnimation();
    }
  }

  animateZ(index: number[], dir: number) {
    let endPoint = false;
    for (let i = 0; i < 27; i++) {
      if (index.includes(Math.round(this.cubes[i].pos.z))) {
        this.cubes[i].rot.z += dir * Math.PI / this.speed;
      }
      if (Math.abs(this.cubes[i].rot.z) > Math.PI / 2) {
        endPoint = true;
      }
    }
    if (endPoint) {
      clearInterval(this.animationInterval);
      this.animationInterval = -1;
      for (let i = 0; i < 27; i++) {
        if (index.includes(Math.round(this.cubes[i].pos.z))) {
          this.cubes[i].rot.z = 0;
          this.cubes[i].rotateZ(dir);
        }
      }
      this.turnService.finishAnimation();
    }
  }
}
