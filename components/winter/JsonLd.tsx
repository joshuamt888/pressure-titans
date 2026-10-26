/** Structured data for search: the business as a service, plus the page's FAQ. */
export function JsonLd({ data }: { data: object[] }) {
  return (
    <>
      {data.map((d, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />)}
    </>
  );
}
