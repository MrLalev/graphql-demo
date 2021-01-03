import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const UserSchema = new Schema({
    first_name: { type: Schema.Types.String, required: true },
    last_name: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, unique: true, required: true },
    password: { type: Schema.Types.String, required: true },
    posts: { type: Schema.Types.Array },
} , { collation: { locale: 'en_US', strength: 2 }, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} });

export default mongoose.model('user', UserSchema.plugin(uniqueValidator, { message: 'Error: user with {PATH} {VALUE} already exists.' }));