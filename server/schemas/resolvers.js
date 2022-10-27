const { User, Job, School } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args) => {
            if (context.user) {
                const userData = await User.findOne({})
                .select('-__v -password')
                .populate('admin_school')
                .populate('locations_worked');
    
                return userData;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('admin_school')
            .populate('locations_worked');
        },
        jobs: async (parent, start_datetime) => {
            const params = start_datetime ? {start_datetime} : {};
            return Job.find(params);
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
          
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
                const job = await Job.create({...args, username: context.username})
                return job;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
    
}

module.exports = resolvers;
