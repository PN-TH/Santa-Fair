import { CategoriesRepository } from './../repository/categories.repository';
import { Category } from './../models/category';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class CategoriesService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: CategoriesService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new CategoriesService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: CategoriesRepository;
    private constructor() {
        this.repository = CategoriesRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Category[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    getById(id: number): Promise<Category> {
        return this.repository.findById(id);
    }

    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    create(category: any): Promise<Category> {
      return this.repository.insert(category);
    }

    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param post post to update
     */
    update(category: any): Promise<Category> {
      return this.repository.update(category);
    }

    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}
