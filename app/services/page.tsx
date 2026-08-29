import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_URL, services } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Vintage Watch Services | C. Royce Watch Co.",
  description: "Buy, sell, trade, consign, or source vintage watches with collector-focused guidance in McAllen and across the Rio Grande Valley.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "ItemList", name: "C. Royce Watch Co. services", itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, url: `${SITE_URL}/services/${service.slug}`, name: service.name })) };
  return <>
    <SiteHeader />
    <main className="authority-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="authority-hero"><p className="eyebrow">Vintage watch services · McAllen, Texas</p><h1>Collect with<br/><em>confidence.</em></h1><p>Collector-focused help for buying, selling, trading, consigning, and sourcing vintage watches throughout the Rio Grande Valley.</p></header>
      <section className="authority-section"><div className="section-label"><span>01</span> Explore our services</div><div className="authority-card-grid">{services.map((service, index) => <a className="authority-card" href={`/services/${service.slug}`} key={service.slug}><span>0{index + 1}</span><h2>{service.name}</h2><p>{service.description}</p><strong>Learn more →</strong></a>)}</div></section>
      <section className="authority-cta"><p className="eyebrow">Start a conversation</p><h2>Have a watch—or a watch in mind?</h2><p>Tell us what you own, what you are looking for, or where you are in your collecting journey.</p><a className="button button-gold" href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">Message C. Royce</a></section>
    </main>
    <SiteFooter />
  </>;
}
