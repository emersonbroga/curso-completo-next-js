import { decrypt } from "@/helpers/jwt";
import { cookies } from "next/headers";

export const createSession = (payload: string) => {
  const expires = new Date(Date.now() + 60 * 1000);
  cookies().set("session", payload, { expires, httpOnly: true });
};

export const getSession = async () => {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
};
