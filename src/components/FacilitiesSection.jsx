"use client";

import Link from "next/link";

import {
  Wifi,
  Car,
  Users,
  Wind,
  Bath,
  ShieldCheck,
  Check,
  ArrowRight,
  BedDouble,
  Trees,
  Coffee,
  Tv,
  ShowerHead,
  Sparkles,
  Baby,
  Accessibility,
  Languages,
  Clock3,
  Heart,
  Flower2,
  MapPin,
  Fan,
  Shirt,
  Luggage,
  Flame,
  Droplets,
  Armchair,
  Plug,
} from "lucide-react";

import GoogleReviews from "@/components/GoogleReviews";
// Adjust the Title import according to your project.

function Title({ eyebrow, title, accent, center = false }) {
  return (
    <div
      className={`section-heading ${center ? "text-center" : ""}`}
      style={{
        textAlign: center ? "center" : "left",
      }}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}

      <h2 className="section-title">
        {title} <em className="section-title-accent">{accent}</em>
      </h2>
    </div>
  );
}

const popularFacilities = [
  {
    title: "Free Parking",
    description: "Convenient private on-site parking",
    icon: Car,
  },
  {
    title: "Free WiFi",
    description: "Stay connected throughout your visit",
    icon: Wifi,
  },
  {
    title: "Family Rooms",
    description: "Comfortable accommodation for families",
    icon: Users,
  },
  {
    title: "Air Conditioning",
    description: "Relax in a comfortable environment",
    icon: Wind,
  },
  {
    title: "Private Bathroom",
    description: "Clean and convenient private facilities",
    icon: Bath,
  },
  {
    title: "24-Hour Security",
    description: "A safe and peaceful environment",
    icon: ShieldCheck,
  },
];

const facilityCategories = [
  {
    title: "Room Comfort",
    subtitle: "Everything for a relaxing stay",
    icon: BedDouble,
    items: [
      "Air conditioning",
      "Fan & heating",
      "Family rooms",
      "Non-smoking rooms",
      "Wardrobe or closet",
      "Fresh linen & towels",
      "Socket near the bed",
      "Garden view",
    ],
  },
  {
    title: "Bathroom",
    subtitle: "Clean and private facilities",
    icon: ShowerHead,
    items: [
      "Private bathroom",
      "Bath & shower",
      "Free toiletries",
      "Toilet paper",
      "Fresh towels",
      "Private toilet",
    ],
  },
  {
    title: "Outdoors & Garden",
    subtitle: "Enjoy nature and tranquillity",
    icon: Trees,
    items: [
      "Beautiful garden",
      "Picnic area",
      "Outdoor furniture",
      "Patio",
      "Garden view",
      "Children's playground",
    ],
  },
  {
    title: "Media & Connectivity",
    subtitle: "Stay connected and entertained",
    icon: Tv,
    items: [
      "Free WiFi in rooms",
      "Flat-screen TV",
      "Television",
      "Seating area",
      "Electric kettle",
    ],
  },
  {
    title: "Guest Services",
    subtitle: "Thoughtful services for every guest",
    icon: Heart,
    items: [
      "Daily housekeeping",
      "Luggage storage",
      "Shared lounge / TV area",
      "Car hire",
      "ATM on site",
      "Ironing service*",
      "Dry cleaning*",
      "Meeting facilities*",
    ],
  },
  {
    title: "Safety & Accessibility",
    subtitle: "Your comfort and safety matter",
    icon: ShieldCheck,
    items: [
      "24-hour security",
      "CCTV in common areas",
      "CCTV outside property",
      "Fire extinguishers",
      "Key access",
      "Accessible parking",
      "Ground-floor accommodation",
      "Non-smoking throughout",
    ],
  },
];

export default function FacilitiesSection() {
  return (
    <section className="facilities-section section" id="facilities">
      <div className="container">
        {/* SECTION HEADING */}

        <div className="facilities-heading">
          
          <div className="section-head centered">
            <div className="eyebrow">
              <span className="eyeline"></span> ASHRAM FACILITIES
              <span className="eyeline"></span>
            </div>
            <h2>
              Simple Comfort, &amp; <em>Sacred Surroundings</em>
            </h2>
          </div>

          <p className="facilities-intro">
            Experience a peaceful stay in the divine land of Vrindavan. Our
            thoughtfully arranged facilities bring together modern comfort, warm
            hospitality and a spiritually enriching atmosphere.
          </p>
        </div>

        {/* POPULAR FACILITIES */}

        <div className="facilities-top-heading">
          <div>
            <span className="facilities-label">
              <Sparkles size={15} />
              EVERYTHING YOU NEED
            </span>

            <h3>Most Popular Facilities</h3>
          </div>

          <span className="facilities-count">
            <Check size={16} />
            Guest Comfort
          </span>
        </div>

        <div className="popular-facilities-grid">
          {popularFacilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <div
                className="popular-facility-card"
                key={facility.title}
                style={{
                  "--delay": `${index * 70}ms`,
                }}
              >
                <div className="popular-facility-icon">
                  <Icon size={27} strokeWidth={1.6} />
                </div>

                <div className="popular-facility-content">
                  <h4>{facility.title}</h4>
                  <p>{facility.description}</p>
                </div>

                <div className="facility-check">
                  <Check size={15} />
                </div>
              </div>
            );
          })}
        </div>

        {/* DECORATIVE DIVIDER */}

        <div className="facilities-divider">
          <span />
          <Flower2 size={24} strokeWidth={1.4} />
          <span />
        </div>

        {/* ALL FACILITIES */}

        <div className="facilities-heading">
          <div className="section-head centered">
            <div className="eyebrow">
              <span className="eyeline"></span>DISCOVER MORE
              <span className="eyeline"></span>
            </div>
            <h2>
              Thoughtfully Designed for <em>Your Stay</em>
            </h2>
          </div>
          <p className="facilities-intro">
            From comfortable rooms to peaceful outdoor spaces, discover
            everything available during your stay.
          </p>
        </div>

        <div className="facilities-category-grid">
          {facilityCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article className="facility-category-card" key={category.title}>
                <div className="facility-category-top">
                  <div className="facility-category-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h4>{category.title}</h4>
                    <p>{category.subtitle}</p>
                  </div>
                </div>

                <ul className="facility-items">
                  {category.items.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* ADDITIONAL INFORMATION */}

        <div className="facilities-additional">
          <div className="facilities-additional-item">
            <Languages size={22} />

            <div>
              <strong>Languages Spoken</strong>
              <span>Bengali, English & Hindi</span>
            </div>
          </div>

          <div className="facilities-additional-item">
            <Car size={22} />

            <div>
              <strong>Parking</strong>
              <span>Free private on-site parking</span>
            </div>
          </div>

          <div className="facilities-additional-item">
            <Wifi size={22} />

            <div>
              <strong>Internet</strong>
              <span>Free WiFi available in rooms</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <GoogleReviews />
      </div>
    </section>
  );
}
