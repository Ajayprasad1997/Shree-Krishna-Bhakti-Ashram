"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import FacilitiesSection from "@/components/FacilitiesSection";
import EventsCarousel from "@/components/EventsCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import ContactSection from "@/components/ContactSection";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Flower2,
  Heart,
  Home as HomeIcon,
  Sun,
   X,
   Wifi,
  Car,
  Users,
  Wind,
  Bath,
  ShieldCheck,
  Check,
  BedDouble,
  Trees,
  Coffee,
  Tv,
  ShowerHead,
  Sparkles,
  Baby,
  Utensils,
  Accessibility,
  Languages,
  Clock3,
  MapPin,
  Fan,
  Shirt,
  Luggage,
  Flame,
  Droplets,
  Armchair,
  Plug,
} from "lucide-react";
import { useStore } from "./Store";
import { Title, RoomCards, Activities } from "./Sections";
import { photos } from "@/lib/demo";
export const metadata = { title: "Contact Us" };
export default function Home() {
  const { data, enquire } = useStore(),
    [slide, setSlide] = useState(0);
  const slides = [
    {
      eyebrow: data.home.eyebrow,
      title: data.home.title,
      accent: data.home.accent,
      text: data.home.description,
      image: data.home.banner,
    },
    {
      eyebrow: "A DIVINE EXPERIENCE AWAITS",
      title: "Stay Close to",
      accent: "The Divine.",
      text: "Find comfort, simplicity and spiritual warmth during your sacred journey to Vrindavan.",
      image: photos.vrindavan,
    },
    {
      eyebrow: "FAITH · PEACE · DEVOTION",
      title: "A Home for",
      accent: "Every Devotee.",
      text: "Experience the timeless spirit of bhakti, community and heartfelt hospitality.",
      image: photos.spirit,
    },
  ];
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % 3), 6500);
    return () => clearInterval(id);
  }, []);
  return (
    <main>
      <section className="hero">
        {slides.map((s, i) => (
          <div
            key={i}
            className={"hero-slide " + (slide === i ? "active" : "")}
            style={{
              backgroundImage: `linear-gradient(
90deg,
#080d18d1 0%,
#0b1928b5 51%,
#102b40c3 100%),url('${s.image}')`,
            }}
          >
            <div className="hero-inner">
              <div className="hero-content">
                <div className="eyebrow light">{s.eyebrow}</div>
                <h1>
                  {s.title}
                  <br />
                  <em>{s.accent}</em>
                </h1>
                <p>{s.text}</p>
                <div className="hero-buttons">
                  <button className="btn btn-gold" onClick={() => enquire()}>
                    Plan Your Visit <ArrowUpRight size={18} />
                  </button>
                  <Link className="btn btn-outline" href="/about">
                    Explore Ashram <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="hero-side">श्री राधे कृष्ण ✦ जय श्री कृष्ण</div>
        <div className="hero-bottom">
          <div className="hero-pagination">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={slide === i ? "selected" : ""}
                aria-label={"Slide " + (i + 1)}
              >
                0{i + 1}
                <i />
              </button>
            ))}
          </div>
          <div className="hero-controls">
            <button
              onClick={() => setSlide((slide + 2) % 3)}
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => setSlide((slide + 1) % 3)}
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="scroll-hint">SCROLL TO EXPLORE ↓</div>
        </div>
      </section>
      <div className="mantra-strip">
        ✦ HARE KRISHNA HARE KRISHNA ✦ KRISHNA KRISHNA HARE HARE ✦ HARE RAMA HARE RAMA ✦ RAMA RAMA HARE HARE ✦
      </div>
      <section className="section">
        <div className="container intro-grid">
          <div className="intro-visual reveal">
            <div
              className="intro-photo"
              style={{ backgroundImage: `url('${photos.about}')` }}
            />
            {/* <div className="intro-seal">
              <Flower2 /> ROOTED IN DEVOTION
            </div> */}
          </div>
          <div className="intro-text reveal">
            <Title
              eyebrow="WELCOME TO OUR ASHRAM"
              title="A Sacred Retreat in the"
              accent="Heart of Vrindavan"
            />
            <p className="lead">{data.home.introTitle}</p>
            <p>{data.home.intro}</p>
            <div className="intro-points">
              <div>
                <span>
                  <Flower2 />
                </span>
                <b>Divine Atmosphere</b>
                <small>A peaceful space for prayer</small>
              </div>
              <div>
                <span>
                  <Heart />
                </span>
                <b>Heartfelt Hospitality</b>
                <small>Care for every pilgrim</small>
              </div>
            </div>
            <Link className="btn btn-maroon" href="/about">
              ABOUT THE ASHRAM <ArrowUpRight />
            </Link>


          </div>
        </div>
      </section>
      <section className="blessing">
        <div className="container blessing-grid">
          {[
            [Flower2, "Rooted in Bhakti", "A life inspired by devotion"],
            [HomeIcon, "Comfortable Rooms", "A restful stay for pilgrims"],
            [Sun, "Peaceful Surroundings", "Space to reflect"],
            [Heart, "Welcoming Community", "Where every guest belongs"],
          ].map(([Icon, t, d]) => (
            <div key={t}>
              <Icon size={34} />
              <strong>{t}</strong>
              <span>{d}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section accommodation">
        <div className="container">
          <div className="section-top">
            <Title
              eyebrow="REST IN DIVINE COMFORT"
              title="Our Rooms in"
              accent="Vrindavan"
            />
            <p>
              Explore all ten accommodation options. Room details are
              illustrative until confirmed by Ashram management.
            </p>
          </div>
          <RoomCards />
          <div className="center-action">
            <Link className="btn btn-maroon" href="/accommodation">
              View More Rooms & Accommodation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
     
      <section className="section">
        <div className="container">
          <Title
            eyebrow="LIFE AT THE ASHRAM"
            title="Moments of"
            accent="Devotion"
            center
          />
          <p className="section-sub">
            Spiritual activities and facilities to enrich your sacred journey.
          </p>
          <Activities />
          <div className="center-action">
            <Link className="btn btn-maroon" href="/about">
              Discover More About Us <ArrowRight size={17}/>
            </Link>
          </div>
        </div>
      </section>
     

<section className="section gallery">
  <div className="container">
    <div className="section-top">
      <Title
        eyebrow="GLIMPSES OF GRACE"
        title="Our Photo"
        accent="Gallery"
      />
    </div>

    {(() => {
      const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);
const galleryItems = data.gallery ?? [];

const showPreviousImage = () => {
  setActiveGalleryIndex((current) =>
    (current - 1 + galleryItems.length) % galleryItems.length
  );
};

const showNextImage = () => {
  setActiveGalleryIndex((current) =>
    (current + 1) % galleryItems.length
  );
};

      return (
        <>
          <div className="preview-gallery">
            <div className="preview-gallery-track">
              {[0, 1].map((copy) => (
                <div
                  className="preview-gallery-group"
                  key={copy}
                  aria-hidden={copy === 1 ? "true" : undefined}
                >
                  {galleryItems.map((g, index) => (
                    <button
                      type="button"
                      className="preview-gallery-item"
                      key={`${copy}-${g.id}`}
                      onClick={() => setActiveGalleryIndex(index)}
                      tabIndex={copy === 1 ? -1 : 0}
                      aria-label={`View ${g.title}`}
                    >
                      <img
                        src={g.image}
                        alt={copy === 0 ? g.title : ""}
                      />
                      {/* <span className="preview-gallery-caption">
                        <span>{g.title}</span>
                        <span className="preview-gallery-icon">↗</span>
                      </span> */}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="center-action">
            <Link className="btn btn-maroon" href="/gallery">
              View Full Gallery <ArrowRight size={17} />
            </Link>
          </div>

          {activeGalleryIndex !== null &&
            galleryItems[activeGalleryIndex] && (
              <div
                className="gallery-popup"
                role="dialog"
                aria-modal="true"
                aria-label="Gallery image preview"
                onClick={() => setActiveGalleryIndex(null)}
              >
                <button
                  type="button"
                  className="gallery-popup-close"
                  aria-label="Close image"
                  onClick={() => setActiveGalleryIndex(null)}
                >
                  <X size={23} />
                </button>

                {galleryItems.length > 1 && (
                  <button
                    type="button"
                    className="gallery-popup-nav gallery-popup-prev"
                    aria-label="Previous image"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveGalleryIndex(
                        (activeGalleryIndex - 1 + galleryItems.length) %
                          galleryItems.length
                      );
                    }}
                  >
                    <ChevronLeft size={26} />
                  </button>
                )}

                <div
                  className="gallery-popup-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    key={galleryItems[activeGalleryIndex].id}
                    src={galleryItems[activeGalleryIndex].image}
                    alt={galleryItems[activeGalleryIndex].title}
                  />
                  <div className="gallery-popup-caption">
                    <span>{galleryItems[activeGalleryIndex].title}</span>
                    <span>
                      {String(activeGalleryIndex + 1).padStart(2, "0")} /{" "}
                      {String(galleryItems.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {galleryItems.length > 1 && (
                  <button
                    type="button"
                    className="gallery-popup-nav gallery-popup-next"
                    aria-label="Next image"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveGalleryIndex(
                        (activeGalleryIndex + 1) % galleryItems.length
                      );
                    }}
                  >
                    <ChevronRight size={26} />
                  </button>
                )}
              </div>
            )}
        </>
      );
    })()}
  </div>
</section>


<EventsCarousel events={data.events} />
 <section className="quote-section">
        <div className="container">
          <Flower2 size={39} />
          <span>THE SPIRIT OF VRINDAVAN</span>
          <h2>
            “Let your heart be filled with devotion,
            <br />
            and your journey be blessed with peace.”
          </h2>
          <div className="quote-line" />
          राधे राधे
        </div>
      </section>
      {/* <section className="section">
        <div className="container">
          <Title
            eyebrow="CELEBRATE THE DIVINE"
            title="Events &"
            accent="Activities"
            center
          />
          <div className="event-grid">
            {data.events
              .filter((e) => e.published)
              .slice(0, 2)
              .map((e) => (
                <article className="event-card" key={e.id}>
                  <span className="event-icon">
                    <Flower2 />
                  </span>
                  <small>
                    {e.status} · {e.category}
                  </small>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                  <Link href="/events">
                    Explore Events <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
          </div>
          <div className="center-action">
            <Link className="btn btn-maroon" href="/events">
              View All Events <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section> */}
      <FacilitiesSection />
     <GoogleReviews />
      {/* <Inner type="contact" /> */}
       <ContactSection
  data={data}
  Title={Title}
  save={(key, updater) => {
    const old = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    const updated =
      typeof updater === "function" ? updater(old) : updater;

    localStorage.setItem(key, JSON.stringify(updated));
  }}
/>
      <section className="cta">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow light">YOUR SACRED JOURNEY BEGINS HERE</div>
            <h2>
              Come as a Guest.
              <br />
              <em>Leave with Blessings.</em>
            </h2>
            <p>Planning a visit to Vrindavan? We would love to welcome you.</p>
          </div>
          <button className="btn btn-gold" onClick={() => enquire()}>
            Book Now · Send Enquiry <ArrowUpRight />
          </button>
        </div>
      </section>
    </main>
  );
}
