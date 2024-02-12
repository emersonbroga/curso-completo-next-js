import Article from "@/libs/database/Articles";

const HOME_LATEST_COUNT = 4;

const ArticleService = {
  getArticles: async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    const data = await Article.get({ limit, offset });
    const total = await Article.count({});
    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
      },
    };
  },

  getHomeArticles: async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit + HOME_LATEST_COUNT;
    const orderBy = { publishedAt: "desc" };
    const data = await Article.get({ orderBy, limit, offset });
    const total = await Article.count({});
    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
      },
    };
  },
  getHomeLatestArticles: async () => {
    const page = 1;
    const limit = HOME_LATEST_COUNT;
    const offset = 0;
    const orderBy = { publishedAt: "desc" };
    const data = await Article.get({ orderBy, limit, offset });
    const total = await Article.count({});
    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
      },
    };
  },
};

export default ArticleService;
