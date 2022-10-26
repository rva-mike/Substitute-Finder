const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type School {
        _id: ID
        name: String
        street: String
        city: String
        state: String
        postal_code: String
    }
    type Job {
        _id: ID
        status: String
        create_user: User
        start_datetime: String
        end_datetime: String
        subject: String
        grade_level: String
        description: String
        school: School
        submitted_applications: [User]
    }
    type User {
        _id: ID
        username: String
        first_name: String
        mobile_phone: String
        email: String
        type: String
        admin_school: School
        locations_worked: [School]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(username: String!): User
        submitted_applications(jobId: ID!): [User]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;
