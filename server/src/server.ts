import { User } from './Controllers/User';
import App from './App';

const app = App.getInstance();
app.setController(new User());

app.initializeControllers();
app.listen();
