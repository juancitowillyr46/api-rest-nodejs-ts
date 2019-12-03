import express, { Router } from 'express';
import * as bodyParser from 'body-parser';
import db from './config/mongoose';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any[], port: number) {
        this.app = express();
        this.port = port; 
        this.initMiddleware();
        this.initControllers(controllers);
    }

    private initMiddleware(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private initControllers(controllers: any[]) {
        controllers.forEach((controller): any => {
            const router: express.Router = controller.router;
            this.app.use('/api/', router);
        });
        this.app.use('/', (req: express.Request, res: express.Response) => {
            return res.send(`Api RESTful Users`);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
            db.connection();
        });
    }

}

export default App;