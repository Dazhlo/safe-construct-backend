export class Incident {

    private constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly occuredAt: Date,
        public readonly workerId : string,
        private isSolved: boolean

    ){}

    public resolve(): void {
    this.isSolved = true;
  }
  
  public getResolved(){
    return this.resolve;
  }
}