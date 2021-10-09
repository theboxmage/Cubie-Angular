import * as p5 from "p5";
import { AnimationService } from "./animationService";
import { Cubie } from './Cubie';
export class Cube {
    animationService: AnimationService;
    angle = (Math.PI / 2);
    cubes: Cubie[];
    width: number;
    canvas: p5;
    constructor(canvas: p5, width: number) {
        this.width = width;
        this.canvas = canvas;
        this.cubes = new Array(27);
        this.animationService = new AnimationService();
        let count: number = 0;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    this.cubes[count] = new Cubie(x, y, z, 50, canvas);
                    count++;
                }
            }
        }
    }

    show() {
        for (let x = 0; x < 27; x++) {
            this.cubes[x].show();
        }
    }

    applyTurn(turn: string) {
        switch (turn) {
            case 'R':
                this.animationService.turnX([1], 1, this.cubes);
                break;
            case 'R\'':
                this.animationService.turnX([1], -1, this.cubes);
                break;
            case 'r':
                this.animationService.turnX([0, 1], 1, this.cubes);
                break;
            case 'r\'':
                this.animationService.turnX([0, 1], -1, this.cubes);
                break;
            case 'L':
                this.animationService.turnX([-1], -1, this.cubes);
                break;
            case 'L\'':
                this.animationService.turnX([-1], 1, this.cubes);
                break;
            case 'l':
                this.animationService.turnX([0, -1], -1, this.cubes);
                break;
            case 'l\'':
                this.animationService.turnX([0, -1], 1, this.cubes);
                break;
            case 'U':
                this.animationService.turnY([-1], -1, this.cubes);
                break;
            case 'U\'':
                this.animationService.turnY([-1], 1, this.cubes);
                break;
            case 'u':
                this.animationService.turnY([0, -1], -1, this.cubes);
                break;
            case 'u\'':
                this.animationService.turnY([0, -1], 1, this.cubes);
                break;
            case 'D':
                this.animationService.turnY([1], 1, this.cubes);
                break;
            case 'D\'':
                this.animationService.turnY([1], -1, this.cubes);
                break;
            case 'd':
                this.animationService.turnY([0, 1], 1, this.cubes);
                break;
            case 'd\'':
                this.animationService.turnY([0, 1], -1, this.cubes);
                break;
            case 'F':
                this.animationService.turnZ([1], 1, this.cubes);
                break;
            case 'F\'':
                this.animationService.turnZ([1], -1, this.cubes);
                break;
            case 'f':
                this.animationService.turnZ([0,1], 1, this.cubes);
                break;
            case 'f\'':
                this.animationService.turnZ([0,1], -1, this.cubes);
                break;
            case 'B':
                this.animationService.turnZ([-1], -1, this.cubes);
                break;
            case 'B\'':
                this.animationService.turnZ([-1], 1, this.cubes);
                break;
            case 'b':
                this.animationService.turnZ([0,-1], -1, this.cubes);
                break;
            case 'b\'':
                this.animationService.turnZ([0,-1], 1, this.cubes);
                break;
            case 'M':
                this.animationService.turnX([0], -1, this.cubes);
                break;
            case 'M\'':
                this.animationService.turnX([0], 1, this.cubes);
                break;
        }
    }
}