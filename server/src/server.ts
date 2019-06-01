import App from './App';
import { User } from './Controllers/User';
import { Person } from './Controllers/Person';

const app = App.getInstance();
app.setController(new User());
app.setController(new Person());

app.initializeControllers();
app.listen();
