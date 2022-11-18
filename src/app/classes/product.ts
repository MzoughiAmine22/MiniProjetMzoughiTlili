import { Charac } from "./charac";
import { Commentaires } from "./commentaires";
export class Produit 
{
    constructor
    (
        public id:number,
        public libelle:string,
        public price:number,
        public description:string,
        public category:string,
        public platform:string,
        public availability:boolean,
        public photo:string,
        public manufacture:string,
        public comments:Commentaires[],
        public characteristics:Charac[]
    ){}
}