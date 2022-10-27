import { gql } from '@apollo/client';

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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      description
      username
      canidateCount
      canidates {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_CANDIDATE = gql`
  mutation addCandidate($jobId: ID!, $username: String!) {
    addCandidate(jobId: $jobId, username: $username) {
      _id
      canidateCount
      canidates {
        _id
        email
        username
      }
    }
  }
`;
