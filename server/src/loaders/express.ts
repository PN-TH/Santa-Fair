
  import bodyParser from 'body-parser';
  import cors from 'cors';
  import { Application } from 'express';
  import fileUpload from 'express-fileupload';
  import morgan from 'morgan';
  import express from 'express';
  import lodash from 'lodash';

  export default async ( app: Application) => {

    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/uploads/',express.static('uploads'));
    app.use(fileUpload({
      createParentPath: true
  }));
    app.use(morgan('dev'));
  
    
  
    // ...More middlewares

    // Return the express app
    
    return app;
  };
