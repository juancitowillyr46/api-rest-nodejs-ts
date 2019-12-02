import express from 'express';

class UsersController {
    public path = '/users';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path, this.userGetAll);
        this.router.get(this.path + '/:id', this.userGetById);
        this.router.post(this.path, this.userPost);
        this.router.put(this.path+ '/:id', this.userPut);
        this.router.delete(this.path, this.userDelete);
    }

    userGetAll(req: express.Request, res: express.Response) {
        return res.send({data: `GET All component Users`});
    }

    userGetById(req: express.Request, res: express.Response) {
        return res.send({data: `GET By Id component Users`});
    }

    userPost(req: express.Request, res: express.Response) {
        return res.send({data: `POST component Users`});
    }

    userPut(req: express.Request, res: express.Response) {
        return res.send({data: `PUT component Users`});
    }

    userDelete(req: express.Request, res: express.Response) {
        return res.send({data: `DELETE component Users`});
    }

}

export default UsersController;