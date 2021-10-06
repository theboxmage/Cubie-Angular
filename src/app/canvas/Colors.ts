export class Colors {
    xrow: Face[];
    yrow: Face[];
    zrow: Face[];
    
    constructor(){
        this.xrow = [new Face ("#0F0"), new Face ("#F00"), new Face ("#00F"), new Face ("#FA0")];
        this.yrow = [this.xrow[0], new Face ("#FF0"), this.xrow[2], new Face ("#FFF")];
        this.zrow = [this.yrow[3], this.xrow[1], this.yrow[1], this.xrow[3]];
    }

    rotateX()
    {
        let temp = this.xrow[0].color;
        this.xrow[0].color = this.xrow[1].color;
        this.xrow[1].color = this.xrow[2].color;
        this.xrow[2].color = this.xrow[3].color;
        this.xrow[3].color = temp;   
    }

    rotateXPrime()
    {
        let temp = this.xrow[0].color;
        this.xrow[0].color = this.xrow[3].color;
        this.xrow[3].color = this.xrow[2].color;
        this.xrow[2].color = this.xrow[1].color;
        this.xrow[1].color = temp;      
    }

    rotateY()
    {
        let temp = this.yrow[0].color;
        this.yrow[0].color = this.yrow[1].color;
        this.yrow[1].color = this.yrow[2].color;
        this.yrow[2].color = this.yrow[3].color;
        this.yrow[3].color = temp;       
    }

    rotateYPrime()
    {
        let temp = this.yrow[0].color;
        this.yrow[0].color = this.yrow[3].color;
        this.yrow[3].color = this.yrow[2].color;
        this.yrow[2].color = this.yrow[1].color;
        this.yrow[1].color = temp;     
    }

    rotateZ()
    {
        let temp = this.zrow[0].color;
        this.zrow[0].color = this.zrow[3].color;
        this.zrow[3].color = this.zrow[2].color;
        this.zrow[2].color = this.zrow[1].color;
        this.zrow[1].color = temp; 
    }

    rotateZPrime()
    {
        let temp = this.zrow[0].color;
        this.zrow[0].color = this.zrow[1].color;
        this.zrow[1].color = this.zrow[2].color;
        this.zrow[2].color = this.zrow[3].color;
        this.zrow[3].color = temp; 
    }
}

class Face {
    color;

    constructor(color: string){
        this.color = color;
    }
}