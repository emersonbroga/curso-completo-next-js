import bcrypt from "bcrypt";

const saltRounds = 12;

export const createHash = async (password: string) => {
  try {
    if (!password) return null;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    return null;
  }
};
export const verifyHash = async (password: string, hash: string) => {
  try {
    const isValid = bcrypt.compare(password, hash);
    return isValid;
  } catch (error) {
    return false;
  }
};
