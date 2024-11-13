"use server";

import { z } from "zod";

import { encrypt } from "@/helpers/jwt";
import { createSession } from "@/helpers/session";
import { getZodErrors } from "@/helpers/zod";
import UsersService from "@/services/Users";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type SignInError = {
  email?: string;
  password?: string;
};

export type SignUpState = {
  isValid?: boolean;
  errors: SignInError;
};

const validateSignUpForm = (formData: FormData) => {
  const userSchema = z.object({
    email: z.string().email("Email invalid"),
    password: z.string().min(10, "Password must have at least 10 chars"),
  });
  try {
    userSchema.parse(Object.fromEntries(formData));
    return { isValid: true, errors: {} };
  } catch (error: unknown) {
    const zodErrors = getZodErrors(error);
    return { isValid: false, errors: zodErrors || {} };
  }
};

export const handleSignInForm = async (prevState: any, formData: FormData) => {
  const validation = validateSignUpForm(formData);
  if (!validation.isValid) {
    return { ...prevState, ...validation };
  }

  const data = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const user = await UsersService.signIn(data);
  if (!user) return { isValid: false, errors: {} };

  const payload = {
    uuid: user.uuid,
    name: user.name,
    email: user.email,
  };
  const jwt = await encrypt(payload);
  await createSession(jwt);

  revalidatePath("/");
  return redirect("/");
};
