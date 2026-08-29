import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { areas, SITE_URL, services } from "@/lib/site-content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.description, alternates: { canonical: `/services/${service.slug}` }, openGraph: { title: service.title, description: service.description, url: `/services/${service.slug}`, type: "website" } };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Service", name: service.name, description: service.description, provider: { "@type": "Store", name: "C. Royce Watch Co.", url: SITE_URL }, areaServed: ["Rio Grande Valley", "McAllen", "Hidalgo County", "Cameron County", "Starr County"], url: `${SITE_URL}/services/${service.slug}` },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: service.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ];
  return <>
    <SiteHeader />
    <main className="authority-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="authority-hero"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/services">Services</a><span>/</span><span>{service.shortName}</span></nav><p className="eyebrow">C. Royce Watch Co. · Rio Grande Valley</p><h1>{service.name}</h1><p>{service.intro}</p><a className="button button-gold" href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">Start the conversation</a></header>
      <article className="authority-article">{service.sections.map(([heading, copy], index) => <section key={heading}><span>0{index + 1}</span><div><h2>{heading}</h2><p>{copy}</p></div></section>)}</article>
      <section className="faq-section"><div className="section-label"><span>FAQ</span> Common questions</div>{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
      <section className="related-links"><div className="section-label"><span>RGV</span> Serving collectors across the Valley</div><div>{areas.map(area => <a href={`/areas-served/${area.slug}`} key={area.slug}>{area.city}</a>)}</div></section>
    </main>
    <SiteFooter />
  </>;
}
