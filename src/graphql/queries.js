/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPdDriver = /* GraphQL */ `
  query GetPdDriver($id: ID!) {
    getPdDriver(id: $id) {
      id
      name
      assigned_zone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPdDrivers = /* GraphQL */ `
  query ListPdDrivers(
    $filter: ModelPdDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPdDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        assigned_zone
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
