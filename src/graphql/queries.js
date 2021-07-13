/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncJobschedulers = /* GraphQL */ `
  query SyncJobschedulers(
    $filter: ModeljobschedulerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncJobschedulers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        accountname
        accounttype
        accountnumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getJobscheduler = /* GraphQL */ `
  query GetJobscheduler($id: ID!) {
    getJobscheduler(id: $id) {
      id
      accountname
      accounttype
      accountnumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listJobschedulers = /* GraphQL */ `
  query ListJobschedulers(
    $filter: ModeljobschedulerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobschedulers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountname
        accounttype
        accountnumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
