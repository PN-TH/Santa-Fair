import { Article } from './../models/article';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class ArticlesRepository {

    private static instance: ArticlesRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'article';

    static getInstance() {
        if (!this.instance) {
            this.instance = new ArticlesRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all articles and return it in a promise.
     */
    findAll(): Promise<Article[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((article: any) => new Article(article));
          });
    }

    /**
     * Make a query to the database to retrieve one article by its id in parameter. 
     * Return the article found in a promise.
     * @param id article id
     */
    findById(id: number): Promise<Article> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Article(results[0]));
    }

    findBySearch(name: string): Promise<Article[]> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE name LIKE ?`, [`%${name}%`])
          .then((results: any) => {
            return results.map((articles :any) => new Article(articles))
          });
    }

    /**
     * Make a query to the database to insert a new article and return the created article in a promise.
     * @param article article to create
     */
    insert(article: Article) {
      return this.connection.query(
        `INSERT INTO ${this.table} (image, name, energy, piece, packaging, note_SF, category_id, place_id, composition_id) VALUES (?,?,?,?,?,?,?,?,?)`,
        [article.image, article.name, article.energy, article.piece, article.packaging, article.note_SF, article.category_id, article.place_id, article.composition_id]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    /**
     * Make a query to the database to update an existing article and return the updated article in a promise.
     * @param article article to update
     */
    update(article: Article) {
      return this.connection.query(
        `UPDATE ${this.table} SET image = ?, name = ?, energy = ?, piece = ?, packaging = ?, note_SF = ?, category_id = ? , place_id = ?  WHERE id = ?`,
        [article.image, article.name, article.energy, article.piece, article.packaging, article.note_SF, article.category_id, article.place_id, article.id]
      ).then(() => {
        return this.findById(article.id);
      });
    }

    /**
     * Make a query to the database to delete an existing article and return an empry promise
     * @param id article id to delete
     */
    delete(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
