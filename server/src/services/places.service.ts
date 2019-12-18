import { PlacesRepository } from './../repository/places.repository';
import { Place } from 'src/models/place';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class PlacesService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: PlacesService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new PlacesService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: PlacesRepository;
    private constructor() {
        this.repository = PlacesRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Place[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    getById(id: number): Promise<Place> {
        return this.repository.findById(id);
    }

    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    /* create(post: any): Promise<Place> {
      return this.repository.insert(post);
    } */

    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param post post to update
     */
    /* update(post: any): Promise<Place> {
      return this.repository.update(post);
    }
 */
    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}
