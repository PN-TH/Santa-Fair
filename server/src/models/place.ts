export class Place {
    id!: number;
    name!: string;
    note!: number;
  
    constructor(input: Place) {
      Object.assign(this, input);
  }
  }