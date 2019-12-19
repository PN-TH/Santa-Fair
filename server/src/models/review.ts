export class Review {
    id!: number;
    commentaire!: string;
    note!: number;
    //article_id!: number;
  
    constructor(input: Review) {
      Object.assign(this, input);
  }
}