const { AuthenticationError } = require('apollo-server-express');
const { User, Job } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('jobs')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('jobs')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('jobs');
    },
    jobs: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Job.find(params)
      .populate('applications')
      .sort({ createdAt: -1 });
    },
    job: async (parent, { _id }) => {
      return Job.findOne({ _id })
      .populate('applications');
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addJob: async (parent, args, context) => {
      if (context.user) {
        const job = await Job.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { jobs: job._id } },
          { new: true }
        );

        return job;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addApplication: async(parent, {jobId}, context) => {
      if (context.user) {
        const user = await User.findOne({username: context.user.username});
        
        console.log(user);
        const updatedJob = await Job.findOneAndUpdate(
          {_id: jobId},
          { $addToSet: {applications: {_id: user._id, username: user.username}}},
          {new: true}
        ).populate('applications');

        return updatedJob;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    updateMe: async (parent, {email, phone, degree, about}, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$set: {email: email, phone: phone, degree: degree, about: about}},
          {new: true}
        )
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deactivateJob: async(parent, {jobId, active}, context) => {
      if (context.user) {
        const updatedJob = await Job.findOneAndUpdate(
          {_id: jobId},
          {$set: {active: active}},
          {new: true}
        )
        return updatedJob;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;