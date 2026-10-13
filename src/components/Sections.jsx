"use client";
import Link from "next/link";
import {
  ArrowUpRight,
  Flower2,
  Heart,
  Sun,
  Music2,
  Home as HomeIcon,
} from "lucide-react";
import { useStore } from "./Store";
import Image from "next/image";
export function Title({ eyebrow, title, accent, center = false }) {
  return (
    <div className={"section-head " + (center ? "centered" : "")}>
      <div className="eyebrow">
        <span className="eyeline" />
        {eyebrow}
        <span className="eyeline" />
      </div>
      <h2>
        {title} <em>{accent}</em>
      </h2>
    </div>
  );
}
export function Banner({ eyebrow, title, description, image }) {
  return (
    <section
      className="inner-hero"
      style={{
        backgroundImage: `linear-gradient(90deg,#23180cdd,#23180c77),url('${image}')`,
      }}
    >
      <div className="container">
        <div className="eyebrow light">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="crumb">
          <Link href="/">Home</Link> / {title}
        </div>
      </div>
    </section>
  );
}

export function RoomCards({ all = false }) {
  const { data, enquire } = useStore();

  return (
    <div className="room-grid room-grid-many">
      {data.rooms
        .filter((r) => r.published)
        .slice(0, all ? undefined : 10)
        .map((r) => (
          <article
            className="room-card reveal"
            key={r.id}
            role="button"
            tabIndex={0}
            aria-label={`Enquire about ${r.title}`}
            onClick={() => enquire(r.title)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                enquire(r.title);
              }
            }}
          >
            {/* Room Image */}
            <div className="room-image">
              <div
                className="room-image-inner"
                style={{
                  backgroundImage: `url('${r.image}')`,
                }}
              />

              <span>ROOM {String(r.id).padStart(2, "0")}</span>
            </div>

            {/* Room Information */}
            <div className="room-info">
              <div>
                <small>ASHRAM ACCOMMODATION</small>

                <h3>{r.title}</h3>

                <p>{r.description}</p>

                <p className="amenities">{r.amenities}</p>
              </div>

              <span className="room-arrow" aria-hidden="true">
                <ArrowUpRight />
              </span>
            </div>
          </article>
        ))}
    </div>
  );
}


const activities = [
  {
    title: "Prayer & Reflection",
    description:
      "Find inner peace and spiritual connection in the sacred atmosphere of Vrindavan.",
    image: "/assets/images/activities/prayer.jpg",
  },
  {
    title: "Bhajan & Kirtan",
    description:
      "Experience devotional singing and beautiful moments of shared faith.",
    image: "/assets/images/activities/kirtan.jpg",
  },
  {
    title: "Sacred Celebrations",
    description:
      "Celebrate the timeless beauty of Vrindavan's spiritual traditions.",
    image: "/assets/images/activities/celebrations.jpg",
  },
  {
    title: "Heartfelt Hospitality",
    description:
      "Warm and welcoming surroundings for pilgrims and spiritual seekers.",
    image: "/assets/images/activities/hospitality.jpg",
  },
  {
    title: "Peaceful Accommodation",
    description:
      "Ten thoughtfully arranged rooms for a comfortable devotional stay.",
    image: "/assets/images/activities/accommodation.jpg",
  },
  {
    title: "Spiritual Community",
    description:
      "A sacred space to reconnect with faith, devotion and togetherness.",
    image: "/assets/images/activities/community.jpg",
  },
];


export function Activities() {
  return (
    <div className="activity-grid">
      {activities.map((activity, index) => (
        <article className="activity-card reveal" key={activity.title}>

          {/* Activity Image */}
          <div className="activity-image">
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="activity-img"
            />

            {/* Gradient Overlay */}
            <div className="activity-overlay" />

            {/* Activity Number */}
            <span className="activity-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Decorative Symbol */}
            <span className="activity-decoration">✦</span>
          </div>

          {/* Activity Content */}
          <div className="activity-content">
            {/* <span className="activity-label">
              ASHRAM EXPERIENCES
            </span> */}

            <h3>{activity.title}</h3>

            <p>{activity.description}</p>

            <div className="activity-bottom-line">
              <span />
            </div>
          </div>

        </article>
      ))}
    </div>
  );
}