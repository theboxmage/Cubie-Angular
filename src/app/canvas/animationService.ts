import { Cubie } from './Cubie';
let animationInterval: number = -1;
export class AnimationService{

    constructor(){

    }

    turnX(index = [1], dir = 1, cubes: Cubie[])
    {
        animationInterval = setInterval(this.animateX, 20, index, dir, cubes)
    }

    animateX(index: number[], dir: number, cubes: Cubie[]) {
        let endPoint = false;
        for (let i = 0; i < 27; i++) {
            if (index.includes(Math.round(cubes[i].pos.x))) {
                cubes[i].rot.x += dir * Math.PI / 30;
            }
            if (Math.abs(cubes[i].rot.x) > Math.PI / 2) {
                endPoint = true;
            }
        }
        if (endPoint) {
            clearInterval(animationInterval);
            animationInterval = -1;
            for (let i = 0; i < 27; i++) {
                if (index.includes(Math.round(cubes[i].pos.x))) {
                    cubes[i].rot.x = 0;
                    cubes[i].rotateX(dir);
                }
            }
        }
    }

    turnY(index = [1], dir = 1, cubes: Cubie[])
    {
        animationInterval = setInterval(this.animateY, 20, index, dir, cubes)
    }
    
    animateY(index: number[], dir: number, cubes: Cubie[]) {
        let endPoint = false;
        for (let i = 0; i < 27; i++) {
            if (index.includes(Math.round(cubes[i].pos.y))) {
                cubes[i].rot.y += dir * Math.PI / 30;
            }
            if (Math.abs(cubes[i].rot.y) > Math.PI / 2) {
                endPoint = true;
            }
        }
        if (endPoint) {
            clearInterval(animationInterval);
            animationInterval = -1;
            for (let i = 0; i < 27; i++) {
                if (index.includes(Math.round(cubes[i].pos.y))) {
                    cubes[i].rot.y = 0;
                    cubes[i].rotateY(dir);
                }
            }
        }
    }

    turnZ(index = [1], dir = 1, cubes: Cubie[])
    {
        animationInterval = setInterval(this.animateZ, 20, index, dir, cubes)
    }

    animateZ(index: number[], dir: number, cubes: Cubie[]) {
        let endPoint = false;
        for (let i = 0; i < 27; i++) {
            if (index.includes(Math.round(cubes[i].pos.z))) {
                cubes[i].rot.z += dir * Math.PI / 30;
            }
            if (Math.abs(cubes[i].rot.z) > Math.PI / 2) {
                endPoint = true;
            }
        }
        if (endPoint) {
            clearInterval(animationInterval);
            animationInterval = -1;
            for (let i = 0; i < 27; i++) {
                if (index.includes(Math.round(cubes[i].pos.z))) {
                    cubes[i].rot.z = 0;
                    cubes[i].rotateZ(dir);
                }
            }
        }
    }
}