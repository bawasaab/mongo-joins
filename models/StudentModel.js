const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const ROLES = ['STUDENT', 'TEACHER', 'ADMIN'];
const GENDER = ['MALE', 'FEMALE'];
const STATUSES = ['PENDING', 'ACTIVE', 'BLOCK', 'DELETED'];
const dated = new Date();

const StudentSchema = new Schema({
    enquiry_id: { type: ObjectId, default: null },

	first_name: { type: String },
	last_name: { type: String, default: null },
    profilePic: { type: String, default: null },
        
    email: { type: String, unique: true },
    phone: { type: String, unique: true, default: null },

    password: { type: String, default: null },
    
    gender: { type: String, enum: GENDER, default: 'MALE' },
    role: { type: String, enum: ROLES, default: 'STUDENT' },
    status: { type: String, enum: STATUSES, default: 'PENDING' },
    
    deletedAt: { type: Date, default: null },
    createdAt: { type: Date, default: dated },
    updatedAt: { type: Date, default: dated },
});

module.exports = mongoose.model('Student', StudentSchema);