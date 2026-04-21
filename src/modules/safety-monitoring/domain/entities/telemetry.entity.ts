import { Biometrics } from "../value-objects/biometrics.vo";

export class Telemetry{

   constructor(
    public readonly id : string,
    public readonly workerId: string,
    public readonly heaRate: Biometrics,
    public readonly accelerationX : number,
    public readonly accelerationY : number,
    public readonly accelerationZ : number,
    public readonly timestamp : number,
   ){}
}