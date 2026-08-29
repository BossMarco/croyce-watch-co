import Image from "next/image";
import { WatchAtmosphere } from "@/components/WatchAtmosphere";

const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
const PinIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1" className="fill-current"/></svg>;

export default function Home() {
  return <main>
    <header className="nav-shell">
      <a className="wordmark" href="#top" aria-label="C. Royce Watch Co. home"><span className="monogram">CR</span><span>C. ROYCE <em>WATCH CO.</em></span></a>
      <nav aria-label="Main navigation"><a href="#story">Our Story</a><a href="#services">Services</a><a href="#visit">Visit</a></nav>
      <a className="nav-cta" href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">View the collection <ArrowIcon /></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Vintage watches · McAllen, Texas</p>
        <h1>Every watch has <span>a story.</span></h1>
        <p className="hero-lede">Thoughtfully sourced vintage timepieces for collectors, first-time buyers, and anyone drawn to the character of a watch built to last.</p>
        <div className="hero-actions"><a className="button button-gold" href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">Explore recent finds <ArrowIcon /></a><a className="text-link" href="#visit">Visit the shop</a></div>
        <div className="trust-line"><span>BUY</span><i/><span>SELL</span><i/><span>TRADE</span><i/><span>CONSIGN</span><i/><span>SOURCE</span></div>
      </div>
      <div className="hero-visual" aria-label="Vintage mechanical wristwatch"><Image src="/croyce-watch-hero.webp" alt="Vintage mechanical wristwatch on walnut and leather" fill priority sizes="(max-width: 900px) 100vw, 52vw"/><WatchAtmosphere/><div className="floating-note"><small>Specialists in</small><strong>Vintage</strong></div></div>
    </section>

    <section className="story" id="story">
      <div className="section-label"><span>01</span> The C. Royce difference</div>
      <div className="story-grid"><h2>Not just old.<br/><em>Worth knowing.</em></h2><div className="story-copy"><p>We specialize in vintage because it is what we genuinely know and love. Each piece is approached with curiosity, respect for its history, and an eye for the details that make it distinctive.</p><p>Whether you are searching for your first mechanical watch, moving a piece from your collection, or chasing a long-held grail, you will get a real conversation—not a sales pitch.</p></div></div>
    </section>

    <section className="services" id="services">
      <div className="section-label light"><span>02</span> What we do</div>
      <div className="services-intro"><h2>A better way to collect.</h2><p>Personal, knowledgeable guidance for every side of the vintage watch world.</p></div>
      <div className="service-grid">{[["01","Buy","Discover character-rich vintage pieces selected with a collector's eye."],["02","Sell & Trade","Bring us a watch or collection. We will talk through its story and your options."],["03","Consign","Put the right piece in front of an audience that understands its value."],["04","Source","Looking for something specific? Let us help track down the watch on your list."]].map(([number,title,copy])=><article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="visit" id="visit"><div className="visit-card"><div><p className="eyebrow">Come talk watches</p><h2>Visit C. Royce<br/>in McAllen.</h2></div><div className="address"><PinIcon/><p><strong>The French Quarter</strong><br/>3911 N. 10th Street<br/>Second Floor<br/>McAllen, Texas</p></div><div className="visit-actions"><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=3911+N+10th+Street+McAllen+TX" target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a><a className="social-link" href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer"><InstagramIcon/> @c_royce_co</a></div></div></section>

    <footer><a className="wordmark" href="#top"><span className="monogram">CR</span><span>C. ROYCE <em>WATCH CO.</em></span></a><p>Vintage watches in McAllen, Texas.</p><a href="https://www.facebook.com/Croycewatchco" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">Instagram</a></footer>
  </main>;
}
