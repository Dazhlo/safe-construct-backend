
export class Device{

    constructor(
        public readonly id : string,
        public readonly workerId: number,
        public type : 'phone' | 'smartwatch'  

    ){}

}