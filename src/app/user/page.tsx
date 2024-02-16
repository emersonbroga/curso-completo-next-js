import { PageWrapper } from "@/components";
import { getSession } from "@/helpers/session";
import { redirect } from "next/navigation";

export default async function User() {
  const user = await getSession();
  if (!user) redirect("/auth/sign-in");

  return (
    <PageWrapper>
      <div className="container mx-auto my-6">
        <div className="w-2/3">
          <h1 className="text-3xl my-6">Account</h1>
          <div className="my-6 flex flex-col">
            {user.name ? <p className="my-2 ">{String(user.name)}</p> : null}
            {user.email ? <p className="my-2 ">{String(user.email)}</p> : null}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
