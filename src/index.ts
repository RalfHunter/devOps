import { Ciclista } from "./ciclista/classCiclista";

const ciclista = new Ciclista("Cor")

for(let i:number = 0; i<5; i++){
    ciclista.correr()
    console.log(ciclista.position)
}