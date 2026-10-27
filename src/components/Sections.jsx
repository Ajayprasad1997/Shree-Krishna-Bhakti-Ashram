"use client";
import { useRef } from "react";
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

  const sliderRef = useRef(null);
  const dragRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const handleMouseDown = (e) => {
    // Enable mouse dragging only in mobile-width preview
    if (window.innerWidth > 767 || e.button !== 0) return;

    dragRef.current.isDown = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.scrollLeft = sliderRef.current.scrollLeft;
    dragRef.current.moved = false;
  };

  const handleMouseMove = (e) => {
  if (!dragRef.current.isDown || !sliderRef.current) return;

  const distance = e.clientX - dragRef.current.startX;

  if (Math.abs(distance) > 5) {
    dragRef.current.moved = true;
  }

  if (dragRef.current.moved) {
    e.preventDefault();

    // Follow the mouse directly for natural dragging
    sliderRef.current.scrollLeft =
      dragRef.current.scrollLeft - distance;
  }
};

  const stopDragging = () => {
    dragRef.current.isDown = false;
  };

  return (
    <div
      className="room-grid room-grid-luxury"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onClickCapture={(e) => {
        if (dragRef.current.moved) {
          e.preventDefault();
          e.stopPropagation();
          dragRef.current.moved = false;
        }
      }}
    >
      {data.rooms
        .filter((r) => r.published)
        .slice(0, all ? undefined : 10)
        .map((r, index) => (
          <article
            className={`room-card room-luxury-card room-layout-${index % 7}`}
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
            <div className="room-image room-luxury-image">
              <div
                className="room-image-inner"
                style={{
                  backgroundImage: `url('${r.image}')`,
                }}
              />

              <span className="room-luxury-arrow">
                <ArrowUpRight size={20} />
              </span>
            </div>

            <div className="room-info room-luxury-info">
              <div>
                <small>
                  THE STAY COLLECTION /{" "}
                  {String(index + 1).padStart(2, "0")}
                </small>
                <h3>{r.title}</h3>
              </div>

              <span className="room-enquire">
                Book Now <ArrowUpRight size={15} />
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
  const sliderRef = useRef(null);

  const slideNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector(".activity-card");
    if (!card) return;

    const gap = 14;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const nextPosition = slider.scrollLeft + card.offsetWidth + gap;

    slider.scrollTo({
      left: nextPosition >= maxScroll - 5 ? 0 : nextPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="activity-grid" ref={sliderRef}>
      {activities.map((activity) => (
        <article
          className="activity-card reveal"
          key={activity.title}
          onClick={slideNext}
        >
          <div className="activity-image">
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              sizes="(max-width: 640px) 83vw, (max-width: 1024px) 50vw, 33vw"
              className="activity-img"
            />
            <div className="activity-overlay" />
          </div>

          <div className="activity-content">
            <h3>{activity.title}</h3>
            <div className="activity-bottom-line">
              <span />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
