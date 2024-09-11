export default function MyPortfolioEvent({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <article>
      <h1>イベント:{id}</h1>
    </article>
  );
}
