import * as mongouse from 'mongoose';

interface IUser extends mongouse.Document{
  user: string;
  password: string;
  isDefaultPassword?: boolean;
}

const userSchema = new mongouse.Schema({
  user: String,
  password: String,
  isDefaultPassword: Boolean,
});

const userModel = mongouse.model<IUser>('user', userSchema);

export default userModel;
