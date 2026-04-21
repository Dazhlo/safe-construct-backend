import { Coordinates } from "../value-objects/coordinates.vo";


export class DangerZone {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly center: Coordinates, 
    public readonly radiusInMeters: number,
    public readonly riskLevel: 'MEDIUM' | 'HIGH' | 'CRITICAL'
  ) {}

}