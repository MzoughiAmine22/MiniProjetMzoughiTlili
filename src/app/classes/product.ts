import { Commentaires } from "./commentaires";
export class Product 
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
        public releaseDate: Date,
        public manufacture:string,
        public comments:Commentaires[],
    ){}
}