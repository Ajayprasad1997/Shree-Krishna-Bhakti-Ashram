
"use client";

import { useEffect, useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
  LoaderCircle,
} from "lucide-react";

export default function GoogleReviews() {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch("/api/google-reviews");
        if (!response.ok) throw new Error("Reviews unavailable");

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, []);

  const reviews = data?.reviews || [];

  function previous() {
    setActive((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  }

  function next() {
    setActive((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="google-reviews-section">
      <div className="reviews-container">
        <div className="reviews-heading">
          <span className="reviews-eyebrow">
            <span className="reviews-lotus">✦</span>
            WORDS FROM OUR GUESTS
          </span>

          <h2>
            Blessed Moments,
            <br />
            <em>Beautiful Memories</em>
          </h2>

          <p>
            Discover what our guests share about their spiritual
            stay at Shree Krishna Bhakti Ashram, Vrindavan.
          </p>
        </div>

        <div className="reviews-summary">
          <div className="google-mark" aria-label="Google">
            <span>G</span>
          </div>

          <div className="reviews-score">
            <strong>{data?.rating ?? "—"}</strong>
            <div className="reviews-stars" aria-label="Google rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} fill="currentColor" />
              ))}
            </div>
            <span>
              {data
                ? `${data.totalReviews} Google reviews`
                : "Guest experiences"}
            </span>
          </div>

          {data?.googleMapsUri && (
            <a
              href={data.googleMapsUri}
              target="_blank"
              rel="noreferrer"
              className="reviews-all-link"
            >
              Read All Reviews <ExternalLink size={15} />
            </a>
          )}
        </div>

        {loading ? (
          <div className="reviews-loading">
            <LoaderCircle className="reviews-spinner" size={28} />
            <span>Loading guest experiences...</span>
          </div>
        ) : reviews.length > 0 ? (
          <>
            <div className="reviews-carousel">
              {reviews.map((review, index) => (
                <article
                  key={`${review.name}-${index}`}
                  className={`review-card ${
                    index === active ? "review-card-active" : ""
                  }`}
                >
                  <div className="review-card-top">
                    <Quote size={30} className="review-quote" />

                    <div className="reviews-stars small-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          fill="currentColor"
                          className={
                            star <= review.rating ? "" : "empty-star"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <p className="review-text">
                    {review.text || "Shared a rating on Google."}
                  </p>

                  <div className="review-author">
                    <div className="review-avatar">
                      {review.photo ? (
                        <img
                          src={review.photo}
                          alt=""
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        review.name.charAt(0).toUpperCase()
                      )}
                    </div>

                    <div className="review-author-info">
                      <strong>{review.name}</strong>
                      <span>{review.date}</span>
                    </div>

                    <span className="review-google-g">G</span>
                  </div>

                  {review.url && (
                    <a
                      href={review.url}
                      target="_blank"
                      rel="noreferrer"
                      className="review-source-link"
                    >
                      View on Google <ExternalLink size={13} />
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div className="reviews-controls">
              <span className="reviews-counter">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(reviews.length).padStart(2, "0")}
              </span>

              <div className="reviews-dots">
                {reviews.map((review, index) => (
                  <button
                    key={`${review.name}-dot-${index}`}
                    onClick={() => setActive(index)}
                    aria-label={`Show review ${index + 1}`}
                    className={index === active ? "active" : ""}
                  />
                ))}
              </div>

              <div className="reviews-arrows">
                <button onClick={previous} aria-label="Previous review">
                  <ChevronLeft />
                </button>
                <button onClick={next} aria-label="Next review">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="reviews-empty">
            <p>Guest reviews are temporarily unavailable.</p>
            {data?.googleMapsUri && (
              <a
                href={data.googleMapsUri}
                target="_blank"
                rel="noreferrer"
              >
                Explore reviews on Google <ExternalLink size={15} />
              </a>
            )}
          </div>
        )}

        {/* <p className="reviews-attribution">
          Reviews provided by Google. Reviewer names and content
          are displayed as returned by Google.
        </p> */}
      </div>
    </section>
  );
}
