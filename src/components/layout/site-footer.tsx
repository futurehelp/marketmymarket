import Image from "next/image";
import { navigation } from "@/lib/site-content";

/** Footer contact details and navigation kept in the same data model as the header. */
export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <Image src="/images/m-logo1.png" width={300} height={35} alt="Market My Market" />
        <p>Thoughtful marketing.<br />A clearer way forward.</p>
      </div>
      <div>
        <span>MARKET MY MARKET</span>
        <p>1930 Abbott St., Unit 402<br />Charlotte, NC 28203</p>
      </div>
      <div>
        <span>EXPLORE</span>
        {navigation.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
      </div>
      <div>
        <span>CONNECT</span>
        <a href="mailto:info@marketmymarket.com">LET&apos;S TALK</a>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
      <div className="copyright">Copyright © 2026 All Rights Reserved. Market My Market.</div>
    </footer>
  );
}
