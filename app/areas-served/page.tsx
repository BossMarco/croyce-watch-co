import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { areas, SITE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Vintage Watches Across the Rio Grande Valley",
  description: "C. Royce Watch Co. welcomes vintage watch collectors from McAllen, Mission, Edinburg, Pharr, Weslaco, Harlingen, Brownsville, and Rio Grande City.",
  alternates: { canonical: "/areas-served" },
};

export default function AreasPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "ItemList", name: "Rio Grande Valley areas served by C. Royce Watch Co.", itemListElement: areas.map((area, index) => ({ "@type": "ListItem", position: index + 1, url: `${SITE_URL}/areas-served/${area.slug}`, name: area.city })) };
  return <>
    <SiteHeader />
    <main className="authority-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="authority-hero"><p className="eyebrow">Rio Grande Valley watch collectors</p><h1>Vintage watches,<br/><em>close to home.</em></h1><p>C. Royce Watch Co. is based in McAllen and welcomes collectors and watch owners from across Hidalgo, Cameron, and Starr counties.</p></header>
      <section className="authority-section"><div className="section-label"><span>RGV</span> Communities we serve</div><div className="area-card-grid">{areas.map(area => <a className="area-card" href={`/areas-served/${area.slug}`} key={area.slug}><small>{area.county}</small><h2>{area.city}</h2><p>{area.angle}</p><strong>Explore local guide →</strong></a>)}</div></section>
      <section className="authority-cta"><p className="eyebrow">Our verified location</p><h2>The French Quarter in McAllen</h2><p>3911 N. 10th Street · Second Floor · McAllen, Texas</p><a className="button button-gold" href="https://www.google.com/maps/search/?api=1&query=3911+N+10th+Street+McAllen+TX" target="_blank" rel="noreferrer">Get directions</a></section>
    </main>
    <SiteFooter />
  </>;
}
