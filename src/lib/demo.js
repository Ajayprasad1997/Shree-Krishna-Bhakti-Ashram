export const photos = {
  temple:
    "/assets/images/shree-krishna-ashram-banner1.jpg",
  vrindavan:
    "/assets/images/shree-krishna-ashram-banner2.jpg",
  spirit:"/assets/images/shree-krishna-ashram-banner.jpg",
  room: "/assets/images/rooms/room1.jpg",
  room2:
    "/assets/images/rooms/room2.jpg",
  room3:
    "/assets/images/rooms/room3.jpg",
  room4:
    "/assets/images/rooms/room4.jpg",
    room5:
    "/assets/images/rooms/room5.jpg",
    room6:
    "/assets/images/rooms/room6.jpg",
    room7:
    "/assets/images/rooms/room7.jpg",
    room8:
    "/assets/images/rooms/room8.jpg",
    room9:
    "/assets/images/rooms/room9.jpg",
    about:
    "/assets/images/sacred-retreat-in-vrindavan.png",
    janmashtami: "/assets/images/events/janmashtami.jpg",
    kirtan: "/assets/images/events/bhajan-kirtan.jpg",
    meditation: "/assets/images/events/meditation.jpg",
    vegetarian: "/assets/images/events/sattvic-food.jpg",
    satsang: "/assets/images/events/satsang.jpg",
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
  rooms: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Ashram Guest Room ${String(i + 1).padStart(2, "0")}`,
    description:
      "A peaceful, welcoming space for devotees and families visiting Vrindavan.",
    amenities: "Comfortable bedding, Attached bathroom, Peaceful surroundings",
    image: [photos.room, photos.room2, photos.room3, photos.room4, photos.room5, photos.room6,photos.room7, photos.room8, photos.room9][i],
    published: true,
  })),
  gallery: [
    {
      id: 1,
      title: "Sacred Vrindavan",
      category: "Vrindavan",
      image: photos.room4,
    },
    {
      id: 2,
      title: "Devotional Moments",
      category: "Devotion",
      image: photos.room3,
    },
    {
      id: 3,
      title: "Spiritual Journey",
      category: "Vrindavan",
      image: photos.room2,
    },
    {
      id: 4,
      title: "Peaceful Stay",
      category: "Accommodation",
      image: photos.room,
    },
    {
      id: 5,
      title: "Peaceful Stay",
      category: "Accommodation",
      image: photos.room6,
    },
    {
      id: 6,
      title: "Peaceful Stay",
      category: "Accommodation",
      image: photos.room7,
    },
    {
      id: 7,
      title: "Peaceful Stay",
      category: "Accommodation",
      image: photos.room8,
    },
    {
      id: 8,
      title: "Peaceful Stay",
      category: "Accommodation",
      image: photos.room9,
    },
  ],

events: [
  {
    id: 1,
    title: "Janmashtami Celebrations",
    date: "",
    category: "Sacred Festival",
    description:
      "Experience the divine joy of Lord Krishna's birth through devotion, prayer and festive celebrations in Vrindavan.",
    published: true,
    status: "Upcoming",
    image: photos.janmashtami,
  },
  {
    id: 2,
    title: "Bhajan & Kirtan",
    date: "",
    category: "Devotional Music",
    description:
      "Immerse yourself in soulful Krishna bhajans, devotional melodies and the peaceful atmosphere of spiritual togetherness.",
    published: true,
    status: "Activity",
    image: photos.kirtan,
  },
  {
    id: 3,
    title: "Peaceful Meditation",
    date: "",
    category: "Inner Peace",
    description:
      "Take a moment away from everyday life to experience silence, reflection and spiritual calm in the sacred land of Vrindavan.",
    published: true,
    status: "Activity",
    image: photos.meditation,
  },
  {
    id: 4,
    title: "Sattvic Vegetarian Dining",
    date: "",
    category: "Pure Vegetarian",
    description:
      "Discover the simplicity of sattvic vegetarian food and mindful living, inspired by the devotional traditions of Vrindavan.",
    published: true,
    status: "Activity",
    image: photos.vegetarian,
  },
  {
    id: 5,
    title: "Spiritual Satsang",
    date: "",
    category: "Spiritual Gathering",
    description:
      "Find comfort and inspiration through meaningful spiritual discussions, devotional reflection and Krishna consciousness.",
    published: true,
    status: "Activity",
    image: photos.satsang,
  },
],

  bookings: [],
  contacts: [],
};
export const KEY = "skba_demo_v2";
