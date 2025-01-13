export default async function Page({ params }: { params: { id: string } }) {
  const id = (await params.id) || "";
  return <div>Book ID: {id}</div>;
}
