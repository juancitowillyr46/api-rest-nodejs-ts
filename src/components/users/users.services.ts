import userModel from './users.model';

class UserService {

    public async userAll() {
        let finAllUser = await userModel.find({});
        return {
            isValid: true,
            data: finAllUser,
            message: `User List successfull!`,
            statusCode: 200
        }
    }

    public async userGetById(id: any) {
        let findUser = await userModel.findById(id);
        return {
            isValid: true,
            data: findUser,
            message: `User Get successfull!`,
            statusCode: 200
        }
    }

    public async userPost(body: any) {
        const newUser = new userModel(body);
        return await newUser.save().then(user => {
            return {
                isValid: true, 
                data: user, 
                message: `User created successfull!`,
                statusCode: 200
            };
        }).catch(err => {
            return {
                isValid: false, 
                data: null, 
                message: `Error to created User successfull!`,
                statusCode: 400
            };
        });
    }

    public async userPut(id: any, body: any) {
        let findModel = await userModel.findByIdAndUpdate(id, body);    
        return {
            isValid: true, 
            data: findModel, 
            message: `User Updated successfull!`,
            statusCode: 200
        };;
    }

    public async userDelete(id: any) {
        let findModel = await userModel.findByIdAndRemove(id);
        return {
            isValid: true, 
            data: null, 
            message: `User Delete successfull!`,
            statusCode: 200
        };;
    }

}

export default new UserService();