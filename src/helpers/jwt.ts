import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;
const secretKey = new TextEncoder().encode(JWT_SECRET);

export const encrypt = async (payload: any) => {
  const result = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 hour from now")
    .sign(secretKey);

  return result;
};

export const decrypt = async (value: string) => {
  const { payload } = await jwtVerify(value, secretKey, { algorithms: ["HS256"] });
  return payload;
};
