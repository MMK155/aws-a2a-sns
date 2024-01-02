const _ = require("aws-sdk");
const dynamoDB = new _.DynamoDB.DocumentClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

//Env Variables
const pd_driver_table_name_dev = process.env.PD_DRIVER_TABLE_NAME_DEV;
exports.handler = async (event) => {
  // Create a random id for the user
  const randomData = Math.random();
  const randomId = randomData.toString().slice(2);

  try {
    // Parse the request body from JSON
    const requestBody = JSON.parse(event.body);

    // Switch based on the case in the request body
    switch (requestBody.case) {
      case "CREATE_DRIVER":
        // DynamoDB table Params for inserting a new user
        const userParams = {
          TableName: `${pd_driver_table_name_dev}`,
          Item: {
            id: `${randomId}`,
            name: requestBody.name,
            assigned_zone: requestBody.assigned_zone,
          },
        };

        // Put item in DynamoDB
        await dynamoDB.put(userParams).promise();

        // Return a success response
        return {
          statusCode: 201,
          body: JSON.stringify({
            status: "201",
            message: "Driver added to DynamoDB successfully",
          }),
        };

      case "GET_DRIVERS":
        // DynamoDB table Params for retrieving all users
        const paramsForGet = {
          TableName: `${pd_driver_table_name_dev}`,
        };

        // Perform a scan operation to retrieve all drivers from the DynamoDB table
        const getDriversResult = await dynamoDB.scan(paramsForGet).promise();

        // Return the retrieved users in the response
        return {
          statusCode: 200,
          body: JSON.stringify({
            status: "200",
            drivers: getDriversResult.Items,
          }),
        };

      default:
        // Return an error response for unsupported case values
        return {
          statusCode: 400,
          body: JSON.stringify(`Invalid case value: ${requestBody.case}`),
        };
    }
  } catch (error) {
    // Log and return an error response for internal server errors
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
};
