export default function MyPortfolioTechArticle({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <article>
      <h1>記事:{id}</h1>
    </article>
  );
}
