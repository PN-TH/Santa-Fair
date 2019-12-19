import { ReviewsRepository } from '../repository/reviews.repository';
import { Review } from 'src/models/review';


export class ReviewsService {


    private static instance: ReviewsService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new ReviewsService();
        }
        return this.instance;
    }


    private repository: ReviewsRepository;
    private constructor() {
        this.repository = ReviewsRepository.getInstance();
    }


    getAll(): Promise<Review[]> {
        return this.repository.findAll();
    }


    getById(id: number): Promise<Review> {
        return this.repository.findById(id);
    }


    create(post: any): Promise<Review> {
      return this.repository.insert(post);
    }


    update(review: any): Promise<Review> {
      return this.repository.update(review);
    }


    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}
