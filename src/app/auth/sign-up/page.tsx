import { PageWrapper } from "@/components";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export default async function SignUpPage() {
  return (
    <PageWrapper>
      <div className="flex-center w-full min-h-screen">
        <div className="w-1/3 mx-auto border border-slate-800 rounded-lg p-8">
          <h1 className="text-3xl">Create your account</h1>
          <SignUpForm />
          <div className="pt-8">
            <Link href={"/auth/sign-up"}>Already have an account? Sign in</Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
