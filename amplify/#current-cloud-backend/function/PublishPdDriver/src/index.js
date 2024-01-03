const AWS = require("aws-sdk");

const sns = new AWS.SNS();
//Env Variables
const sns_topic_arn_dev = process.env.TOPIC_ARN_DEV;
exports.handler = async (event) => {
  // Directly use the event data
  const driverData = event;

  try {
    // Extract the Records array from the event object
    const { Records } = event;
    for (let i = 0; i < Records.length; i++) {
      const document = Records[i].dynamodb.NewImage;

      // Convert the DynamoDB document to a JavaScript object
      const convertedDocumentToJSObject =
        AWS.DynamoDB.Converter.unmarshall(document);

      // Extract the driver ID from the converted JavaScript object
      const id = convertedDocumentToJSObject.id;

      await sns
        .publish({
          Message: JSON.stringify(convertedDocumentToJSObject),
          TopicArn: `${sns_topic_arn_dev}`,
        })
        .promise();

      console.log("Driver published successfully");
      return {
        statusCode: 200,
        body: JSON.stringify("Driver published successfully"),
      };
    }

    // Publish the data to the SNS topic
  } catch (err) {
    return {
      error: err,
    };
  }
};
