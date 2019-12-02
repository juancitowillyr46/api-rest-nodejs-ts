import express from 'express';

class HomeController {
    public path = '/';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path, this.getAll);
    }

    getAll(req: express.Request, res: express.Response) {
        res.send({data: `Api RESTful with TypeScript`});
    }
}

export default HomeController;