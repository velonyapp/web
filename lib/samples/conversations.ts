import * as z from "zod"

import {
  ConversationSchema,
  type Conversation,
} from "@/features/conversations/schemas/conversation"

export const sampleConversations = z.map(z.string(), ConversationSchema).parse(
  new Map<string, Conversation>([
    [
      "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74",
      {
        name: "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74",
        title: "The Boys",
        description:
          "Our little corner for random conversations, memes, weekend plans, and everything else.",
        lastMessage:
          "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/2a91c6e4-3f80-4b7d-9e52-1c6a08d4f739",
        createTime: new Date("2026-11-12T02:34:00Z"),
        updateTime: new Date("2026-11-12T02:34:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63",
        title: "Certified Yappers",
        description:
          "No particular topic, no particular rules. Just people talking about whatever comes to mind.",
        lastMessage:
          "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/727b38e9-2574-5621-8c52-45909030b3f4",
        createTime: new Date("2026-11-11T07:48:00Z"),
        updateTime: new Date("2026-11-15T13:25:56Z"),
      },
    ],
    [
      "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204",
      {
        name: "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204",
        title: "Weekend Plans",
        description:
          "Planning weekend activities, spontaneous trips, and places we want to explore together.",
        lastMessage:
          "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/4e83a1c6-2d95-4f70-b8a3-6c21d9e05f74",
        createTime: new Date("2026-11-10T08:00:00Z"),
        updateTime: new Date("2026-11-10T08:00:00Z"),
      },
    ],
    [
      "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48",
      {
        name: "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48",
        title: "Skill Issue",
        description:
          "Gaming sessions, team coordination, game recommendations, and occasional trash talk.",
        lastMessage:
          "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/9f60b2d1-8c47-4a53-ae26-3d75c0f91864",
        createTime: new Date("2026-11-10T07:00:00Z"),
        updateTime: new Date("2026-11-10T07:00:00Z"),
      },
    ],
    [
      "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615",
      {
        name: "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615",
        title: "Family Group ❤️",
        description:
          "Keeping the family connected, sharing photos, and making sure nobody misses important updates.",
        lastMessage:
          "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615/messages/1c78e4a9-6b32-4d85-9f01-a52d3e7b6048",
        createTime: new Date("2026-11-09T08:00:00Z"),
        updateTime: new Date("2026-11-09T08:00:00Z"),
      },
    ],
    [
      "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954",
      {
        name: "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954",
        title: "Makan Mana?",
        description:
          "Rekomendasi tempat makan, kulineran bareng, dan debat panjang soal mau makan apa.",
        lastMessage:
          "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/5d29a8f1-0c73-4e64-b915-7a3f20d68c41",
        createTime: new Date("2026-11-08T07:00:00Z"),
        updateTime: new Date("2026-11-08T07:00:00Z"),
      },
    ],
    [
      "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48",
      {
        name: "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48",
        title: "Deadline Survivors",
        description:
          "A study group for assignments, shared notes, upcoming exams, and surviving another semester.",
        lastMessage:
          "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/8a16d3e5-4c92-4f70-b6e1-2d59a0c83764",
        createTime: new Date("2026-11-07T06:00:00Z"),
        updateTime: new Date("2026-11-07T06:00:00Z"),
      },
    ],
    [
      "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857",
      {
        name: "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857",
        title: "No Context Allowed",
        description:
          "Random pictures, cursed screenshots, inside jokes, and things that make absolutely no sense.",
        lastMessage:
          "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/3e71c9a4-8d25-4b60-af13-5c92d7e04861",
        createTime: new Date("2026-11-06T05:00:00Z"),
        updateTime: new Date("2026-11-06T05:00:00Z"),
      },
    ],
    [
      "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64",
      {
        name: "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64",
        title: "People Who Never Reply",
        description:
          "An old friend group that occasionally comes back to life whenever someone has something interesting to share.",
        lastMessage:
          "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/6f82a1d3-9b40-4e75-ac26-1d53f8e09764",
        createTime: new Date("2026-11-05T04:00:00Z"),
        updateTime: new Date("2026-11-05T04:00:00Z"),
      },
    ],
    [
      "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40",
      {
        name: "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40",
        title: "Movie Night 🍿",
        description:
          "Movie recommendations, watch parties, reviews, and discussions about our favorite films.",
        lastMessage:
          "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40/messages/2d85f1a9-6c43-4b70-9e12-8a36d0f52794",
        createTime: new Date("2026-11-04T03:00:00Z"),
        updateTime: new Date("2026-11-04T03:00:00Z"),
      },
    ],
    [
      "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954",
      {
        name: "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954",
        title: "Frontend Developers",
        description:
          "Discussing frontend development, UI design, frameworks, performance, and everything JavaScript.",
        lastMessage:
          "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/3f74c1a8-2b69-4d50-ae13-8c95f0d62741",
        createTime: new Date("2026-11-03T12:00:00Z"),
        updateTime: new Date("2026-11-03T12:00:00Z"),
      },
    ],
    [
      "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5",
      {
        name: "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5",
        title: "Project Phoenix",
        description:
          "Team discussions, technical decisions, progress updates, and coordination for Project Phoenix.",
        lastMessage:
          "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/0e91d5a7-4c32-4f68-b2a5-7d03e9c61482",
        createTime: new Date("2026-11-02T09:30:00Z"),
        updateTime: new Date("2026-11-02T09:30:00Z"),
      },
    ],
    [
      "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72",
      {
        name: "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72",
        title: "Design Feedback",
        description:
          "A space for sharing mockups, reviewing designs, and collecting feedback on ongoing work.",
        lastMessage:
          "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/6b20e1d9-3a75-4f84-bc12-9e06d5a72843",
        createTime: new Date("2026-11-01T14:20:00Z"),
        updateTime: new Date("2026-11-01T14:20:00Z"),
      },
    ],
    [
      "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694",
      {
        name: "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694",
        title: "Random",
        description: "",
        lastMessage:
          "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694/messages/4d18a9e2-7c53-4f60-b1e8-9a25d0c63741",
        createTime: new Date("2026-10-30T11:00:00Z"),
        updateTime: new Date("2026-10-30T11:00:00Z"),
      },
    ],
    [
      "conversations/2a9f61d8-4c73-4e50-b8d1-6f20a95e3c74",
      {
        name: "conversations/2a9f61d8-4c73-4e50-b8d1-6f20a95e3c74",
        title: "New Group",
        description: "",
        createTime: new Date("2026-10-29T08:00:00Z"),
        updateTime: new Date("2026-10-29T08:00:00Z"),
      },
    ],
    [
      "conversations/9c31d7a5-0e62-4f84-a9b1-3d75e20c6f48",
      {
        name: "conversations/9c31d7a5-0e62-4f84-a9b1-3d75e20c6f48",
        title: "Book Club",
        description:
          "Reading together, recommending books, and discussing stories, authors, and interesting ideas.",
        createTime: new Date("2026-10-28T10:15:00Z"),
        updateTime: new Date("2026-10-28T10:15:00Z"),
      },
    ],
    [
      "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74",
      {
        name: "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74",
        title: "Travel Buddies ✈️",
        description:
          "Planning future adventures, comparing destinations, and sharing travel tips and recommendations.",
        lastMessage:
          "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/8e25c0a7-1d94-4b63-af72-5c08e6d31941",
        createTime: new Date("2026-10-27T13:40:00Z"),
        updateTime: new Date("2026-10-27T13:40:00Z"),
      },
    ],
    [
      "conversations/6f0a28d3-9c41-4e75-a3b8-1d92f60c7e54",
      {
        name: "conversations/6f0a28d3-9c41-4e75-a3b8-1d92f60c7e54",
        title: "Untitled Conversation",
        description: "",
        createTime: new Date("2026-10-26T06:00:00Z"),
        updateTime: new Date("2026-10-26T06:00:00Z"),
      },
    ],
    [
      "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48",
      {
        name: "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48",
        title: "Photography Enthusiasts",
        description:
          "Sharing photography work, discussing equipment, editing techniques, and organizing photo walks.",
        lastMessage:
          "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/7c91e4a0-2d63-4f85-b1e9-6a30d8c52741",
        createTime: new Date("2026-10-25T09:20:00Z"),
        updateTime: new Date("2026-10-25T09:20:00Z"),
      },
    ],
    [
      "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64",
      {
        name: "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64",
        title: "Gym Accountability",
        description:
          "Tracking fitness goals, sharing workout routines, and keeping each other motivated.",
        lastMessage:
          "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/5a63d1e8-9c20-4f74-b6e1-3d95a0c82741",
        createTime: new Date("2026-10-24T07:45:00Z"),
        updateTime: new Date("2026-10-24T07:45:00Z"),
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
        lastMessage:
          "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64/messages/1f84d3a7-6c29-4e50-b9d1-8a63c0e52794",
        createTime: new Date("2026-10-23T16:00:00Z"),
        updateTime: new Date("2026-10-23T16:00:00Z"),
      },
    ],
    [
      "conversations/5a72d1e9-8c30-4f64-b2a5-0e91d7c63f48",
      {
        name: "conversations/5a72d1e9-8c30-4f64-b2a5-0e91d7c63f48",
        title: "Music Recommendations 🎧",
        description:
          "Sharing favorite songs, discovering new artists, discussing albums, and putting together collaborative playlists.",
        createTime: new Date("2026-10-22T12:30:00Z"),
        updateTime: new Date("2026-10-22T12:30:00Z"),
      },
    ],
    [
      "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64",
      {
        name: "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64",
        title: "日本語の勉強会 🇯🇵",
        description:
          "日本語を練習したり、勉強のコツを共有したりするためのグループです。",
        lastMessage:
          "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64/messages/9e41a7c2-5d83-4f60-b1e9-0c72d6a35841",
        createTime: new Date("2026-10-21T05:15:00Z"),
        updateTime: new Date("2026-10-21T05:15:00Z"),
      },
    ],
    [
      "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64",
      {
        name: "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64",
        title: "Archive 2025",
        description:
          "An archived discussion group containing old conversations, shared resources, and memories from 2025.",
        lastMessage:
          "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64/messages/4a82c1e7-6d39-4f50-b8e2-0c75d9a63148",
        createTime: new Date("2025-01-15T09:00:00Z"),
        updateTime: new Date("2025-12-30T18:45:00Z"),
      },
    ],
    [
      "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54",
      {
        name: "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54",
        title: "Empty Description Test",
        description: "",
        lastMessage:
          "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54/messages/6c20e9a1-4d75-4f83-b2e8-1a93d0c65742",
        createTime: new Date("2026-10-20T10:00:00Z"),
        updateTime: new Date("2026-10-20T10:00:00Z"),
      },
    ],
    [
      "conversations/9f62c1a8-3d70-4e85-b2a9-6c41d0e73f25",
      {
        name: "conversations/9f62c1a8-3d70-4e85-b2a9-6c41d0e73f25",
        title: "Planning Committee",
        description:
          "Coordinating upcoming community events, assigning responsibilities, and tracking preparations.",
        createTime: new Date("2026-10-19T08:30:00Z"),
        updateTime: new Date("2026-10-19T08:30:00Z"),
      },
    ],
  ])
)
