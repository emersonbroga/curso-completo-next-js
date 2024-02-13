import { PageWrapper, Pagination } from "@/components";
import { getGameImage } from "@/helpers/games";
import GamesService from "@/services/Games";
import Image from "next/image";

export default async function Games({ searchParams }: { searchParams?: { page?: string; limit?: string } }) {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 12;
  const games = await GamesService.getGamesList(currentPage, limit);

  return (
    <PageWrapper>
      <div className="container mx-auto my-6">
        <h1 className="text-3xl my-6">Games</h1>
        <div className="grid grid-cols-4 gap-x-4 gap-y-12">
          {games.data.map((game) => {
            return (
              <div key={game.slug} className="flex-center flex-col relative overflow-hidden">
                <div className="h-full w-full">
                  <Image
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    src={getGameImage(game.image)}
                    alt={game.title}
                    width={600}
                    height={400}
                  />
                </div>
                <p className="pt-2 pb-2 px-2 w-full">{game.title}</p>
              </div>
            );
          })}
        </div>
        <div className="my-8">
          <Pagination currentPage={games.metadata.page} totalPages={games.metadata.totalPages} />
        </div>
      </div>
    </PageWrapper>
  );
}
