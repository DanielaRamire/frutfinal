export class Products{
  id!:number;
  price!:number;
  name!:string;
  favorite:boolean = false;
  tags?:string[];
  imageUrl!:string;
  productTime!:string;
  origins!:string[];
}