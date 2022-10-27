const {Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const jobSchema = new Schema (
    {
        status: {
            type: String,
            // required: true
        },
        create_user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            // required: true
        },
        start_datetime: {
            type: Date,
            // required: true,
            get: timestamp => dateFormat(timestamp)
        },
        end_datetime: {
            type: Date,
            // required: true,
            get: timestamp => dateFormat(timestamp)
        },
        subject: {
            type: String,
            // required: true
        },
        grade_level: {
            type: String,
            // required: true
        },
        description: {
            type: String,
            required: true,
        },
        school: {
            type: Schema.Types.ObjectId,
            ref: 'School',
            // required: true
        },
        username: {
            type: String,
            required: true
        },
        canidates: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true,
        },
      }
);

jobSchema.virtual('canidateCount').get(function () {
    return this.canidates.length;
});

const Job = model('Job', jobSchema);

module.exports = Job;