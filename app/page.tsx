import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WatchAtmosphere } from "@/components/WatchAtmosphere";

const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const PinIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1" className="fill-current"/></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z"/></svg>;

const services = [["01","Buy","Discover character-rich vintage pieces selected with a collector's eye."],["02","Sell & Trade","Bring us a watch or collection. We will talk through its story and your options."],["03","Consign","Put the right piece in front of an audience that understands its value."],["04","Source","Looking for something specific? Let us help track down the watch on your list."]];

export default function Home() {
  return <main>
    <SiteHeader />
    <section className="hero video-hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/croyce-watch-hero.webp" aria-hidden="true"><source src="https://videos.pexels.com/video-files/11965361/11965361-hd_1920_1080_24fps.mp4" type="video/mp4" /></video>
      <div className="video-shade" aria-hidden="true" />
      <div className="hero-copy video-hero-copy">
        <p className="eyebrow hero-enter delay-1">Vintage watches · McAllen, Texas</p>
        <h1 className="hero-enter delay-2">Every watch has <span>a story.</span></h1>
        <p className="hero-lede hero-enter delay-3">Thoughtfully sourced vintage timepieces for collectors, first-time buyers, and anyone drawn to the character of a watch built to last.</p>
        <div className="hero-actions hero-enter delay-4"><a className="button button-gold" href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">Explore recent finds <ArrowIcon /></a><a className="text-link" href="#story">Discover C. Royce</a></div>
        <div className="social-strip hero-enter delay-5"><span>Follow</span><a href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a><a href="https://www.facebook.com/Croycewatchco" target="_blank" rel="noreferrer"><FacebookIcon /> Facebook</a></div>
        <div className="trust-line hero-enter delay-5"><span>BUY</span><i/><span>SELL</span><i/><span>TRADE</span><i/><span>CONSIGN</span><i/><span>SOURCE</span></div>
      </div>
      <p className="video-credit">Film by Quang Viet Nguyen · Pexels</p>
    </section>

    <section className="story" id="story"><Reveal><div className="section-label"><span>01</span> The C. Royce difference</div><div className="story-grid"><h2>Not just old.<br/><em>Worth knowing.</em></h2><div className="story-copy"><p>We specialize in vintage because it is what we genuinely know and love. Each piece is approached with curiosity, respect for its history, and an eye for the details that make it distinctive.</p><p>Whether you are searching for your first mechanical watch, moving a piece from your collection, or chasing a long-held grail, you will get a real conversation—not a sales pitch.</p></div></div></Reveal></section>

    <section className="services" id="services"><Reveal><div className="section-label light"><span>02</span> What we do</div><div className="services-intro"><h2>A better way to collect.</h2><p>Personal, knowledgeable guidance for every side of the vintage watch world.</p></div><div className="service-grid">{services.map(([number,title,copy])=><article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></Reveal></section>

    <section className="watch-feature"><Reveal><div className="section-label"><span>03</span> The details matter</div><div className="watch-feature-grid"><div className="hero-visual feature-visual" aria-label="Vintage mechanical wristwatch"><Image src="/croyce-watch-hero.webp" alt="Vintage mechanical wristwatch on walnut and leather" fill sizes="(max-width: 900px) 100vw, 58vw"/><WatchAtmosphere/><div className="orbit-ring" aria-hidden="true"/><div className="floating-note"><small>Specialists in</small><strong>Vintage</strong></div></div><div className="watch-feature-copy"><p className="eyebrow">Character over convention</p><h2>Made to be<br/><em>remembered.</em></h2><p>Patina, proportion, movement, provenance—every detail adds to the story. We help you find the piece that feels unmistakably yours.</p><a className="text-link" href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">See what just arrived <ArrowIcon /></a></div></div></Reveal></section>

    <section className="visit" id="visit"><Reveal><div className="visit-card"><div><p className="eyebrow">Come talk watches</p><h2>Visit C. Royce<br/>in McAllen.</h2></div><div className="address"><PinIcon/><p><strong>The French Quarter</strong><br/>3911 N. 10th Street<br/>Second Floor<br/>McAllen, Texas</p></div><div className="visit-actions"><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=3911+N+10th+Street+McAllen+TX" target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a><a className="social-link" href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer"><InstagramIcon/> @c_royce_co</a><a className="social-link" href="https://www.facebook.com/Croycewatchco" target="_blank" rel="noreferrer"><FacebookIcon/> C. Royce Watch Co.</a></div></div></Reveal></section>

    <SiteFooter />
  </main>;
}
