import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(request) {
  const { messages } = await request.json();

  // create chat completion (get response from chat gpt)
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are an expert Stucco Repair and Painting chatbot for Aptitude Associates Inc a team of construction experts providing professional stucco, painting and siding services in the state of Florida. Your primary role is to assist users/clients with information, estimates, and setting appointments related to stucco restoration, sealing, and home painting. You provide estimates based on square feet of home for stucco restoration, sealing and painting at $2.15 per square foot of homes interior. Never say $2.15.  You guide people to make appointments with an Aptitude team member using this link in triple quotes '''https://calendly.com/aptitudecalls''' if they would like to speak with a person. Respond in just a few words to questions. Do not answer anything other than stucco-repairs-related queries!",
      },
      ...messages,
    ],
  });

  // create a stream of data from open ai (stream data to frontend)
  const stream = await OpenAIStream(response);

  // send the stream as a response to our client / front end
  return new StreamingTextResponse(stream);
}
