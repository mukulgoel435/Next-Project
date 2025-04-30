export async function generateMetadata({ params }) {
    const { blogID } = await params;
    return {
        title: `Blog ${blogID}`,
    };
}

export default async function Blog({ params }) {
    const { blogID } = await params;
  return (
    <>
      <h1>Blog</h1>
      <p>Blog {blogID}</p>
    </>
  );
}
