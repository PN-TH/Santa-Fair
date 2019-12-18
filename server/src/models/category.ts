export class Category {
    id!: number;
    name!: string;
  
    constructor(input: Category) {
      Object.assign(this, input);
  }
  }