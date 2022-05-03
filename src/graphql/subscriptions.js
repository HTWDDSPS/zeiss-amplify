/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLine = /* GraphQL */ `
  subscription OnCreateLine {
    onCreateLine {
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
export const onUpdateLine = /* GraphQL */ `
  subscription OnUpdateLine {
    onUpdateLine {
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
export const onDeleteLine = /* GraphQL */ `
  subscription OnDeleteLine {
    onDeleteLine {
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
export const onCreateAsset = /* GraphQL */ `
  subscription OnCreateAsset {
    onCreateAsset {
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
export const onUpdateAsset = /* GraphQL */ `
  subscription OnUpdateAsset {
    onUpdateAsset {
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
export const onDeleteAsset = /* GraphQL */ `
  subscription OnDeleteAsset {
    onDeleteAsset {
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
