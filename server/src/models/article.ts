export class Article {
    id!: number;
    image!: string;
    name!: string;
    energy!: boolean;
    piece!: boolean;
    packaging!: boolean;
    note_SF!: number;
    category_id!: number;
    place_id!: number;
  
    constructor(input: Article) {
      Object.assign(this, input);
  }
  }