//class workers 

export class worker{
    constructor(
        public readonly id : string,
        public name :string,
        public position: string,
        public status : 'active'| 'inactive' | 'injured',
        private lastHeaRate?: number,

    )   {} 

    public updateHeartRate(bpn:number):void{
        if (bpn<= 0) throw new Error ('Frecuencia cardiaca no valida');
        this.lastHeaRate = bpn;
    }

    public isAtRisk():boolean{
        return true
    }

    

}