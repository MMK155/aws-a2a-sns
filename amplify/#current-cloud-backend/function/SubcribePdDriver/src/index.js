// Import the AWS SDK
const AWS = require("aws-sdk");

//Env Variables
const dd_driver_table_name_dev = process.env.DD_DRIVER_TABLE_NAME_DEV;

// Set the AWS SDK configuration to use the specified region
AWS.config.update({ region: `${process.env.REGION}` });

// Create a DynamoDB DocumentClient for the target region
const app2_region = new AWS.DynamoDB.DocumentClient({
  region: "ap-southeast-1",
});

// Define an asynchronous function to add a driver to the DynamoDB table
const AddDriverInDD = async (data) => {
  const dataToJsObject = JSON.parse(data);

  // Prepare parameters for putting a driver item into the DynamoDB table
  let params;
  const dynamoDbTableparams = {
    TableName: `${dd_driver_table_name_dev}`,
    Item: {
      id: dataToJsObject.id,
      name: dataToJsObject.name,
      assigned_zone: dataToJsObject.assigned_zone,
    },
  };

  try {
    if (data) {
      params = dynamoDbTableparams;
      // Put the driver item into the DynamoDB table
      if (dynamoDbTableparams) {
        const response = await app2_region.put(params).promise();
        return response;
      }
    }
  } catch (error) {
    throw error;
  }
};
exports.handler = async (event) => {
  const { Records } = event;
  for (let i = 0; i < Records.length; i++) {
    const document = Records[i].Sns.Message;
    if (document) {
      const plainObject = JSON.parse(JSON.stringify(document));
      await AddDriverInDD(plainObject);
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify("Driver subscribe successfully"),
  };
};
