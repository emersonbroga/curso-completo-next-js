import { PageWrapper } from "@/components";
import Link from "next/link";
import SignInForm from "./SignInForm";

export default async function SignInPage() {
  return (
    <PageWrapper>
      <div className="flex-center w-full min-h-screen">
        <div className="w-1/3 mx-auto border border-slate-800 rounded-lg p-8">
          <h1 className="text-3xl">Log into your account</h1>
          <SignInForm />

          <div className="pt-8">
            <Link href={"/auth/sign-up"}>Don&apos;t have an account? Sign up</Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
