import { PageWrapper } from "@/components";
import { getArticleImage } from "@/helpers/articles";
import ArticleService from "@/services/Articles";
import { type Params } from "@/types";
import Image from "next/image";

type ArticleDetailPageProps = { params: Params };

export default async function ArticleDetailPage(props: ArticleDetailPageProps) {
  const params = await props.params;

  const slug = params.slug;
  const article = await ArticleService.getArticleBySlug(slug);

  if (!article) {
    return null;
  }

  return (
    <PageWrapper>
      <div className="container mx-auto my-6">
        <div className="w-2/3">
          <h1 className="text-3xl my-6">{article.title}</h1>
          <Image
            className="my-6 h-full w-full object-cover rounded-lg"
            src={getArticleImage(article.image)}
            alt={article.title}
            width={600}
            height={400}
          />
          <div className="my-6 flex flex-col">
            <p className="my-2 p-2 bg-slate-700 rounded">{article.excerpt}</p>
            <p className="my-2">{article.content}</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
