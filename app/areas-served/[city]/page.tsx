import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { areas, SITE_URL, services } from "@/lib/site-content";

type PageProps = { params: Promise<{ city: string }> };

export function generateStaticParams() { return areas.map(({ slug }) => ({ city: slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const area = areas.find(item => item.slug === city);
  if (!area) return {};
  const title = `Vintage Watches for ${area.city} Collectors`;
  const description = `Buy, sell, trade, consign, and source vintage watches near ${area.city}, Texas, through C. Royce Watch Co. in McAllen.`;
  return { title, description, alternates: { canonical: `/areas-served/${area.slug}` }, openGraph: { title, description, url: `/areas-served/${area.slug}`, type: "website" } };
}

export default async function AreaPage({ params }: PageProps) {
  const { city } = await params;
  const area = areas.find(item => item.slug === city);
  if (!area) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: `Vintage watch services for ${area.city}, Texas`, provider: { "@type": "Store", name: "C. Royce Watch Co.", url: SITE_URL, address: { "@type": "PostalAddress", streetAddress: "3911 N. 10th Street, Second Floor", addressLocality: "McAllen", addressRegion: "TX", addressCountry: "US" } }, areaServed: { "@type": "City", name: area.city }, url: `${SITE_URL}/areas-served/${area.slug}` };
  return <>
    <SiteHeader />
    <main className="authority-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="authority-hero"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/areas-served">RGV Areas</a><span>/</span><span>{area.city}</span></nav><p className="eyebrow">{area.county} · Rio Grande Valley</p><h1>Vintage watches for<br/><em>{area.city} collectors.</em></h1><p>{area.angle}</p><a className="button button-gold" href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">Contact the shop</a></header>
      <section className="local-intro"><div><p className="eyebrow">A local collector connection</p><h2>Visit C. Royce in McAllen.</h2></div><div><p>{area.local}</p><p>The shop supports every stage of collecting—from understanding a first vintage watch to moving a piece, consigning it, or searching for a specific reference.</p></div></section>
      <section className="authority-section"><div className="section-label"><span>Services</span> How we can help</div><div className="authority-card-grid compact">{services.map(service => <a className="authority-card" href={`/services/${service.slug}`} key={service.slug}><h2>{service.shortName}</h2><p>{service.description}</p><strong>Explore service →</strong></a>)}</div></section>
      <section className="authority-cta"><p className="eyebrow">McAllen showroom</p><h2>Come talk watches.</h2><p>The French Quarter · 3911 N. 10th Street · Second Floor · McAllen, Texas</p><a className="button button-gold" href="https://www.google.com/maps/search/?api=1&query=3911+N+10th+Street+McAllen+TX" target="_blank" rel="noreferrer">Get directions</a></section>
    </main>
    <SiteFooter />
  </>;
}
