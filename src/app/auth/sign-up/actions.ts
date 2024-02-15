"use server";

import UsersService from "@/services/Users";

export type SignUpError = {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
};

export type SignUpState = {
  isValid?: boolean;
  errors: SignUpError;
};

const validateSignUpForm = (formData: FormData) => {
  const errors: SignUpError = {
    name: undefined,
    email: undefined,
    password: undefined,
    passwordConfirmation: undefined,
  };

  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const passwordConfirmation = String(formData.get("passwordConfirmation"));

  try {
    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    }

    if (!email.includes("@")) {
      errors.email = "Email is not valid";
    }

    if (password.length < 10) {
      errors.password = "Password should have 10 chars";
    }

    if (!password || password !== passwordConfirmation) {
      errors.passwordConfirmation = "Password confirmation doesn't match";
    }
    const isValid = Object.values(errors).every((v) => v === undefined);
    return { isValid, errors };
  } catch (error) {
    return { isValid: false, errors };
  }
};

export const handleSignUpForm = async (prevState: any, formData: FormData) => {
  const validation = validateSignUpForm(formData);
  if (!validation.isValid) {
    return { ...prevState, ...validation };
  }

  const data = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const record = await UsersService.signUp(data);

  return { ...prevState, isValid: true };
};
