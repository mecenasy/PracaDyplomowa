import * as mongouse from 'mongoose';

export interface IUser extends mongouse.Document {
  user: string;
  password: string;
  role: any;
  personId: any;
  isDefaultPassword?: boolean;
}

const userSchema = new mongouse.Schema({
  user: String,
  password: String,
  personId: {
    type: mongouse.Schema.Types.ObjectId,
    ref: 'person',
  },
  role: {
    type: mongouse.Schema.Types.ObjectId,
    ref: 'userRole',
  },
  isDefaultPassword: Boolean,
});

const userModel = mongouse.model<IUser>('user', userSchema);

export default userModel;
