export class Biometrics {
  constructor(
    public readonly heartRate: number,
    public readonly oxygenLevel: number
  ) {
    if (heartRate < 0 || heartRate > 250) throw new Error('Ritmo cardíaco fuera de rango');
  }
}