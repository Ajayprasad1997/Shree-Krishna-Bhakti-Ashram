
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from "lucide-react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EventsCarousel({ events = [] }) {
  const swiperRef = useRef(null);

  const publishedEvents = events.filter((event) => event.published);

  if (!publishedEvents.length) return null;

  return (
    <section className="devotional-events-section">
      <div className="container">

        {/* Heading */}
        <div className="devotional-events-heading">
          <div>
            

            <div className="section-head align-left"><div className="eyebrow"><span className="eyeline"></span>CELEBRATE THE DIVINE<span className="eyeline"></span></div><h2>Events & <em>Activities</em></h2></div>

            <p>
              Experience devotion, inner peace and the timeless
              spiritual traditions of Vrindavan.
            </p>
          </div>

          <div className="devotional-events-navigation">
            <button
              type="button"
              aria-label="Previous activity"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft size={21} />
            </button>

            <button
              type="button"
              aria-label="Next activity"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={22}
          loop={publishedEvents.length > 3}
          speed={750}
          autoplay={
            publishedEvents.length > 1
              ? {
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          pagination={{
            clickable: true,
            el: ".devotional-events-pagination",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          className="devotional-events-swiper"
        >
          {publishedEvents.map((event, index) => (
            <SwiperSlide key={event.id}>
              <article className="devotional-event-card">
                {/* Image */}
                <div className="devotional-event-image">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="devotional-event-img"
                  />

                  <div className="devotional-event-overlay" />

                  {/* <span className="devotional-event-number">
                    {String(index + 1).padStart(2, "0")}
                  </span> */}

                  {/* <span className="devotional-event-category">
                    {event.category}
                  </span> */}
                </div>


                {/* Content */}
                <div className="devotional-event-content">
                  <div className="devotional-event-meta">
                    <CalendarDays size={14} />

                    <span>
                      {event.date || event.status || "Spiritual Activity"}
                    </span>
                  </div>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>

                  <Link
                    href="/events"
                    className="devotional-event-link"
                  >
                    Explore Activity

                    <span>
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>
                </div>

              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="devotional-events-pagination" />

        {/* Bottom CTA */}
        <div className="devotional-events-bottom">
          <p>
             Discover the beauty of spiritual living
            in Vrindavan.
          </p>

          <Link href="/events" className="btn btn-maroon">
            View All Events <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
