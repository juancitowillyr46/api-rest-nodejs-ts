import express from 'express';
import userService from './users.services';

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
        this.router.delete(this.path+ '/:id', this.userDelete);
    }

    async userGetAll(req: express.Request, res: express.Response) {
        let operationResult = await userService.userAll();
        if(operationResult) {
            return res.status(operationResult.statusCode).send({data: operationResult.data});
        }
    }

    async userGetById(req: express.Request, res: express.Response) {
        let operationResult = await userService.userGetById(req.params.id);
        if(operationResult) {
            return res.status(operationResult.statusCode).send({data: operationResult.data});
        }
    }

    async userPost(req: express.Request, res: express.Response) {
        let operationResult = await userService.userPost(req.body);
        if(operationResult) {
            return res.status(operationResult.statusCode).send({data: operationResult.data});
        }
    }

    async userPut(req: express.Request, res: express.Response) {
        let operationResult = await userService.userPut(req.params.id, req.body);
        if(operationResult) {
            return res.status(operationResult.statusCode).send({data: operationResult.data});
        }
    }

    async userDelete(req: express.Request, res: express.Response) {
        let operationResult = await userService.userDelete(req.params.id);
        if(operationResult) {
            return res.status(operationResult.statusCode).send({data: operationResult.data});
        }
    }

}

export default UsersController;