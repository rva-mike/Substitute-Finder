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
  mutation addUser($username: String!, $password: String!, $email: String!, $school: String, $admin: Boolean) {
    addUser(username: $username, password: $password, email: $email, school: $school, admin: $admin) {
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
  mutation addJob($active: Boolean!, $subject: String!, $grade: String!, $dates: String!, $school: String!, $description: String!) {
    addJob(active: $active, subject: $subject, grade: $grade, dates: $dates, school: $school, description: $description) {
      _id
      active
      description
      subject
      grade
      dates
      school
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
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
        about
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
`

export const ADD_REACTION = gql`
  mutation addReaction($jobId: ID!, $reactionBody: String!) {
    addReaction(jobId: $jobId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;
