"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";

import { useStore } from "./Store";
import Booking from "./Booking";



const links = [
  ["Home", "/"],
  ["About the Ashram", "/about"],
  ["Accommodation", "/accommodation"],
  ["Photo Gallery", "/gallery"],
  ["Events & Activities", "/events"],
  ["Contact Us", "/contact"],
];
export default function Shell({ children }) {
  const { data, enquire } = useStore(),
    [menu, setMenu] = useState(false),
    path = usePathname();

    
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
      <div className="topbar">
        <span>ॐ नमो भगवते वासुदेवाय</span>
        <span className="topright">
          <MapPin size={13} /> Vrindavan, Uttar Pradesh ✦ राधे राधे
        </span>
      </div>
      <header className={`header ${scrolled ? "header-fixed" : ""}`}>
        <Link className="brand" href="/">
          <span className="brand-mark">ॐ</span>
          <span className="brand-copy">
            <b>SHREE KRISHNA</b>
            <small>BHAKTI ASHRAM · VRINDAVAN</small>
          </span>
        </Link>
        <nav className={menu ? "nav open" : "nav"}>
          {links.map(([n, h]) => (
            <Link
              key={h}
              className={path === h ? "current" : ""}
              href={h}
              onClick={() => setMenu(false)}
            >
              {n}
            </Link>
          ))}
          <button
            className="mobile-book"
            onClick={() => {
              enquire();
              setMenu(false);
            }}
          >
            Book Now <ArrowUpRight size={16} />
          </button>
        </nav>
        <div className="head-actions">
          <button
            className="btn btn-maroon header-book"
            onClick={() => enquire()}
          >
            Book Now <ArrowUpRight size={17} />
          </button>
          <button
            className="menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {children}
      <footer>
        <div className="container footer-grid">
          <div>
            <Link className="brand footer-brand" href="/">
              <span className="brand-mark">ॐ</span>
              <span className="brand-copy">
                <b>SHREE KRISHNA</b>
                <small>BHAKTI ASHRAM · VRINDAVAN</small>
              </span>
            </Link>
            <p>
              A peaceful home for every soul seeking devotion, comfort and
              connection in the sacred land of Vrindavan.
            </p>
            <div className="footer-mantra">राधे राधे ✦ जय श्री कृष्ण</div>
          </div>
          <div>
            <h4>EXPLORE</h4>
            {links.map(([n, h]) => (
              <Link key={h} href={h}>
                {n}
              </Link>
            ))}
          </div>
          <div>
            <h4>YOUR VISIT</h4>
            <Link href="/accommodation">Our 10 Rooms</Link>
            <Link href="/gallery">Photo Gallery</Link>
            <Link href="/events">Events & Activities</Link>
            <button onClick={() => enquire()}>Booking Enquiry</button>
          </div>
          <div>
            <h4>GET IN TOUCH</h4>
            <p>
              <MapPin size={17} />
              {data.settings.address}
            </p>
            {data.settings.phone && (
              <p>
                <Phone size={17} />
                {data.settings.phone}
              </p>
            )}
            {data.settings.email && (
              <p>
                <Mail size={17} />
                {data.settings.email}
              </p>
            )}
            <Link href="/contact" className="footer-enquire">
              Contact Us →
            </Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Shree Krishna Bhakti Ashram.
          </span>
          {/* <span>
            Made with devotion <Heart size={13} />
          </span> */}
          
          <Link target="_blank" href="https://www.slingverse.in/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
  <Heart size={13} />
  <span>Developed By SlingVerse Technology Pvt Ltd</span>
</Link>

        </div>
        {/* Back To Top Button */}
<button
  type="button"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="back-to-top"
  aria-label="Back to top"
  title="Back to top"
>
  <ArrowUp size={22} strokeWidth={2.5} />
</button>
      </footer>
      <Booking />
    </>
  );
}
