import { PageWrapper, SubmitButton, TextInput } from "@/components";

export default async function SignUpPage() {
  return (
    <PageWrapper>
      <div className="flex-center w-full min-h-screen">
        <div className="w-1/3 mx-auto border border-slate-800 rounded-lg p-8">
          <h1 className="text-3xl">Create your account</h1>
          <form>
            <TextInput name="name" label="Name" />
            <TextInput name="email" label="E-mail" inputMode="email" />
            <TextInput name="password" label="Password" type="password" />
            <TextInput name="passwordConfirmation" label="Password confirmation" type="password" />

            <SubmitButton label="Create account" />
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
