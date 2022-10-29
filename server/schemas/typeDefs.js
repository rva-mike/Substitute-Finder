const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    degree: String
    about: String
    school: String
    admin: Boolean
    friendCount: Int
    jobCount: Int
    jobs: [Job]
    friends: [User]
  }

  type Job {
    _id: ID
    subject: String
    dates: String
    grade: String
    description: String
    createdAt: String
    username: String
    reactionCount: Int
    applicationCount: Int
    reactions: [Reaction]
    applications: [User]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    jobs(username: String): [Job]
    job(_id: ID!): Job
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, school: String, admin: Boolean): Auth
    addJob(subject: String!, grade: String!, dates: String! description: String!): Job
    addReaction(jobId: ID!, reactionBody: String!): Job
    addFriend(friendId: ID!): User
    updateMe(email: String, degree: String, about: String): User
  }
`;

module.exports = typeDefs;
