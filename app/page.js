import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Technical Agency</h1>
      <Link href="/about">About</Link> <Link href="/services">Services</Link>
    </>
  );
}
