import { PostsController } from './controller/posts.controller';
import { PlacesController } from './controller/places.controller';

import express from 'express';

import loaders from './loaders';


async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différent loader
    await loaders(app);

    // Ajout des différentes route de votre application
    PostsController(app);
    PlacesController(app)


    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server  is running'));
  }

startServer();
