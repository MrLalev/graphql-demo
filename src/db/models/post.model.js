import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    title: { type: Schema.Types.String, required: true },
    content: { type: Schema.Types.String, required: true },
    created_by: { type: Schema.Types.String, required: true },
} , { collation: { locale: 'en_US', strength: 2 }, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} });

export default mongoose.model('post', PostSchema);