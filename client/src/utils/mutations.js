import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $password: String!
    $email: String!
    $school: String
    $admin: Boolean
  ) {
    addUser(
      username: $username
      password: $password
      email: $email
      school: $school
      admin: $admin
    ) {
      token
      user {
        _id
        email
        username
        school
        admin
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob(
    $active: Boolean!
    $subject: String!
    $grade: String!
    $dates: String!
    $school: String!
    $description: String!
  ) {
    addJob(
      active: $active
      subject: $subject
      grade: $grade
      dates: $dates
      school: $school
      description: $description
    ) {
      _id
      active
      description
      subject
      grade
      dates
      school
      createdAt
      username
    }
  }
`;

export const ADD_APPLICATION = gql`
  mutation addApplication($jobId: ID!) {
    addApplication(jobId: $jobId) {
      _id
      applicationCount
      applications {
        _id
        username
        email
        phone
        degree
      }
    }
  }
`;

export const DEACTIVATE_JOB = gql`
  mutation deactivateJob($jobId: ID!, $active: Boolean!) {
    deactivateJob(jobId: $jobId, active: $active) {
      _id
      active
    }
  }
`;

export const UPDATE_ME = gql`
  mutation updateMe(
    $email: String
    $phone: String
    $degree: Boolean
    $about: String
  ) {
    updateMe(email: $email, phone: $phone, degree: $degree, about: $about) {
      _id
      username
      email
      phone
      degree
      about
      admin
      jobs {
        _id
        active
        description
        dates
        grade
        subject
        createdAt
      }
    }
  }
`;
