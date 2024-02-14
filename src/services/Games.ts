import { getRandomIntArrayInRange } from "@/helpers/math";
import Games from "@/libs/database/Games";

const GamesService = {
  getGameBySlug: async (slug: string) => {
    return Games.getOne({ where: { slug } });
  },
  getGamesList: async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    const data = await Games.get({ limit, offset });
    const total = await Games.count({});
    const totalPages = Math.ceil(total / limit);
    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
        totalPages,
      },
    };
  },

  getRandomGames: async (limit = 10) => {
    const total = await Games.count({});
    const offset = Math.max(0, Math.floor(Math.random() * total) - limit);

    const ids = getRandomIntArrayInRange(0, total, limit);
    const where = { id: { in: ids } };
    const data = await Games.get({ where, limit });
    const totalPages = Math.ceil(total / limit);

    return {
      data,
      metadata: {
        page: 1,
        limit,
        offset,
        total,
        totalPages,
      },
    };
  },
};

export default GamesService;
