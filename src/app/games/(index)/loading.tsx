import { PageWrapper } from "@/components";
import { getIntArray } from "@/helpers/math";

export default async function GamesLoading() {
  const placeholders = getIntArray(1, 12);

  return (
    <PageWrapper>
      <div className="container mx-auto my-6 animate-pulse">
        <h1 className="text-3xl my-6">
          <div className="bg-slate-600 w-1/6 h-9 rounded-lg" />
        </h1>
        <div className="grid grid-cols-4 gap-x-4 gap-y-12">
          {placeholders.map((v) => {
            return (
              <div key={v} className="flex-center flex-col relative overflow-hidden w-[372px] h-[312px]">
                <div className="h-full w-full bg-slate-600" />
                <p className="pt-2 pb-2 px-2 w-full">
                  <span className="bg-slate-600 w-full h-6 rounded-lg" />
                </p>
              </div>
            );
          })}
        </div>
        <div className="my-8">
          <div className="bg-slate-600 w-1/6 h-10 rounded-lg" />
        </div>
      </div>
    </PageWrapper>
  );
}
