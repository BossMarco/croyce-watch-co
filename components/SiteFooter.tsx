import Image from "next/image";

export function SiteFooter() {
  return <footer className="site-footer">
    <a className="wordmark" href="/" aria-label="C. Royce Watch Co. home"><Image className="brand-mark" src="/croyce-logo-mark.webp" width={54} height={54} alt=""/><span>C. ROYCE <em>WATCH CO.</em></span></a>
    <p>Vintage watches in McAllen, Texas.</p>
    <a href="/services">Services</a>
    <a href="/areas-served">RGV Areas</a>
    <a href="https://www.facebook.com/Croycewatchco" target="_blank" rel="noreferrer">Facebook</a>
    <a href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">Instagram</a>
  </footer>;
}
