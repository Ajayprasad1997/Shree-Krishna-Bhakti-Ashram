"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Check,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function ContactSection({ data, Title, save }) {
  const [sent, setSent] = useState(false);

  const settings = data?.settings || {};

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.646690576252!2d77.68337729999999!3d27.5734735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736e3b497ce363%3A0x56fb8fa1c281eec5!2sShree%20Krishna%20Bhakti%20Ashram!5e0!3m2!1sen!2sin!4v1791986958808!5m2!1sen!2sin";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const contact = {
      id: Date.now(),
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      status: "New",
      created: new Date().toLocaleString(),
    };

    save("contacts", (old) => [contact, ...old]);

    setSent(true);
    form.reset();
  };

  return (
    <section className="section contact-section">
      <div className="container contact-grid">

        {/* Contact Information */}
        <div className="contact-details">
          <Title
            eyebrow="GET IN TOUCH"
            title="We Are Here to"
            accent="Welcome You"
          />

          <p className="contact-description">
            We would love to hear from you. Contact Shree Krishna
            Bhakti Ashram for enquiries, visits, and further information.
          </p>

          <div className="contact-info">
            <p>
              <MapPin size={20} />
              <span>
                {settings.address || "Shree Krishna Bhakti Ashram"}
              </span>
            </p>

            <p>
              <Phone size={20} />
              <span>
                {settings.phone || "+91 1111111111"}
              </span>
            </p>

            <p>
              <Mail size={20} />
              <span>
                {settings.email || "demo@gmail.com"}
              </span>
            </p>

            <p>
              <Clock size={20} />
              <span>
                {settings.hours || "8:AM To 9:PM"}
              </span>
            </p>
          </div>

          {/* Call Button */}
          {settings.phone && (
            <a
              className="btn btn-maroon"
              href={`tel:${settings.phone}`}
            >
              Call Ashram <Phone size={16} />
            </a>
          )}

          {/* Google Maps Button */}
          <a
            className="btn btn-gold"
            href="https://www.google.com/maps/search/?api=1&query=Shree+Krishna+Bhakti+Ashram"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions <ArrowRight size={16} />
          </a>

          {/* Embedded Google Map */}
          <div className="contact-map">
            <iframe
              src={mapUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Shree Krishna Bhakti Ashram Google Maps"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>

          <p className="form-description">
            Fill out the form below and share your enquiry with us.
          </p>

          {sent ? (
            <div className="form-success">
              <Check size={32} />

              <h3>Message saved in this demo!</h3>

              <p>
                View it under Admin → Contact Enquiries in the same browser.
              </p>

              <button
                type="button"
                className="btn btn-maroon"
                onClick={() => setSent(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Your Name *
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Phone Number *
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </label>

              <label>
                Email Address *
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </label>

              <label>
                Subject
                <input
                  name="subject"
                  type="text"
                  placeholder="Enter enquiry subject"
                />
              </label>

              <label>
                Message *
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                />
              </label>

              <button className="btn btn-maroon" type="submit">
                Send Enquiry <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
