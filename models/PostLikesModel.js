const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const STATUSES = ['OPEN', 'CLOSE', 'DELETED'];
const LIKES = ['LIKE', 'UNLIKE'];
const dated = new Date();

const PostLikesSchema = new Schema({
    student_id: { type: ObjectId, default: null },
    post_id: { type: ObjectId, default: null },
    liked: { type: String, enum: LIKES },

	status: { type: String, enum: STATUSES, default: 'OPEN' },
    
    deletedAt: { type: Date, default: null },
    createdAt: { type: Date, default: dated },
    updatedAt: { type: Date, default: dated },
});

module.exports = mongoose.model('PostLikes', PostLikesSchema);