/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLine = /* GraphQL */ `
  query GetLine($id: ID!) {
    getLine(id: $id) {
      id
      name
      description
      Asssets {
        items {
          id
          name
          description
          positionX
          positionY
          status
          createdAt
          updatedAt
          lineAsssetsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLines = /* GraphQL */ `
  query ListLines(
    $filter: ModelLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        Asssets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAsset = /* GraphQL */ `
  query GetAsset($id: ID!) {
    getAsset(id: $id) {
      id
      name
      description
      positionX
      positionY
      status
      line {
        id
        name
        description
        Asssets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      lineAsssetsId
    }
  }
`;
export const listAssets = /* GraphQL */ `
  query ListAssets(
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        positionX
        positionY
        status
        line {
          id
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        lineAsssetsId
      }
      nextToken
    }
  }
`;
