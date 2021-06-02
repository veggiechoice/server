import mongoose from 'mongoose';
import { PointSchema } from './utils/PointSchema';

const PlacesSchema = new mongoose.Schema({
  name: String,
  productIds: [String],
  description: String,
  address: String,
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

export default mongoose.model('Places', PlacesSchema);
