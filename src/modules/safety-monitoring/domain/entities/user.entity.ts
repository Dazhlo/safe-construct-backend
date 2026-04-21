

export class User{
    constructor(
        public readonly id : string,
        public email : string,
        public passwordHash : string,
        public role : 'admin' |'supervisor'|'worker',
        public readonly workerId : number
    ){}


    

}