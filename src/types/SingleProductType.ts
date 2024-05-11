export interface SingleProduct{
    id:string,
    name:string,
    price:number,
    company:string,
    colors:string[],
    description:string,
    category: string,
    featured: boolean,
    shipping: boolean,
    stock:number,
    reviews:number,
    stars:number,
    image:Image[],
}

export interface Image{
             id:string,
         width:number,
         height:number,
         url:string,
         filename:string,
         size:string,
         type:string
}
