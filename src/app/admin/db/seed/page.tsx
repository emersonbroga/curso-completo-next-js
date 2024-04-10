import { PageWrapper } from "@/components";
import { seed, truncate } from "../../../../../prisma/seed/seed";

export default async function SeedPage() {
  try {
    let ranTruncate = false;
    let ranSeed = false;

    if (process.env.DB_TRUNCATE) {
      await truncate();
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
              Truncate: {ranTruncate ? "YES" : "NO"} Seed: {ranSeed ? "YES" : "NO"}
            </p>
            <p className="my-4 text-red-500 font-semibold">Delete DB_TRUNCATE and DB_SEED from your .env file.</p>
          </div>
        </div>
      </PageWrapper>
    );
  } catch (e) {
    console.log("SeedPage", e);
    return (
      <PageWrapper>
        <div className="bg-slate-800 py-8">
          <div className="container text-slate-100 px-4">
            <p className="my-4 text-red-500 font-semibold">Something went Wrong</p>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
