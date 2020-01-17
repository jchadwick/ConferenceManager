import { APIGatewayProxyHandler } from "aws-lambda";
import { Event } from "../../../../shared/models";

const Events: Event[] = [
  { id: "1234", name: "TechBash 2018" },
  { id: "12345", name: "TechBash 2019" },
  { id: "121111", name: "TechBash 2020" }
];

export const organizerEventsHandler: APIGatewayProxyHandler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(Events)
  };
};
