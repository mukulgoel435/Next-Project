export default async function Comments({ params }) {
    console.log(await params);
    const paramsObj= await params;
    const { blogID} = paramsObj;
  return (
    <>
      <h1>Comments</h1>
      <p>All Comments on {blogID} page</p>
    </>
  );
}
