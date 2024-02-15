"use server";

import UsersService from "@/services/Users";

export const handleSignUpForm = async (prevState: any, formData: FormData) => {
  console.log("*** handleSignUpForm ", Object.fromEntries(formData));

  const data = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const record = await UsersService.signUp(data);
  console.log("🟨 *** ~ record:", record);

  return {};
};
