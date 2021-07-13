/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJobscheduler = /* GraphQL */ `
  mutation CreateJobscheduler(
    $input: CreateJobschedulerInput!
    $condition: ModeljobschedulerConditionInput
  ) {
    createJobscheduler(input: $input, condition: $condition) {
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
export const updateJobscheduler = /* GraphQL */ `
  mutation UpdateJobscheduler(
    $input: UpdateJobschedulerInput!
    $condition: ModeljobschedulerConditionInput
  ) {
    updateJobscheduler(input: $input, condition: $condition) {
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
export const deleteJobscheduler = /* GraphQL */ `
  mutation DeleteJobscheduler(
    $input: DeleteJobschedulerInput!
    $condition: ModeljobschedulerConditionInput
  ) {
    deleteJobscheduler(input: $input, condition: $condition) {
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
