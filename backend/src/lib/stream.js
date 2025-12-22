import { StreamChat } from "stream-chat";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) console.error("Stream API key or Secret is missing");

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userdata) => {
  try {
    await streamClient.upsertUsers([userdata]);
    return userdata;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};
