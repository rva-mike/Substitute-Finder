const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    degree: String
    about: String
    friendCount: Int
    jobs: [Job]
    friends: [User]
  }

  type Job {
    _id: ID
    jobText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
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
    addUser(username: String!, email: String!, password: String!): Auth
    addJob(jobText: String!): Job
    addReaction(jobId: ID!, reactionBody: String!): Job
    addFriend(friendId: ID!): User
    updateMe(degree: String, about: String): User
  }
`;

module.exports = typeDefs;
