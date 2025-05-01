import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { blogID } = await params;
    return {
        title: `Blog ${blogID}`,
    }; 
}

export default async function Blog({ params }) {
    const { blogID } = await params;
    if(!/^\d+$/.test(blogID)){
      notFound();
    }
  return (
    <>
      <h1>Blog</h1>
      <p>Blog {blogID}</p>
    </>
  );
}
