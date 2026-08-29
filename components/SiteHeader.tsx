"use client";

import { useEffect, useState } from "react";

const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return <header className="nav-shell">
    <a className="wordmark" href="/" aria-label="C. Royce Watch Co. home" onClick={close}><span className="monogram">CR</span><span>C. ROYCE <em>WATCH CO.</em></span></a>
    <nav className="desktop-nav" aria-label="Main navigation"><a href="/#story">Our Story</a><a href="/services">Services</a><a href="/areas-served">RGV Areas</a><a href="/#visit">Visit</a></nav>
    <a className="nav-cta" href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">View the collection <ArrowIcon /></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(value => !value)}><span /><span /></button>
    <div className={`mobile-menu${open ? " is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
      <nav aria-label="Mobile navigation"><a href="/#story" onClick={close}><span>01</span>Our Story</a><a href="/services" onClick={close}><span>02</span>Services</a><a href="/areas-served" onClick={close}><span>03</span>RGV Areas</a><a href="/#visit" onClick={close}><span>04</span>Visit</a></nav>
      <div className="mobile-socials"><p>Follow the collection</p><a href="https://www.instagram.com/c_royce_co" target="_blank" rel="noreferrer">Instagram <ArrowIcon /></a><a href="https://www.facebook.com/Croycewatchco" target="_blank" rel="noreferrer">Facebook <ArrowIcon /></a></div>
      <p className="mobile-address">The French Quarter · 3911 N. 10th Street · McAllen, Texas</p>
    </div>
  </header>;
}
