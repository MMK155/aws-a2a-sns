import { API, graphqlOperation } from "aws-amplify";
import {
  createPdDriver,
  updatePdDriver,
  deletePdDriver,
} from "../../../graphql/mutations";
import { getPdDriver, listPdDrivers } from "../../../graphql/queries";

const GLOBAL_AUTH_MODE = "AMAZON_COGNITO_USER_POOLS"; // Update the authMode accordingly

export const createPdDriverApi = async (data) => {
  try {
    const response = await API.graphql({
      query: createPdDriver,
      variables: {
        input: data,
      },
    });

    if (response.data) {
      console.log("PdDriver created successfully", response.data);
      return response.data.createPdDriver;
    }
  } catch (e) {
    console.error("Error creating PdDriver", e);
    throw e;
  }
};

export const updatePdDriverAPI = async (input, condition) => {
  try {
    const response = await API.graphql({
      query: updatePdDriver,
      variables: {
        input,
        condition,
      },
      authMode: GLOBAL_AUTH_MODE,
    });

    if (response.data) {
      console.log("PdDriver updated successfully", response.data);
      return response.data.updatePdDriver;
    }
  } catch (e) {
    console.error("Error updating PdDriver", e);
    throw e;
  }
};

export const deletePdDriverAPI = async (input, condition) => {
  try {
    const response = await API.graphql({
      query: deletePdDriver,
      variables: {
        input,
        condition,
      },
      authMode: GLOBAL_AUTH_MODE,
    });

    if (response.data) {
      console.log("PdDriver deleted successfully", response.data);
      return response.data.deletePdDriver;
    }
  } catch (e) {
    console.error("Error deleting PdDriver", e);
    throw e;
  }
};

export const getPdDriverAPI = async (id) => {
  try {
    const response = await API.graphql({
      query: getPdDriver,
      variables: { id },
      authMode: GLOBAL_AUTH_MODE,
    });

    if (response.data) {
      console.log("PdDriver fetched successfully", response.data);
      return response.data.getPdDriver;
    }
  } catch (e) {
    console.error("Error fetching PdDriver", e);
    throw e;
  }
};

// export const listPdDriversAPI = async (filter, limit, nextToken) => {
//   try {
//     const response = await API.graphql({
//       query: listPdDrivers,
//       variables: {
//         filter,
//         limit,
//         nextToken,
//       },
//     });

//     if (response.data) {
//       console.log("PdDrivers listed successfully", response.data);
//       return response.data.listPdDrivers;
//     }
//   } catch (e) {
//     console.error("Error listing PdDrivers", e);
//     throw e;
//   }
// };

export const getPdDrivers = async () => {
  try {
    const response = await API.graphql(graphqlOperation(listPdDrivers));

    if (response.data) {
      console.log("listComputer fetched successfully", response.data);
      return response.data;
    }
  } catch (e) {
    console.log("Error in fetching Computer", e);
  }
};
