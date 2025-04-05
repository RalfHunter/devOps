
export class Ciclista{
    position:number = 0
    constructor(cor:String){
        this.position = 0
    }

    correr() {
        let number:number = Math.random() * (2+1 - 1) + 1;
        number = Math.floor(number)
        this.position += number
    }
}