import { gql } from '@apollo/client';

export const QUERY_JOBS = gql`
  query jobs($username: String) {
    jobs(username: $username) {
      _id
      active
      description
      createdAt
      username
      grade
      school
      subject
      dates
      applicationCount
    }
  }
`;

export const QUERY_JOB = gql`
  query job($id: ID!) {
    job(_id: $id) {
      _id
      active
      grade
      subject
      dates
      description
      createdAt
      username
      school
      applicationCount
      applications {
        _id
        username
        email
        about
        degree
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      phone
      about
      degree
      friendCount
      school
      jobs {
        _id
        description
        dates
        grade
        subject
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      phone
      admin
      about
      degree
      school
      profileURL
      jobs {
        _id
        active
        description
        dates
        grade
        subject
        school
        createdAt
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      admin
    }
  }
`;
