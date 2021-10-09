import { Cubie } from './Cubie';
import { TurnService } from '../turn.service';
let animationInterval: number = -1;
export class AnimationService {

    constructor(private cubes: Cubie[], private turnService: TurnService) {
        //stub?
    }

    turnX(index = [1], dir = 1) {
        animationInterval = setInterval(this.animateX.bind(this), 20, index, dir)
    }

    turnY(index = [1], dir = 1) {
        animationInterval = setInterval(this.animateY.bind(this), 20, index, dir)
    }

    turnZ(index = [1], dir = 1) {
        animationInterval = setInterval(this.animateZ.bind(this), 20, index, dir)
    }

    animateX(index: number[], dir: number) {
        let endPoint = false;
        for (let i = 0; i < 27; i++) {
            if (index.includes(Math.round(this.cubes[i].pos.x))) {
                this.cubes[i].rot.x += dir * Math.PI / 30;
            }
            if (Math.abs(this.cubes[i].rot.x) > Math.PI / 2) {
                endPoint = true;
            }
        }
        if (endPoint) {
            clearInterval(animationInterval);
            animationInterval = -1;
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
                this.cubes[i].rot.y += dir * Math.PI / 30;
            }
            if (Math.abs(this.cubes[i].rot.y) > Math.PI / 2) {
                endPoint = true;
            }
        }
        if (endPoint) {
            clearInterval(animationInterval);
            animationInterval = -1;
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
                this.cubes[i].rot.z += dir * Math.PI / 30;
            }
            if (Math.abs(this.cubes[i].rot.z) > Math.PI / 2) {
                endPoint = true;
            }
        }
        if (endPoint) {
            clearInterval(animationInterval);
            animationInterval = -1;
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