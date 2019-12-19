import { ReviewsController } from './controller/reviews.controller';
import { CategoriesController } from './controller/categories.controller';
import { PostsController } from './controller/posts.controller';
import { PlacesController } from './controller/places.controller';
import { CompositionsController } from './controller/compositions.controller';
import { ArticlesController } from './controller/articles.controller';

import express from 'express';
//import fileUpload from 'express-fileupload'

import loaders from './loaders';



async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différent loader
    await loaders(app);

    // Ajout des différentes route de votre application
    ReviewsController(app);
    CategoriesController(app);
    PostsController(app);
    PlacesController(app);
    CompositionsController(app);
    ArticlesController(app);



    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server  is running'));
  }

startServer();
