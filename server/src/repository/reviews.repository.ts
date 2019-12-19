import { Review } from './../models/review';
import { MysqlConnection } from '../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class ReviewsRepository {

    private static instance: ReviewsRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'avis';

    static getInstance() {
        if (!this.instance) {
            this.instance = new ReviewsRepository();
        }
        return this.instance;
    }

    private constructor() {
    }


    findAll(): Promise<Review[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((review: any) => new Review(review));
          });
    }


    findById(id: number): Promise<Review> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Review(results[0]));
    }


    // insert(review: Review) {
    //   return this.connection.query(
        
    //     `INSERT INTO ${this.table} (commentaire, note, article_id) VALUES (?,?)`,
    //     [review.commentaire, review.note, review.article_id]
    //   ).then((result: any) => {
    //     return this.findById(result.insertId);
    //   });
    // }


    // update(review: Review) {
    //   return this.connection.query(
    //     `UPDATE ${this.table} SET commentaire = ?, note = ?, article_id = ?, WHERE id = ?`,
    //     [review.commentaire, review.note, review.id, review.article_id]
    //   ).then(() => {
    //     return this.findById(review.id);
    //   });
    // }

    insert(review: Review) {
      return this.connection.query(
        
        `INSERT INTO ${this.table} (commentaire, note) VALUES (?,?)`,
        [review.commentaire, review.note]
      ).then((result: any) => {
        return this.findById(result.insertId);
      });
    }


    update(review: Review) {
      return this.connection.query(
        `UPDATE ${this.table} SET commentaire = ?, note = ? WHERE id = ?`,
        [review.commentaire, review.note, review.id]
      ).then(() => {
        return this.findById(review.id);
      });
    }


    delete(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
