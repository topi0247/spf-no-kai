export default function MyPortfolioWebApplication({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <article>
      <h1>アプリ:{id}</h1>
    </article>
  );
}
