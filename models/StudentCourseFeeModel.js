const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const STATUSES = ['OPEN', 'CLOSE', 'DELETED'];
const dated = new Date();

const StudentCourseFeeSchema = new Schema({
    student_course_id: { type: ObjectId, default: null },

    paid_on: { type: Date, default: dated },
    amount: { type: Date, default: dated },

	status: { type: String, enum: STATUSES, default: 'OPEN' },
    
    deletedAt: { type: Date, default: null },
    createdAt: { type: Date, default: dated },
    updatedAt: { type: Date, default: dated },
});

module.exports = mongoose.model('StudentCourseFee', StudentCourseFeeSchema);