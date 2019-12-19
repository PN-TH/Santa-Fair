import { Article } from './../models/article';
import { ArticlesService } from './../services/articles.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const ArticlesController = (app: Application) => {

    const router: Router = express.Router();
    const articlesService = ArticlesService.getInstance();

    /**
     * Return all posts in JSON
     */
    router.get('/', (req: Request, res: Response) => {
        articlesService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
          console.log(err);
        })
    });

    router.get('/search', (req: Request, res: Response) => {
      const name = req.query.name;
      articlesService.getSearch(name).then(results => {
          res.send(results);
      })
      .catch(err => {
        console.log(err);
      })
  });

    /**
     * Return only one post in JSON relative to its id
     */
    router.get('/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      articlesService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Create a new post from a JSON body and return the created post in JSON.
     */
    router.post('/', (req: Request, res: Response) => {
      const article: Article = req.body; // Automatically transform in a Post object

      articlesService.create(article).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Update a post relative to its id and return the updated post in JSON.
     */
    router.put('/:id', (req: Request, res: Response) => {
      const article: Article = req.body; // req.params.id is automatically set into the body

      articlesService.update(article).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Delete a post relative its id.
     */
    router.delete('/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);

      articlesService.delete(id).then(result => {
            res.send();
        })
        .catch(err => {
          console.log(err);
        })
    });

    app.use('/articles', router);
};
