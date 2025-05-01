import Link from "next/link";
export const metadata = {
  title: 'Services',
};

export default function services() {
    return (
      <>
        <h1>All Services</h1>
        <p><Link href="/services/web-dev">Web Development</Link></p>
        <p><Link href="/services/mobile-dev">Mobile Development</Link></p>
      </>
    );
  }
  