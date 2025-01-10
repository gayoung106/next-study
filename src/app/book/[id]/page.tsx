export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log(params);
  const { id } = await params;
  return <div></div>;
}
