// Coordenadas GPS
export class Coordinates {
  constructor(public readonly lat: number, public readonly lng: number) {
    if (lat < -90 || lat > 90) throw new Error('Latitud inválida');
  }
}