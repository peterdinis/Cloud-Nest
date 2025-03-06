"use server";

import { Account, Client, Databases} from "node-appwrite";
import { cookies } from "next/headers";

export const createSessionClient = async () => {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as unknown as string)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_ID as unknown as string)

    const session = (await cookies()).get("appwrite-session");

    if (!session || !session.value) throw new Error("No session");

    client.setSession(session.value);

    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        },
    };
}