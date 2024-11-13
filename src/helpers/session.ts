import { decrypt, encrypt } from "@/helpers/jwt";
import { cookies } from "next/headers";

const SESSION_NAME = "session";

const generateExpires = () => new Date(Date.now() + 60 * 60 * 1000);

export const createSession = async (payload: string) => {
  const cookieStore = await cookies();
  const expires = generateExpires();
  cookieStore.set(SESSION_NAME, payload, { expires, httpOnly: true });
};

export const getSession = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_NAME)?.value;
  if (!session) return null;
  return await decrypt(session);
};

export const updateSession = async () => {
  const session = await getSession();
  if (!session) return null;
  const expires = generateExpires();
  const jwt = await encrypt({ ...session, expires });

  const updateSession = {
    name: SESSION_NAME,
    value: jwt,
    expires,
    httpOnly: true,
  };

  return updateSession;
};

export const logout = async () => {
  const cookieStore = await cookies();

  // Destroy the session.
  cookieStore.set(SESSION_NAME, "", { expires: new Date(0) });
};
