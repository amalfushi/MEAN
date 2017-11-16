export class Player {
    constructor(
        public name:String = "",
        public position: String = "",
        public status = {
            game1:"Undecided",
            game2:"Undecided",
            game3:"Undecided"
        },
        public _id: String,
    ){}
}
