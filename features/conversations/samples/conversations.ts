import type * as z from "zod"

import type { ConversationSchema } from "@/features/conversations/schemas/conversation"

export const sampleConversations = new Map<
  string,
  z.input<typeof ConversationSchema>
>([
  [
    "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74",
    {
      name: "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74",
      title: "The Boys",
      description:
        "Our little corner for random conversations, memes, weekend plans, and everything else.",
      createTime: "2026-11-12T02:34:00Z",
      updateTime: "2026-11-12T02:34:00Z",
    },
  ],
  [
    "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63",
    {
      name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63",
      title: "Certified Yappers",
      description:
        "No particular topic, no particular rules. Just people talking about whatever comes to mind.",
      createTime: "2026-11-11T07:48:00Z",
      updateTime: "2026-11-15T14:36:01Z",
    },
  ],
  [
    "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204",
    {
      name: "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204",
      title: "Weekend Plans",
      description:
        "Planning weekend activities, spontaneous trips, and places we want to explore together.",
      createTime: "2026-11-10T08:00:00Z",
      updateTime: "2026-11-10T08:00:00Z",
    },
  ],
  [
    "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48",
    {
      name: "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48",
      title: "Skill Issue",
      description:
        "Gaming sessions, team coordination, game recommendations, and occasional trash talk.",
      createTime: "2026-11-10T07:00:00Z",
      updateTime: "2026-11-10T07:00:00Z",
    },
  ],
  [
    "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615",
    {
      name: "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615",
      title: "Family Group ❤️",
      description:
        "Keeping the family connected, sharing photos, and making sure nobody misses important updates.",
      createTime: "2026-11-09T08:00:00Z",
      updateTime: "2026-11-09T08:00:00Z",
    },
  ],
  [
    "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954",
    {
      name: "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954",
      title: "Makan Mana?",
      description:
        "Rekomendasi tempat makan, kulineran bareng, dan debat panjang soal mau makan apa.",
      createTime: "2026-11-08T07:00:00Z",
      updateTime: "2026-11-08T07:00:00Z",
    },
  ],
  [
    "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48",
    {
      name: "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48",
      title: "Deadline Survivors",
      description:
        "A study group for assignments, shared notes, upcoming exams, and surviving another semester.",
      createTime: "2026-11-07T06:00:00Z",
      updateTime: "2026-11-07T06:00:00Z",
    },
  ],
  [
    "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857",
    {
      name: "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857",
      title: "No Context Allowed",
      description:
        "Random pictures, cursed screenshots, inside jokes, and things that make absolutely no sense.",
      createTime: "2026-11-06T05:00:00Z",
      updateTime: "2026-11-06T05:00:00Z",
    },
  ],
  [
    "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64",
    {
      name: "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64",
      title: "People Who Never Reply",
      description:
        "An old friend group that occasionally comes back to life whenever someone has something interesting to share.",
      createTime: "2026-11-05T04:00:00Z",
      updateTime: "2026-11-05T04:00:00Z",
    },
  ],
  [
    "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40",
    {
      name: "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40",
      title: "Movie Night 🍿",
      description:
        "Movie recommendations, watch parties, reviews, and discussions about our favorite films.",
      createTime: "2026-11-04T03:00:00Z",
      updateTime: "2026-11-04T03:00:00Z",
    },
  ],
  [
    "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954",
    {
      name: "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954",
      title: "Frontend Developers",
      description:
        "Discussing frontend development, UI design, frameworks, performance, and everything JavaScript.",
      createTime: "2026-11-03T12:00:00Z",
      updateTime: "2026-11-03T12:00:00Z",
    },
  ],
  [
    "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5",
    {
      name: "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5",
      title: "Project Phoenix",
      description:
        "Team discussions, technical decisions, progress updates, and coordination for Project Phoenix.",
      createTime: "2026-11-02T09:30:00Z",
      updateTime: "2026-11-02T09:30:00Z",
    },
  ],
  [
    "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72",
    {
      name: "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72",
      title: "Design Feedback",
      description:
        "A space for sharing mockups, reviewing designs, and collecting feedback on ongoing work.",
      createTime: "2026-11-01T14:20:00Z",
      updateTime: "2026-11-01T14:20:00Z",
    },
  ],
  [
    "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694",
    {
      name: "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694",
      title: "Random",
      description: "",
      createTime: "2026-10-30T11:00:00Z",
      updateTime: "2026-10-30T11:00:00Z",
    },
  ],
  [
    "conversations/2a9f61d8-4c73-4e50-b8d1-6f20a95e3c74",
    {
      name: "conversations/2a9f61d8-4c73-4e50-b8d1-6f20a95e3c74",
      title: "New Group",
      description: "",
      createTime: "2026-10-29T08:00:00Z",
      updateTime: "2026-10-29T08:00:00Z",
    },
  ],
  [
    "conversations/9c31d7a5-0e62-4f84-a9b1-3d75e20c6f48",
    {
      name: "conversations/9c31d7a5-0e62-4f84-a9b1-3d75e20c6f48",
      title: "Book Club",
      description:
        "Reading together, recommending books, and discussing stories, authors, and interesting ideas.",
      createTime: "2026-10-28T10:15:00Z",
      updateTime: "2026-10-28T10:15:00Z",
    },
  ],
  [
    "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74",
    {
      name: "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74",
      title: "Travel Buddies ✈️",
      description:
        "Planning future adventures, comparing destinations, and sharing travel tips and recommendations.",
      createTime: "2026-10-27T13:40:00Z",
      updateTime: "2026-10-27T13:40:00Z",
    },
  ],
  [
    "conversations/6f0a28d3-9c41-4e75-a3b8-1d92f60c7e54",
    {
      name: "conversations/6f0a28d3-9c41-4e75-a3b8-1d92f60c7e54",
      title: "Untitled Conversation",
      description: "",
      createTime: "2026-10-26T06:00:00Z",
      updateTime: "2026-10-26T06:00:00Z",
    },
  ],
  [
    "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48",
    {
      name: "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48",
      title: "Photography Enthusiasts",
      description:
        "Sharing photography work, discussing equipment, editing techniques, and organizing photo walks.",
      createTime: "2026-10-25T09:20:00Z",
      updateTime: "2026-10-25T09:20:00Z",
    },
  ],
  [
    "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64",
    {
      name: "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64",
      title: "Gym Accountability",
      description:
        "Tracking fitness goals, sharing workout routines, and keeping each other motivated.",
      createTime: "2026-10-24T07:45:00Z",
      updateTime: "2026-10-24T07:45:00Z",
    },
  ],
  [
    "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64",
    {
      name: "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64",
      title:
        "This Is An Extremely Long Group Conversation Title That Should Test Text Truncation And Overflow Behavior",
      description:
        "A conversation specifically created to test how the interface handles unusually long titles, particularly in narrow layouts and smaller screens.",
      createTime: "2026-10-23T16:00:00Z",
      updateTime: "2026-10-23T16:00:00Z",
    },
  ],
  [
    "conversations/5a72d1e9-8c30-4f64-b2a5-0e91d7c63f48",
    {
      name: "conversations/5a72d1e9-8c30-4f64-b2a5-0e91d7c63f48",
      title: "Music Recommendations 🎧",
      description:
        "Sharing favorite songs, discovering new artists, discussing albums, and putting together collaborative playlists.",
      createTime: "2026-10-22T12:30:00Z",
      updateTime: "2026-10-22T12:30:00Z",
    },
  ],
  [
    "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64",
    {
      name: "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64",
      title: "日本語の勉強会 🇯🇵",
      description:
        "日本語を練習したり、勉強のコツを共有したりするためのグループです。",
      createTime: "2026-10-21T05:15:00Z",
      updateTime: "2026-10-21T05:15:00Z",
    },
  ],
  [
    "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64",
    {
      name: "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64",
      title: "Archive 2025",
      description:
        "An archived discussion group containing old conversations, shared resources, and memories from 2025.",
      createTime: "2025-01-15T09:00:00Z",
      updateTime: "2025-12-30T18:45:00Z",
    },
  ],
  [
    "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54",
    {
      name: "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54",
      title: "Empty Description Test",
      description: "",
      createTime: "2026-10-20T10:00:00Z",
      updateTime: "2026-10-20T10:00:00Z",
    },
  ],
  [
    "conversations/9f62c1a8-3d70-4e85-b2a9-6c41d0e73f25",
    {
      name: "conversations/9f62c1a8-3d70-4e85-b2a9-6c41d0e73f25",
      title: "Planning Committee",
      description:
        "Coordinating upcoming community events, assigning responsibilities, and tracking preparations.",
      createTime: "2026-10-19T08:30:00Z",
      updateTime: "2026-10-19T08:30:00Z",
    },
  ],
])
