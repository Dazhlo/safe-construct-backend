
export class Alert{

    constructor(
        public readonly id: number,
        public readonly incidentId:number,
        public readonly channel:string,
        public readonly sendAt:Date,
        public readonly recivedAt:Date,
        public readonly resolvedAt : Date,
        public readonly comment:string,
    ){}
}