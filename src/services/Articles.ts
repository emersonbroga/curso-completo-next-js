import Article from "@/libs/database/Articles";

const HOME_LATEST_COUNT = 4;

const sleep = async () => new Promise((r) => setTimeout(r, Math.random() * 10000));

const ArticleService = {
  getArticles: async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    const data = await Article.get({ limit, offset });
    const total = await Article.count({});
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

  getHomeArticles: async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit + HOME_LATEST_COUNT;
    const orderBy = { publishedAt: "desc" };
    const data = await Article.get({ orderBy, limit, offset });
    const total = await Article.count({});
    const totalPages = Math.ceil((total - HOME_LATEST_COUNT) / limit);

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
  getHomeLatestArticles: async () => {
    // sleep
    sleep();

    const page = 1;
    const limit = HOME_LATEST_COUNT;
    const offset = 0;
    const orderBy = { publishedAt: "desc" };
    const data = await Article.get({ orderBy, limit, offset });
    const total = await Article.count({});
    const totalPages = Math.ceil((total - HOME_LATEST_COUNT) / limit);
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

  getArticleBySlug: async (slug: string) => {
    return Article.getOne({ where: { slug } });
  },
};

export default ArticleService;
