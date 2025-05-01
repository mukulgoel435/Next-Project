import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Technical Agency</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/services">Services</Link></p>
      <p><Link href="/blogs">Blog</Link></p>
      <p><Link href="/files">Files</Link></p>
    </>
  );
}
