import Games from "@/libs/database/Games";

const GamesService = {
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
};

export default GamesService;
