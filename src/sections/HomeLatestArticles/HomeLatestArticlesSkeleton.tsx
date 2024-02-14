import { getIntArray } from "@/helpers/math";

export default async function HomeLatestArticlesSkeleton() {
  const placeholders = getIntArray(1, 4);
  return (
    <div className="container mx-auto my-10 animate-pulse">
      <h2 className="text-3xl my-6 underline">
        <div className="bg-slate-600 w-1/6 h-9 rounded-lg" />
      </h2>

      <div className="grid grid-cols-4 gap-4 h-[35vh]">
        {placeholders.map((v) => {
          return (
            <div key={v} className="flex-center relative overflow-hidden">
              <div className="h-full w-full bg-slate-600" />
              <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full">
                <span className="bg-slate-600/50 w-full h-6 rounded-lg block" />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
