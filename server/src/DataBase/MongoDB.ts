import * as mongoose from 'mongoose';

export class ConnectToMongoDB {
  private data: string = 'suszi';
  private server: string = 'localhost:27017';
  constructor() {
    this.connectToDataBase();
  }

  private connectToDataBase() {
    mongoose.connect(`mongodb://${this.server}/${this.data}`);
  }
}
