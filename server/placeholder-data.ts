export const users = [
  {
    id: 1,
    first_name: "Reece",
    last_name: "Lim",
    email: "reece@gmail.com",
    profile_picture_url: "",
    phone_number: "+63 999 888 7777",
    password_hash: "temp",
    created_at: "2024-11-17T13:47:22.000+08:00",
    updated_at: "2024-11-26T09:25:47.000+08:00",
    status: "Active",
  },
  {
    id: 2,
    first_name: "Angelo",
    last_name: "Pumar",
    email: "gelo@gmail.com",
    profile_picture_url: "",
    phone_number: "+63 222 111 3333",
    password_hash: "pass",
    created_at: "2024-11-19T19:22:43.000+08:00",
    updated_at: "2024-11-19T19:22:43.000+08:00",
    status: "Active",
  },
  {
    id: 3,
    first_name: "Philip",
    last_name: "Go",
    email: "philip@gmail.com",
    profile_picture_url: "",
    phone_number: "+63 444 555 6666",
    password_hash: "word",
    created_at: "2024-11-25T17:01:02.000+08:00",
    updated_at: "2024-11-29T15:12:56.000+08:00",
    status: "Active",
  },
];

export const events = [
  {
    event_id: 1,
    category_id: 2,
    organizer: 2, // id of user who created the event
    title: "Angelo Pumar Wedding",
    desc: "Wedding of Angelo Pumar and his fiancee.",
    date: "2025-01-15T15:30:00.000+08:00",
    address: "Shangri-La Mactan",
    event_image_url: "", // for page
    event_icon_url: "", // for search
    start_time: "2025-01-15T15:30:00.000+08:00",
    end_time: "2025-01-15T22:45:00.000+08:00",
    duration: 435, // in minutes
    max_attendees: 100,
    attendee_count: 27,
    is_public: false, // true = searchable, false = link only/manual
    created_at: "2024-11-23T19:55:12.000+08:00",
    updated_at: "2024-11-23T19:55:12.000+08:00",
    closed_at: "2024-12-15T19:30:00.000+08:00", // determines when registration period ends.
    status: "Open", // whether users can register for an event or not
  },

  {
    event_id: 2,
    category_id: 3,
    organizer: 1,
    title: "Reeces Pieces",
    desc: "Monthly Podcast by Reece Sergei Lim",
    date: "2024-12-10T19:00:00.000+08:00",
    address: "MR Hall, University of San Carlos Talamban Campus",
    event_image_url: "",
    event_icon_url: "",
    start_time: "2024-12-10T19:00:00.000+08:00",
    end_time: "2024-12-10T20:30:00.000+08:00",
    duration: 90,
    max_attendees: 500,
    attendee_count: 493,
    is_public: true,
    created_at: "2024-11-25T19:55:12.000+08:00",
    updated_at: "2024-11-25T19:55:12.000+08:00",
    closed_at: "2024-11-30T20:30:00.000+08:00",
    status: "Closed",
  },
  {
    event_id: 3,
    category_id: 1,
    organizer: 3,
    title: "Fitness Bootcamp with Philip Go",
    desc: "An intensive fitness bootcamp to help you achieve your health goals.",
    date: "2024-12-20T06:00:00.000+08:00",
    address: "Cebu City Sports Complex",
    event_image_url: "",
    event_icon_url: "",
    start_time: "2024-12-20T06:00:00.000+08:00",
    end_time: "2024-12-20T09:00:00.000+08:00",
    duration: 180,
    max_attendees: 150,
    attendee_count: 80,
    is_public: true,
    created_at: "2024-11-26T10:00:00.000+08:00",
    updated_at: "2024-11-26T10:00:00.000+08:00",
    closed_at: "2024-12-15T23:59:00.000+08:00",
    status: "Open",
  },
  {
    event_id: 4,
    category_id: 2,
    organizer: 2,
    title: "Angelo & Reece Anniversary Party",
    desc: "Celebrating a year of love and happiness.",
    date: "2024-12-05T18:00:00.000+08:00",
    address: "Radisson Blu Cebu",
    event_image_url: "",
    event_icon_url: "",
    start_time: "2024-12-05T18:00:00.000+08:00",
    end_time: "2024-12-05T23:00:00.000+08:00",
    duration: 300,
    max_attendees: 200,
    attendee_count: 180,
    is_public: false,
    created_at: "2024-11-24T09:00:00.000+08:00",
    updated_at: "2024-11-24T09:00:00.000+08:00",
    closed_at: "2024-11-30T23:59:00.000+08:00",
    status: "Open",
  },
  {
    event_id: 5,
    category_id: 3,
    organizer: 1,
    title: "Tech Talk by Reece Lim",
    desc: "Join Reece Lim as he shares insights on emerging technologies.",
    date: "2025-01-05T14:00:00.000+08:00",
    address: "USC Main Auditorium",
    event_image_url: "",
    event_icon_url: "",
    start_time: "2025-01-05T14:00:00.000+08:00",
    end_time: "2025-01-05T16:00:00.000+08:00",
    duration: 120,
    max_attendees: 300,
    attendee_count: 290,
    is_public: true,
    created_at: "2024-11-27T11:00:00.000+08:00",
    updated_at: "2024-11-27T11:00:00.000+08:00",
    closed_at: "2025-01-01T23:59:00.000+08:00",
    status: "Open",
  }
];

export const category = [
  {
    category_id: 1,
    category_name: "Physical and Wellness",
    desc: "Events that are primarily physical or focus on the wellbeing of a person. Marathons, yoga, etc. are part of this category.",
  },
  {
    category_id: 2,
    category_name: "Weddings",
    desc: "The celebration of two people coming together as one.",
  },
  {
    category_id: 3,
    category_name: "Talk Shows, Podcasts",
    desc: "Listen to someone talk for hours on end.",
  },
];

export const rsvps = [
  {
    rsvp_id: 1,
    user_id: 3,
    event_id: 1,
    status: "Attending",
    rsvp_date: "2024-11-26T19:00:10.000+08:00",
    notes: "unlimited food please",
  },
  {
    rsvp_id: 2,
    user_id: 3,
    event_id: 2,
    status: "Attending",
    rsvp_date: "2024-11-26T19:12:24.000+08:00",
    notes: "Hi Reece.",
  },
  {
    rsvp_id: 3,
    user_id: 1,
    event_id: 1,
    status: "Attending",
    rsvp_date: "2024-11-28T14:23:30.000+08:00",
    notes: "Hi Angelo.",
  },
];

export const notifications = [
  {
    notification_id: 1,
    user_id: 1,
    event_id: 1,
    message: "Your RSVP for Angelo Pumar's Wedding has been confirmed.",
    status: "unread",
    sent_at: "2024-11-28T10:30:00.000+08:00",
    read_at: null
  },
  {
    notification_id: 2,
    user_id: 2,
    event_id: 2,
    message: "Reminder: Reece's Pieces Podcast starts in 1 hour.",
    status: "read",
    sent_at: "2024-12-10T18:00:00.000+08:00",
    read_at: "2024-12-10T18:15:00.000+08:00"
  }
]
// add the rest of the table data in server/placeholder-data.ts

