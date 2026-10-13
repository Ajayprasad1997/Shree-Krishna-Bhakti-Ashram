export const photos = {
  temple:
    "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=1400&q=85",
  vrindavan:
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=85",
  spirit:"/assets/images/shree-krishna-ashram-banner.jpg",
  room: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=80",
  room2:
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=80",
  room3:
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=80",
  room4:
    "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=900&q=80",
};
export const initial = {
  settings: {
    phone: "",
    email: "",
    address: "Vrindavan, Uttar Pradesh, India",
    map: "",
    hours: "Please contact the Ashram for visiting information",
  },
  home: {
    eyebrow: "WELCOME TO THE Shree Krishna Bhakti Ashram VRINDAVAN",
    title: "Where Every Heart",
    accent: "Finds Krishna.",
    description:
      "A peaceful sanctuary for devotion, reflection and soulful living in the divine land of Shri Radha Krishna.",
    banner: photos.temple,
    introTitle: "A Sacred Retreat in the Heart of Vrindavan",
    intro:
      "In the holy land where every street echoes with the name of Radha and Krishna, discover a place to pause, pray and reconnect.",
  },
  rooms: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Ashram Guest Room ${String(i + 1).padStart(2, "0")}`,
    description:
      "A peaceful, welcoming space for devotees and families visiting Vrindavan.",
    amenities: "Comfortable bedding, Attached bathroom, Peaceful surroundings",
    image: [photos.room, photos.room2, photos.room3, photos.room4][i % 4],
    published: true,
  })),
  gallery: [
    {
      id: 1,
      title: "Sacred Vrindavan",
      category: "Vrindavan",
      image: photos.vrindavan,
    },
    {
      id: 2,
      title: "Devotional Moments",
      category: "Devotion",
      image: photos.temple,
    },
    {
      id: 3,
      title: "Spiritual Journey",
      category: "Vrindavan",
      image: photos.vrindavan,
    },
    {
      id: 4,
      title: "Peaceful Stay",
      category: "Accommodation",
      image: photos.room,
    },
  ],
  events: [
    {
      id: 1,
      title: "Janmashtami Celebrations",
      date: "",
      category: "Festival",
      description:
        "Join the spirit of devotion and celebration. Contact the Ashram for confirmed programme details.",
      published: true,
      status: "Upcoming",
      image: photos.temple,
    },
    {
      id: 2,
      title: "Bhajan & Satsang",
      date: "",
      category: "Spiritual Gathering",
      description:
        "Devotional music, prayer and shared reflection. Dates to be announced.",
      published: true,
      status: "Upcoming",
      image: photos.vrindavan,
    },
  ],
  bookings: [],
  contacts: [],
};
export const KEY = "skba_demo_v2";
