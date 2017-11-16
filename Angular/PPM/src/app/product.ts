export class Product {
    constructor(
        public id:Number = Math.ceil(Math.random()*300),
        public title:String = "",
        public price:Number = 0,
        public imgUrl: String = null
    ){}
}