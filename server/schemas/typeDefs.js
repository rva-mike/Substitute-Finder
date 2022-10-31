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
    jobCount: Int
    jobs: [Job]
  }

  type Job {
    _id: ID
    active: Boolean
    subject: String
    dates: String
    grade: String
    description: String
    school: String
    createdAt: String
    username: String
    applicationCount: Int
    applications: [User]
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
    addJob(active: Boolean!, subject: String!, grade: String!, dates: String! school: String!  description: String!): Job
    addApplication(jobId: ID!): Job
    updateMe(email: String, degree: String, about: String): User
    deactivateJob(jobId: ID!, active: Boolean!): Job
  }
`;

module.exports = typeDefs;
