import Link from "next/link";

export default function services() {
    return (
      <>
        <h1>All Services</h1>
        <p><Link href="/services/web-dev">Web Development</Link></p>
        <p><Link href="/services/mobile-development">Mobile Development</Link></p>
        <p><Link href="/services/ui-ux-design">UI/UX Design</Link></p>
        <p><Link href="/services/digital-marketing">Digital Marketing</Link></p>
        <p><Link href="/services/e-commerce-solutions">E-commerce Solutions</Link></p>
      </>
    );
  }
  