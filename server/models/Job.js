const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const jobSchema = new Schema(
  {
    description: {
      type: String,
      required: 'You need to leave a job!',
      // minlength: 1,
      maxlength: 280
    },
    subject: {
      type: String,
      required: true
    },
    dates: {
      type: String,
      required: true
    },
    grade: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
    applications: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  }
);

jobSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

jobSchema.virtual('applicationCount').get(function() {
  return this.applications.length;
});

const Job = model('Job', jobSchema);

module.exports = Job;
