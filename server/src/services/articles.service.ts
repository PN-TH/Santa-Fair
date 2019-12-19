import { ArticlesRepository } from '../repository/articles.repository';
import { Article } from 'src/models/article';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les article doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class ArticlesService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: ArticlesService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new ArticlesService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: ArticlesRepository;
    private constructor() {
        this.repository = ArticlesRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of articles.
     */
    getAll(): Promise<Article[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the article relative to the id in parameter.
     * @param id article id
     */
    getById(id: number): Promise<Article> {
        return this.repository.findById(id);
    }

    getSearch(name: string): Promise<Article[]>{
        return this.repository.findBySearch(name);
    }

    /**
     * Create a new article and return a promise which contains the created article.
     * @param article article to create
     */
    create(article: any): Promise<Article> {
      return this.repository.insert(article);
    }

    /**
     * Update the article in parameter and return a promise which contains the updated article.
     * @param article article to update
     */
    update(article: any): Promise<Article> {
      return this.repository.update(article);
    }

    /**
     * Delete the article related to the id in parameter. Return an empty promise.
     * @param id article id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}
