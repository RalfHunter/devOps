
class ciclista{
    position:number = 0
    constructor(cor:String){
        this.position = 0
    }

    correr(addPosition: number) {
        this.position += addPosition
    }
}