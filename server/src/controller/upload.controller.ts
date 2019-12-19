import express, { Router, Request, Response, Application } from 'express';

export const UploadController = (app: Application) => {

    const router: Router = express.Router();
  

//get





//post
router.post('/', async (req : Request, res : Response) => {
    try {
        if(!req) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
           
            let photo: any = req;
            console.log(photo)
            
           
            photo.mv('./uploads/' + photo.name);
            
   
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: photo.name,
                    mimetype: photo.mimetype,
                    size: photo.size
                }
            }); 
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.use('/upload', router);

}