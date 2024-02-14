import { Article, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const MAX_RECORDS = 50;
const MIN_OFFSET = 0;

const Article = {
  getOne: async ({ where }: { where: Pick<Article, "id"> | Pick<Article, "slug"> }) => {
    const record = await prisma.article.findUnique({ where });
    return record;
  },
  get: async ({ where = {}, orderBy = {}, limit = 10, offset = 0 }) => {
    const take = Math.min(limit, MAX_RECORDS);
    const skip = Math.max(offset, MIN_OFFSET);

    const records = await prisma.article.findMany({
      where,
      orderBy,
      take,
      skip,
    });
    return records;
  },
  count: async ({ where = {} }) => {
    const count = await prisma.article.count({
      where,
    });
    return count;
  },
};

export default Article;
