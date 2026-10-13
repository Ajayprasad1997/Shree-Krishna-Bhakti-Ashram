"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Check,
  X,
  CalendarDays,
} from "lucide-react";
import { useStore } from "./Store";
import { Banner, Title, RoomCards, Activities } from "./Sections";
import { photos } from "@/lib/demo";
export default function Inner({ type }) {
  const { data, enquire, save } = useStore(),
    [category, setCategory] = useState("All"),
    [zoom, setZoom] = useState(null),
    [sent, setSent] = useState(false);
  let page = {
    about: [
      "ABOUT THE ASHRAM",
      "About the Ashram",
      "Our story, mission, devotion and peaceful surroundings.",
      photos.temple,
    ],
    accommodation: [
      "REST IN DIVINE COMFORT",
      "Accommodation",
      "Discover our ten guest rooms. Enquiry only; no real-time inventory.",
      photos.room,
    ],
    gallery: [
      "GLIMPSES OF GRACE",
      "Photo Gallery",
      "Moments of devotion, Vrindavan and a peaceful stay.",
      photos.vrindavan,
    ],
    events: [
      "CELEBRATE THE DIVINE",
      "Events & Activities",
      "Upcoming and past celebrations and spiritual gatherings.",
      photos.spirit,
    ],
    contact: [
      "WE WOULD LOVE TO HEAR FROM YOU",
      "Contact Us",
      "Plan your visit and get in touch with the Ashram.",
      photos.temple,
    ],
  }[type];
  return (
    <main>
      <Banner
        eyebrow={page[0]}
        title={page[1]}
        description={page[2]}
        image={page[3]}
      />
      {type === "about" && (
        <>
          <section className="section">
            <div className="container intro-grid">
              <div className="intro-visual">
                <div
                  className="intro-photo"
                  style={{ backgroundImage: `url('${photos.vrindavan}')` }}
                />
              </div>
              <div className="intro-text">
                <Title
                  eyebrow="OUR STORY"
                  title="A Place of"
                  accent="Bhakti & Peace"
                />
                <p className="lead">{data.home.introTitle}</p>
                <p>{data.home.intro}</p>
                <p>
                  Shree Krishna Bhakti Ashram welcomes pilgrims and spiritual
                  seekers to Vrindavan. This demonstration content should be
                  replaced with the Ashram's verified background and history.
                </p>
                <button className="btn btn-maroon" onClick={() => enquire()}>
                  Plan Your Visit <ArrowUpRight />
                </button>
              </div>
            </div>
          </section>
          <section className="section accommodation">
            <div className="container">
              <Title
                eyebrow="OUR MISSION"
                title="Devotion in"
                accent="Every Moment"
                center
              />
              <p className="section-sub">
                To offer a peaceful environment for prayer, spiritual reflection
                and heartfelt hospitality.
              </p>
              <Activities />
            </div>
          </section>
          <section className="section">
            <div className="container">
              <Title
                eyebrow="ASHRAM FACILITIES"
                title="Simple Comfort,"
                accent="Sacred Surroundings"
                center
              />
              <div className="feature-row">
                {[
                  "10 Guest Rooms",
                  "Peaceful Atmosphere",
                  "Spiritual Activities",
                  "Guest Enquiries",
                ].map((s) => (
                  <div key={s}>
                    <Check /> {s}
                  </div>
                ))}
              </div>
              <div className="center-action">
                <Link className="btn btn-maroon" href="/accommodation">
                  Explore Accommodation <ArrowRight />
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
      {type === "accommodation" && (
        <section className="section accommodation">
          <div className="container">
            <Title
              eyebrow="OUR ACCOMMODATION"
              title="Explore All"
              accent="10 Rooms"
            />
            <p
              className="section-sub"
              style={{ textAlign: "left", margin: "0 0 32px" }}
            >
              Browse each room and enquire about your intended dates. Room
              details are placeholders until verified by the Ashram.
            </p>
            <RoomCards all />
            <div className="center-action">
              <button className="btn btn-maroon" onClick={() => enquire()}>
                General Booking Enquiry <ArrowUpRight />
              </button>
            </div>
          </div>
        </section>
      )}
      {type === "gallery" && (
        <section className="section gallery">
          <div className="container">
            <Title
              eyebrow="OUR MOMENTS"
              title="A Journey Through"
              accent="Our Gallery"
            />
            <div className="filter-row">
              {["All", ...new Set(data.gallery.map((g) => g.category))].map(
                (x) => (
                  <button
                    className={category === x ? "active" : ""}
                    key={x}
                    onClick={() => setCategory(x)}
                  >
                    {x}
                  </button>
                ),
              )}
            </div>
            <div className="gallery-page-grid">
              {data.gallery
                .filter((g) => category === "All" || g.category === category)
                .map((g) => (
                  <button key={g.id} onClick={() => setZoom(g)}>
                    <img src={g.image} alt={g.title} />
                    <span>
                      {g.title} · {g.category} ↗
                    </span>
                  </button>
                ))}
            </div>
            
          </div>
          {zoom && (
            <div
              className="lightbox"
              role="dialog"
              aria-modal="true"
              onClick={() => setZoom(null)}
            >
              <button aria-label="Close enlarged image">
                <X />
              </button>
              <img src={zoom.image} alt={zoom.title} />
            </div>
          )}
        </section>
      )}
      {type === "events" && (
        <section className="section">
          <div className="container">
            <Title
              eyebrow="SPIRITUAL CALENDAR"
              title="Events &"
              accent="Celebrations"
            />
            <div className="event-grid">
              {data.events
                .filter((e) => e.published)
                .map((e) => (
                  <article className="event-card" key={e.id}>
                    <small>
                      {e.status} · {e.category}
                    </small>
                    <h3>{e.title}</h3>
                    <p>
                      {e.date ? (
                        <>
                          <CalendarDays size={15} /> {e.date}
                          <br />
                        </>
                      ) : null}
                      {e.description}
                    </p>
                    <button onClick={() => enquire()}>
                      Send an Enquiry <ArrowRight size={16} />
                    </button>
                  </article>
                ))}
            </div>
            <p className="demo-note">
              Please confirm event dates with Ashram management before
              publishing.
            </p>
          </div>
        </section>
      )}
      {type === "contact" && (
        <section className="section">
          <div className="container contact-grid">
            <div>
              <Title
                eyebrow="GET IN TOUCH"
                title="We Are Here to"
                accent="Welcome You"
              />
              <div className="contact-info">
                <p>
                  <MapPin />
                  {data.settings.address}
                </p>
                <p>
                  <Phone />
                  {data.settings.phone ||
                    "Phone number to be added by management"}
                </p>
                <p>
                  <Mail />
                  {data.settings.email ||
                    "Email address to be added by management"}
                </p>
                <p>{data.settings.hours}</p>
              </div>
              {data.settings.phone && (
                <a
                  className="btn btn-maroon"
                  href={"tel:" + data.settings.phone}
                >
                  Call Ashram <Phone size={16} />
                </a>
              )}
              {data.settings.map ? (
                <a
                  className="btn btn-gold"
                  href={data.settings.map}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Google Maps ↗
                </a>
              ) : (
                <div className="map-placeholder">
                  <MapPin /> Google Maps link will be added by management
                </div>
              )}
            </div>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              {sent ? (
                <div className="form-success">
                  <Check />
                  <h3>Message saved in this demo!</h3>
                  <p>View it under Admin → Contact Enquiries (same browser).</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    let f = new FormData(e.currentTarget);
                    save("contacts", (old) => [
                      {
                        id: Date.now(),
                        name: f.get("name"),
                        phone: f.get("phone"),
                        email: f.get("email"),
                        subject: f.get("subject"),
                        message: f.get("message"),
                        status: "New",
                        created: new Date().toLocaleString(),
                      },
                      ...old,
                    ]);
                    setSent(true);
                  }}
                >
                  <label>
                    Your Name *<input name="name" required />
                  </label>
                  <label>
                    Phone Number *<input name="phone" required type="tel" />
                  </label>
                  <label>
                    Email Address *<input name="email" required type="email" />
                  </label>
                  <label>
                    Subject
                    <input name="subject" />
                  </label>
                  <label>
                    Message *<textarea name="message" required rows="5" />
                  </label>
                  <button className="btn btn-maroon" type="submit">
                    Send Enquiry <ArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
