import { PrismaClient } from "@prisma/client";

import articles from "../../src/data/articles.json";
import games from "../../src/data/games.json";
import { slugify } from "../../src/helpers/slugfiy";

const prisma = new PrismaClient();

const isDev = process.env.NODE_ENV === "development";

async function main() {
  console.log("DB seed");
  if (!isDev) {
    throw new Error("NODE_ENV is not a development environment.");
  }

  const [, , ...args] = process.argv;
  const truncate = !!args.find((arg) => arg === "-truncate");
  const articles = !!args.find((arg) => arg === "articles");
  const games = !!args.find((arg) => arg === "games");

  if (truncate) {
    if (articles) await truncateArticles();
    if (games) await truncateGamesAndGenres();
  }

  if (articles) await seedArticles();
  if (games) await seedGamesAndGenres();
}

async function seedArticles() {
  console.log("Seeding articles");
  for (let article of articles) {
    const record = await prisma.article.create({
      data: {
        title: article.title,
        slug: slugify(article.title),
        excerpt: article.excerpt,
        content: article.content,
        image: article.image,
        publishedAt: new Date(article.publish_date),
      },
    });

    console.log("*** created article", record.id, record.title);
  }
}

async function seedGamesAndGenres() {
  console.log("Seeding games and genres");
  for (let game of games) {
    const genres = game.genre.map((title) => {
      const slug = slugify(title);
      return {
        genre: {
          connectOrCreate: {
            where: { slug },
            create: { title, slug },
          },
        },
      };
    });

    const record = await prisma.games.create({
      data: {
        title: game.title,
        slug: game.slug,
        year: game.year,
        image: game.fileName,
        link: game.link || "#",
        platform: "Nintendo 64",
        genres: {
          create: genres,
        },
      },
    });

    console.log("*** created game", record.id, record.title);
  }
}

async function truncateArticles() {
  console.log("Truncating articles");
  await prisma.article.deleteMany();
  await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Article");
}

async function truncateGamesAndGenres() {
  console.log("Truncating games and genres");
  await prisma.gameGenre.deleteMany();
  await prisma.games.deleteMany();
  await prisma.genres.deleteMany();
  await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "GameGenre");
  await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Games");
  await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Genres");
  return;
}

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.log(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

export const truncate = async () => {
  console.log("Truncating Articles");
  await truncateArticles();
  console.log("Truncating Games and Genres");
  await truncateGamesAndGenres();
};

export const seed = async () => {
  console.log("Seeding Articles");
  await seedArticles();
  console.log("Seeding Games and Genres");
  await seedGamesAndGenres();
};
