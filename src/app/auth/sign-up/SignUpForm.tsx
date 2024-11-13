"use client";

import { SubmitButton, TextInput } from "@/components";
import { useActionState } from "react";
import { handleSignUpForm, type SignUpState } from "./actions";

const initialState: SignUpState = {
  isValid: undefined,
  errors: { name: undefined, email: undefined, password: undefined, passwordConfirmation: undefined },
};

export default function SignUpForm() {
  const [state, formAction] = useActionState(handleSignUpForm, initialState);

  return (
    <form action={formAction}>
      <TextInput name="name" label="Name" error={state.errors.name} />
      <TextInput name="email" label="E-mail" inputMode="email" error={state.errors.email} />
      <TextInput name="password" label="Password" type="password" error={state.errors.password} />
      <TextInput
        name="passwordConfirmation"
        label="Password confirmation"
        type="password"
        error={state.errors.passwordConfirmation}
      />

      <SubmitButton label="Create account" />
    </form>
  );
}
