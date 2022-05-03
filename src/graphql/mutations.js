/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createLine = /* GraphQL */ `
  mutation CreateLine(
    $input: CreateLineInput!
    $condition: ModelLineConditionInput
  ) {
    createLine(input: $input, condition: $condition) {
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
export const updateLine = /* GraphQL */ `
  mutation UpdateLine(
    $input: UpdateLineInput!
    $condition: ModelLineConditionInput
  ) {
    updateLine(input: $input, condition: $condition) {
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
export const deleteLine = /* GraphQL */ `
  mutation DeleteLine(
    $input: DeleteLineInput!
    $condition: ModelLineConditionInput
  ) {
    deleteLine(input: $input, condition: $condition) {
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
export const createAsset = /* GraphQL */ `
  mutation CreateAsset(
    $input: CreateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    createAsset(input: $input, condition: $condition) {
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
export const updateAsset = /* GraphQL */ `
  mutation UpdateAsset(
    $input: UpdateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    updateAsset(input: $input, condition: $condition) {
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
export const deleteAsset = /* GraphQL */ `
  mutation DeleteAsset(
    $input: DeleteAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    deleteAsset(input: $input, condition: $condition) {
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
