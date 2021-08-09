const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const STATUSES = ['OPEN', 'CLOSE', 'DELETED'];
const dated = new Date();

const PostCommentSchema = new Schema({
    student_id: { type: ObjectId, default: null },
    post_id: { type: ObjectId, default: null },
    parent_comment_id: { type: ObjectId, default: null },
    comment: { type: String },

	status: { type: String, enum: STATUSES, default: 'OPEN' },
    
    deletedAt: { type: Date, default: null },
    createdAt: { type: Date, default: dated },
    updatedAt: { type: Date, default: dated },
});

module.exports = mongoose.model('PostComment', PostCommentSchema);