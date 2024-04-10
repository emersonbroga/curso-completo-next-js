import { PageWrapper } from "@/components";
import { seed, turncate } from "../../../../../prisma/seed/seed";

export default async function SeedPage() {
  console.log("SEED");
  try {
    let ranTruncate = false;
    let ranSeed = false;
    if (process.env.DB_TRUNCATE) {
      await turncate();
      ranTruncate = true;
    }

    if (process.env.DB_SEED) {
      await seed();
      ranSeed = true;
    }

    return (
      <PageWrapper>
        <div className="bg-slate-800 py-8">
          <div className="container text-slate-100 px-4">
            <p>
              Truncate: {ranTruncate ? "true" : "false"} Seed: {ranSeed ? "true" : "false"}
            </p>
            <p className="my-4 text-red-500 font-semibold">Delete DB_TRUNCATE and DB_SEED from your .env file.</p>
          </div>
        </div>
      </PageWrapper>
    );
  } catch (_e) {
    return (
      <PageWrapper>
        <div className="bg-slate-800 py-8">
          <div className="container text-red-500">Something went wrong</div>
        </div>
      </PageWrapper>
    );
  }
}
