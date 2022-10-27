import { gql } from '@apollo/client';

export const QUERY_JOBS = gql`
  query jobs($username: String) {
    jobs(username: $username) {
      _id
      description
      username
      candidateCount
      candidates {
        _id
        email
        username
      }
    }
  }
`;

export const QUERY_JOB = gql`
query jobs($username: String) {
  jobs(username: $username) {
    _id
    description
    username
    candidateCount
    candidates {
      _id
      email
      username
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
      jobs {
        _id
        desicription
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
      jobs {
        _id
        description
        candidateCount
        candidates {
          _id
          email
          username
        }
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
    }
  }
`;
