"use client";
import { useState } from "react";
import Link from "next/link";
import { useStore } from "./Store";
import { initial, KEY } from "@/lib/demo";
import {
  Plus,
  Trash2,
  Save,
  Eye,
  ClipboardList,
  Images,
  CalendarDays,
  BedDouble,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
const uid = () => Date.now() + Math.floor(Math.random() * 10000);
function Field({
  label,
  value,
  onChange,
  area = false,
  type = "text",
  placeholder = "",
}) {
  return (
    <label className="admin-field">
      {label}
      {area ? (
        <textarea
          rows="3"
          value={value ?? ""}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          type={type}
          value={value ?? ""}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}
function Head({ title, desc, children }) {
  return (
    <div className="admin-page-head">
      <div>
        <div className="admin-kicker">ASHRAM MANAGEMENT</div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      {children}
    </div>
  );
}
// function Notice() {
//   return (
//     <p className="admin-notice">
//       Demo mode: changes are saved in this browser only. Uploaded images are
//       stored as browser data URLs for preview; use a secure backend, database
//       and persistent image storage before launch.
//     </p>
//   );
// }
export default function AdminPages({ type }) {
  const { data, save } = useStore(),
    [editing, setEditing] = useState(null),
    [filter, setFilter] = useState("All"),
    [flash, setFlash] = useState("");
  const notify = () => {
    setFlash("Changes saved in this browser.");
    setTimeout(() => setFlash(""), 3000);
  };
  const update = (key, id, field, value) =>
    save(key, (old) =>
      old.map((x) => (x.id === id ? { ...x, [field]: value } : x)),
    );
  const add = (key, item) => {
    const id = uid();
    save(key, (old) => [{ ...item, id }, ...old]);
    setEditing(id);
  };
  const remove = (key, id) => {
    if (window.confirm("Delete this item from the demo?"))
      save(key, (old) => old.filter((x) => x.id !== id));
  };
  const upload = (key, id, field, file) => {
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 2 * 1024 * 1024) {
      alert("Choose an image smaller than 2MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => update(key, id, field, reader.result);
    reader.readAsDataURL(file);
  };
  const uploadHome = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 2 * 1024 * 1024) {
      alert("Choose an image smaller than 2MB.");
      return;
    }
    let r = new FileReader();
    r.onload = () => save("home", (v) => ({ ...v, banner: r.result }));
    r.readAsDataURL(file);
  };
  if (type === "dashboard")
    return (
      <>
        <Head
          title="Dashboard"
          desc="Welcome back. Here is your Ashram content overview."
        >
          <Link href="/" target="_blank" className="admin-action">
            View Website <ArrowUpRight size={16} />
          </Link>
        </Head>
        {/* <Notice /> */}
        <div className="stat-grid">
          {[
            [BedDouble, "Rooms", data.rooms.length, "/admin/accommodation"],
            [Images, "Gallery Photos", data.gallery.length, "/admin/gallery"],
            [CalendarDays, "Events", data.events.length, "/admin/events"],
            [
              ClipboardList,
              "Booking Enquiries",
              data.bookings.length,
              "/admin/bookings",
            ],
            [
              MessageSquare,
              "Contact Enquiries",
              data.contacts.length,
              "/admin/enquiries",
            ],
          ].map(([Icon, n, v, h]) => (
            <Link className="stat-card" href={h} key={n}>
              <Icon size={25} />
              <strong>{v}</strong>
              <span>{n}</span>
              <small>Manage →</small>
            </Link>
          ))}
        </div>
        <div className="admin-card">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            {[
              ["Edit Homepage", "/admin/homepage"],
              ["Manage Rooms", "/admin/accommodation"],
              ["Manage Gallery", "/admin/gallery"],
              ["Manage Events", "/admin/events"],
              ["Contact Settings", "/admin/settings"],
            ].map(([n, h]) => (
              <Link href={h} key={h}>
                {n} ↗
              </Link>
            ))}
          </div>
        </div>
        <div className="admin-card">
          <h2>Recent Booking Enquiries</h2>
          {data.bookings.length ? (
            data.bookings.slice(0, 5).map((x) => (
              <p key={x.id}>
                {x.name} · {x.arrival} → {x.departure} · {x.status}
              </p>
            ))
          ) : (
            <p className="empty">
              No booking enquiries yet. Submit one from the public website to
              test the workflow.
            </p>
          )}
        </div>
      </>
    );
  if (type === "homepage")
    return (
      <>
        <Head
          title="Homepage CMS"
          desc="Edit the primary banner and welcome content."
        />
        {/* <Notice /> */}
        <div className="admin-card">
          <h2>Hero Banner</h2>
          <div className="admin-form-grid">
            {[
              ["eyebrow", "Banner Eyebrow"],
              ["title", "Main Heading"],
              ["accent", "Highlighted Heading"],
              ["description", "Hero Description"],
              ["banner", "Banner Image URL"],
              ["introTitle", "Introduction Heading"],
              ["intro", "Introduction Description"],
            ].map(([key, label]) => (
              <Field
                key={key}
                label={label}
                value={data.home[key]}
                area={["description", "intro"].includes(key)}
                onChange={(v) => save("home", (old) => ({ ...old, [key]: v }))}
              />
            ))}
          </div>
          <img
            className="admin-preview"
            src={data.home.banner}
            alt="Banner preview"
          />
          <label className="upload-label">
            Upload replacement banner (demo, max 2MB)
            <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadHome(e.target.files[0])}
            />
          </label>
          <button className="admin-action" onClick={notify}>
            <Save size={16} /> Save Changes
          </button>
        </div>
      </>
    );
  if (type === "settings")
    return (
      <>
        <Head
          title="Contact Settings"
          desc="Update contact details visible on the public website."
        />
        {/* <Notice /> */}
        <div className="admin-card admin-form-grid">
          {[
            ["phone", "Phone Number"],
            ["email", "Email Address"],
            ["address", "Ashram Address"],
            ["map", "Google Maps URL"],
            ["hours", "Visiting Information"],
          ].map(([k, label]) => (
            <Field
              key={k}
              label={label}
              value={data.settings[k]}
              onChange={(v) => save("settings", (o) => ({ ...o, [k]: v }))}
            />
          ))}
          <button className="admin-action" onClick={notify}>
            <Save size={16} /> Save Settings
          </button>
        </div>
      </>
    );
  if (type === "gallery")
    return (
      <>
        <Head
          title="Gallery Manager"
          desc="Add, categorise, replace or delete gallery images."
        >
          <button
            className="admin-action"
            onClick={() =>
              add("gallery", {
                title: "New Photo",
                category: "Ashram",
                image: "",
              })
            }
          >
            <Plus size={16} /> Add Photo
          </button>
        </Head>
        {/* <Notice /> */}
        <div className="admin-gallery">
          {data.gallery.map((g) => (
            <div className="admin-card" key={g.id}>
              <div className="admin-thumb">
                {g.image && <img src={g.image} alt={g.title} />}
              </div>
              <Field
                label="Photo Title"
                value={g.title}
                onChange={(v) => update("gallery", g.id, "title", v)}
              />
              <Field
                label="Category"
                value={g.category}
                onChange={(v) => update("gallery", g.id, "category", v)}
              />
              <Field
                label="Image URL"
                value={g.image}
                onChange={(v) => update("gallery", g.id, "image", v)}
              />
              <label className="upload-label">
                Upload Image (max 2MB)
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    upload("gallery", g.id, "image", e.target.files[0])
                  }
                />
              </label>
              <button
                className="delete-btn"
                onClick={() => remove("gallery", g.id)}
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          ))}
        </div>
      </>
    );
  if (type === "events")
    return (
      <>
        <Head
          title="Event Manager"
          desc="Create, edit, publish or unpublish spiritual events."
        >
          <button
            className="admin-action"
            onClick={() =>
              add("events", {
                title: "New Event",
                category: "Festival",
                date: "",
                description: "",
                image: "",
                status: "Upcoming",
                published: false,
              })
            }
          >
            <Plus size={16} /> Add Event
          </button>
        </Head>
        {/* <Notice /> */}
        <div className="admin-stack">
          {data.events.map((e) => (
            <div className="admin-card" key={e.id}>
              <div className="admin-item-head">
                <h2>{e.title}</h2>
                <button
                  className="delete-btn"
                  onClick={() => remove("events", e.id)}
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
              <div className="admin-form-grid">
                <Field
                  label="Event Title"
                  value={e.title}
                  onChange={(v) => update("events", e.id, "title", v)}
                />
                <Field
                  label="Category"
                  value={e.category}
                  onChange={(v) => update("events", e.id, "category", v)}
                />
                <Field
                  label="Event Date"
                  type="date"
                  value={e.date}
                  onChange={(v) => update("events", e.id, "date", v)}
                />
                <label className="admin-field">
                  Event Status
                  <select
                    value={e.status}
                    onChange={(v) =>
                      update("events", e.id, "status", v.target.value)
                    }
                  >
                    <option>Upcoming</option>
                    <option>Past</option>
                  </select>
                </label>
                <Field
                  label="Image URL"
                  value={e.image}
                  onChange={(v) => update("events", e.id, "image", v)}
                />
                <Field
                  label="Description"
                  area
                  value={e.description}
                  onChange={(v) => update("events", e.id, "description", v)}
                />
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={!!e.published}
                  onChange={(v) =>
                    update("events", e.id, "published", v.target.checked)
                  }
                />{" "}
                Published on website
              </label>
            </div>
          ))}
        </div>
      </>
    );
  if (type === "accommodation")
    return (
      <>
        <Head
          title="Accommodation Manager"
          desc="Edit all ten rooms, descriptions, amenities and photographs."
        />
        {/* <Notice /> */}
        <div className="admin-stack">
          {data.rooms.map((r) => (
            <div className="admin-card room-editor" key={r.id}>
              <div className="admin-item-head">
                <h2>
                  Room {String(r.id).padStart(2, "0")} · {r.title}
                </h2>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={!!r.published}
                    onChange={(e) =>
                      update("rooms", r.id, "published", e.target.checked)
                    }
                  />{" "}
                  Published
                </label>
              </div>
              <div className="room-editor-grid">
                <div>
                  <div className="admin-form-grid">
                    <Field
                      label="Room Title"
                      value={r.title}
                      onChange={(v) => update("rooms", r.id, "title", v)}
                    />
                    <Field
                      label="Amenities (comma separated)"
                      value={r.amenities}
                      onChange={(v) => update("rooms", r.id, "amenities", v)}
                    />
                    <Field
                      label="Description"
                      area
                      value={r.description}
                      onChange={(v) => update("rooms", r.id, "description", v)}
                    />
                    <Field
                      label="Photo URL"
                      value={r.image}
                      onChange={(v) => update("rooms", r.id, "image", v)}
                    />
                  </div>
                  <label className="upload-label">
                    Replace Photo (max 2MB)
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        upload("rooms", r.id, "image", e.target.files[0])
                      }
                    />
                  </label>
                </div>
                <div className="admin-thumb">
                  {r.image && <img src={r.image} alt={r.title} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  if (["bookings", "enquiries"].includes(type)) {
    let key = type === "bookings" ? "bookings" : "contacts",
      rows = data[key];
    return (
      <>
        <Head
          title={
            type === "bookings" ? "Booking Enquiries" : "Contact Enquiries"
          }
          desc="Review visitor details and update enquiry statuses."
        />
        {/* <Notice /> */}
        <div className="admin-card">
          <div className="filter-row">
            {["All", "New", "Contacted", "Closed"].map((x) => (
              <button
                key={x}
                className={filter === x ? "active" : ""}
                onClick={() => setFilter(x)}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="table-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  {(type === "bookings"
                    ? [
                        "Visitor",
                        "Contact",
                        "Stay Dates",
                        "Guests",
                        "Room / Message",
                        "Status",
                        "Received",
                      ]
                    : [
                        "Visitor",
                        "Contact",
                        "Subject / Message",
                        "Status",
                        "Received",
                      ]
                  ).map((x) => (
                    <th key={x}>{x}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows
                  .filter((r) => filter === "All" || r.status === filter)
                  .map((r) => (
                    <tr key={r.id}>
                      <td>
                        <b>{r.name}</b>
                      </td>
                      <td>
                        {r.phone}
                        <br />
                        {r.email}
                      </td>
                      {type === "bookings" && (
                        <>
                          <td>
                            {r.arrival}
                            <br />
                            to {r.departure}
                          </td>
                          <td>{r.guests}</td>
                        </>
                      )}
                      <td>
                        {r.room && (
                          <b>
                            {r.room}
                            <br />
                          </b>
                        )}
                        {r.subject && (
                          <b>
                            {r.subject}
                            <br />
                          </b>
                        )}
                        {r.message}
                      </td>
                      <td>
                        <select
                          value={r.status}
                          onChange={(e) =>
                            update(key, r.id, "status", e.target.value)
                          }
                        >
                          {["New", "Contacted", "Closed"].map((x) => (
                            <option key={x}>{x}</option>
                          ))}
                        </select>
                      </td>
                      <td>{r.created}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {!rows.length && (
              <p className="empty">
                No enquiries yet. Submit the corresponding form on the public
                website to test this demo.
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
  return null;
}
