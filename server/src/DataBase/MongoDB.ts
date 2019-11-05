import * as mongoose from 'mongoose';

export class ConnectToMongoDB {
  private data: string = 'suszi'
  private user: string = 'magajda';
  private server: string = 'cluster0-xhno5.mongodb.net';
  private password: string = 'Ma72in42jd2';
  constructor() {
    this.connectToDataBase();
  }

  private connectToDataBase() {
    mongoose.connect(
      `mongodb+srv://${this.user}:${this.password}@${this.server}/${this.data}?retryWrites=true&w=majority`,
      { useNewUrlParser: true },
    );
    // mongoose.connect(`mongodb://${this.server}/${this.data}`, { useNewUrlParser: true });
  }
}
