export default async function Comment({ params }) {
    const paramsObj= await params;
    const { commentID, blogID} = paramsObj;
  return (
    <>
      <h2>Comment No. <i>{commentID}</i> on Blog No. <i>{blogID}</i></h2>
    </>
  );
}