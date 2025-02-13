import {Client} from "appwrite"

const client = new Client();
client.setProject(process.env.APPWRITE_ID as unknown as string);

export default client