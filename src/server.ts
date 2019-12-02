import App from './app';
import HomeController from './components/home.controller';
import UsersController from './components/users/users.controller';

const app = new App(
    [
        new HomeController(),
        new UsersController()
    ],
    3001
);

app.listen();