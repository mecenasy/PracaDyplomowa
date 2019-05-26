import * as ex from 'express';

const app: ex.Application = ex();

app.get('/', (req: ex.Request, res: ex.Response) => {
   res.send('Hello world dupa maryna ');
});

app.listen(3001, () => {
   console.log(`App listening on the port 3000`);
});
