/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPdDriver = /* GraphQL */ `
  mutation CreatePdDriver(
    $input: CreatePdDriverInput!
    $condition: ModelPdDriverConditionInput
  ) {
    createPdDriver(input: $input, condition: $condition) {
      id
      name
      assigned_zone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePdDriver = /* GraphQL */ `
  mutation UpdatePdDriver(
    $input: UpdatePdDriverInput!
    $condition: ModelPdDriverConditionInput
  ) {
    updatePdDriver(input: $input, condition: $condition) {
      id
      name
      assigned_zone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePdDriver = /* GraphQL */ `
  mutation DeletePdDriver(
    $input: DeletePdDriverInput!
    $condition: ModelPdDriverConditionInput
  ) {
    deletePdDriver(input: $input, condition: $condition) {
      id
      name
      assigned_zone
      createdAt
      updatedAt
      __typename
    }
  }
`;
