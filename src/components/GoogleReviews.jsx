
"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
} from "lucide-react";

import "swiper/css";

const GOOGLE_REVIEWS_URL =
  "https://share.google/2M5taPmxSSXxsVVax";

const reviews = [
  {
    id: 1,
    name: "Sita",
    rating: 5,
    text: "The people are very nice and helpful. The place has wonderful vibes and a peaceful atmosphere. It is close to many sacred places and is a lovely choice for anyone looking for peace and a local Vrindavan experience.",
  },
  {
    id: 2,
    name: "Joydeep",
    rating: 5,
    text: "The long corridor in front of the rooms was an added attraction and made the stay experience special.",
  },
  {
    id: 3,
    name: "Letitia",
    rating: 5,
    text: "A safe, calm and contemplative atmosphere with gentle, friendly, polite and helpful staff. The mandir was peaceful, and the location was convenient for visiting the main temples.",
  },
  {
    id: 4,
    name: "Mick",
    rating: 5,
    text: "Vrindavan is a busy city, but Shree Krishna Bhakti Ashram offers a quiet sanctuary while still being close to the local attractions.",
  },
  {
    id: 5,
    name: "Reshma Rajesh Jamdar",
    rating: 5,
    text: "The property was centrally located and clean, making it convenient for exploring Vrindavan.",
  },
];

export default function GoogleReviews() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section className="google-reviews-section">
      <div className="reviews-container">
        <div className="facilities-heading">
          <div className="section-head centered">
            <div className="eyebrow">
              <span className="eyeline" />
              WORDS FROM OUR GUESTS
              <span className="eyeline" />
            </div>

            <h2>
              Blessed Moments, &amp;{" "}
              <em>Beautiful Memories</em>
            </h2>
          </div>

          <p className="facilities-intro">
            Discover guest experiences of the peaceful atmosphere
            and spiritual surroundings of Shree Krishna Bhakti
            Ashram, Vrindavan.
          </p>
        </div>

        {/* Summary */}
        <div className="reviews-summary">
          <div className="google-mark" aria-label="Google">
            <span>G</span>
          </div>

          <div className="reviews-score">
            <strong>Guest Reviews</strong>
            <span>Guest experiences</span>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-all-link"
          >
            Read Reviews on Google
            <ExternalLink size={15} />
          </a>
        </div>

       

        {/* Reviews */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActive(swiper.realIndex);
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={20}
          speed={500}
          watchOverflow
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 24,
            },
          }}
          className="reviews-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <article className="review-card">
                <div className="review-card-top">
                  <Quote
                    size={30}
                    className="review-quote"
                  />

                  <div className="reviews-stars small-stars">
                    {Array.from({ length: review.rating }).map(
                      (_, index) => (
                        <Star
                          key={index}
                          size={15}
                          fill="currentColor"
                        />
                      )
                    )}
                  </div>
                </div>

                <p className="review-text">
                  {review.text}
                </p>

                <div className="review-author">
                  <div className="review-avatar">
                    {review.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="review-author-info">
                    <strong>{review.name}</strong>
                    <span>Guest Experience</span>
                  </div>

                  <span className="review-google-g">G</span>
                </div>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-source-link"
                >
                  Explore on Google
                  <ExternalLink size={13} />
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots */}
        {/* <div className="reviews-dots">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              className={`reviews-dot ${
                active === index ? "active" : ""
              }`}
              onClick={() => swiperRef.current?.slideTo(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div> */}
         {/* Controls */}
        <div className="reviews-controls">
          <span className="reviews-counter">
            {String(active + 1).padStart(2, "0")}
            {" / "}
            {String(reviews.length).padStart(2, "0")}
          </span>

          <div className="reviews-arrows">
            <button
              type="button"
              className="reviews-prev"
              aria-label="Previous review"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              className="reviews-next"
              aria-label="Next review"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
