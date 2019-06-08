import * as mongouse from 'mongoose';

export interface IPerson extends mongouse.Document {
  userId?: any;
  personId?: any;
  album: number;
  direction: string;
  department: string;
  specialty: string;
  year: string;
  semester: string;
  group: string;
  name: string;
  surname: string;
  email: string;
  phone: number;
  photo: string;
  role?: string;
}

const personSchema = new mongouse.Schema({
  userId: {
    type: mongouse.Schema.Types.ObjectId,
    ref: 'user',
  },
  album: Number,
  direction: String,
  department: String,
  specialty: String,
  year: String,
  semester: String,
  group: String,
  name: String,
  surname: String,
  email: String,
  phone: Number,
  photo: String,
});

const personModel = mongouse.model<IPerson>('person', personSchema);

export default personModel;
