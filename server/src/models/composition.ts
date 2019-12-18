export class Composition {
    id!: number;
    name!: string;
    note!: number;
  
    constructor(input: Composition) {
      Object.assign(this, input);
  }
  }