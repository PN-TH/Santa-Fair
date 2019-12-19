import { Composition } from './../models/composition';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class CompositionsRepository {

    private static instance: CompositionsRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'composition';

    static getInstance() {
        if (!this.instance) {
            this.instance = new CompositionsRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    findAll(): Promise<Composition[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((post: any) => new Composition(post));
          });
    }

    /**
     * Make a query to the database to retrieve one post by its id in parameter. 
     * Return the post found in a promise.
     * @param id post id
     */
    findById(id: number): Promise<Composition> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Composition(results[0]));
    }


    /**
     * Make a query to the database to insert a new post and return the created post in a promise.
     * @param post post to create
     */
    insert(composition: Composition) {
      return this.connection.query(
        `INSERT INTO ${this.table} (name, note) VALUES (?,?)`,
        [composition.name, composition.note]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    /**
     * Make a query to the database to update an existing post and return the updated post in a promise.
     * @param post post to update
     */
    update(composition: Composition) {
      return this.connection.query(
        `UPDATE ${this.table} SET name = ?, note = ? WHERE id = ?`,
        [composition.name, composition.note, composition.id]
      ).then(() => {
        return this.findById(composition.id);
      });
    }

    /**
     * Make a query to the database to delete an existing post and return an empry promise
     * @param id post id to delete
     */
    delete(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
