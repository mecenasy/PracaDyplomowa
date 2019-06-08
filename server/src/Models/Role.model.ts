import * as mongouse from 'mongoose';

export interface IUserRole extends mongouse.Document {
  role: string;
}

const userRoleSchema = new mongouse.Schema({
  role: String,
});

const userRoleModel = mongouse.model<IUserRole>('userRole', userRoleSchema);

export default userRoleModel;
