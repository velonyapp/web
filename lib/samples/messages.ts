import * as z from "zod"

import {
  MessageSchema,
  type Message,
} from "@/features/messages/schemas/message"

export const sampleMessages = z.map(z.string(), MessageSchema).parse(
  new Map<string, Message>([
    // The Boys
    [
      "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/d034e2b5-2140-4cb5-81ab-13dfca100351",
      {
        name: "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/d034e2b5-2140-4cb5-81ab-13dfca100351",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "anyone free for futsal tonight?",
        createTime: new Date("2026-11-12T02:22:00Z"),
        updateTime: new Date("2026-11-12T02:22:00Z"),
      },
    ],
    [
      "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/d3956005-9bfb-49ef-89c1-555cfa7efd3b",
      {
        name: "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/d3956005-9bfb-49ef-89c1-555cfa7efd3b",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "I can do after 8",
        createTime: new Date("2026-11-12T02:25:00Z"),
        updateTime: new Date("2026-11-12T02:25:00Z"),
      },
    ],
    [
      "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/509b3727-a9ef-4508-9f7c-ca3026ded21d",
      {
        name: "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/509b3727-a9ef-4508-9f7c-ca3026ded21d",
        user: "users/46f2e983-8064-4e31-9b9a-a241870ed0c6",
        content: "same. where are we playing?",
        createTime: new Date("2026-11-12T02:28:00Z"),
        updateTime: new Date("2026-11-12T02:28:00Z"),
      },
    ],
    [
      "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/7ab6cdc4-f169-4578-af54-03bae3802ee0",
      {
        name: "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/7ab6cdc4-f169-4578-af54-03bae3802ee0",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "court near the station still has slots",
        createTime: new Date("2026-11-12T02:31:00Z"),
        updateTime: new Date("2026-11-12T02:31:00Z"),
      },
    ],
    [
      "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/2a91c6e4-3f80-4b7d-9e52-1c6a08d4f739",
      {
        name: "conversations/8d6f0a21-4b7e-4c93-a1d5-29f8e0b63c74/messages/2a91c6e4-3f80-4b7d-9e52-1c6a08d4f739",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "booked 8:30. don't make me play 3v5 again 💀",
        createTime: new Date("2026-11-12T02:34:00Z"),
        updateTime: new Date("2026-11-12T02:34:00Z"),
      },
    ],

    // Certified Yappers
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a3249a89-beb3-49f3-80c6-f777b56ae2d5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a3249a89-beb3-49f3-80c6-f777b56ae2d5",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "GUYS I HAVE NEWS",
        createTime: new Date("2026-11-11T07:48:00Z"),
        updateTime: new Date("2026-11-11T07:48:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/affcfe46-23bc-4cf6-ae6d-910cbf32aa14",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/affcfe46-23bc-4cf6-ae6d-910cbf32aa14",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "why are you shouting 😭",
        createTime: new Date("2026-11-11T07:51:00Z"),
        updateTime: new Date("2026-11-11T07:51:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bf0251af-a534-4525-b82a-7bc3f5a7554f",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bf0251af-a534-4525-b82a-7bc3f5a7554f",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "remember the guy who said he would never text his ex again",
        createTime: new Date("2026-11-11T07:54:00Z"),
        updateTime: new Date("2026-11-11T07:54:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/433fdfb8-c6c3-4f62-8984-7cdce384568a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/433fdfb8-c6c3-4f62-8984-7cdce384568a",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "oh no",
        createTime: new Date("2026-11-11T07:57:00Z"),
        updateTime: new Date("2026-11-11T07:57:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7b4d1e90-5a63-4f28-bc17-9e03d6a85241",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7b4d1e90-5a63-4f28-bc17-9e03d6a85241",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "HE TEXTED HER DIDN’T HE",
        createTime: new Date("2026-11-11T08:00:00Z"),
        updateTime: new Date("2026-11-11T08:00:00Z"),
      },
    ],

    // Weekend Plans
    [
      "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/8ad1e086-68cd-48e3-82e1-26689bde7fb0",
      {
        name: "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/8ad1e086-68cd-48e3-82e1-26689bde7fb0",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "saturday plan? or are we canceling again",
        createTime: new Date("2026-11-10T07:48:00Z"),
        updateTime: new Date("2026-11-10T07:48:00Z"),
      },
    ],
    [
      "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/a48efe58-305d-43b3-9b95-3d9fdac5d803",
      {
        name: "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/a48efe58-305d-43b3-9b95-3d9fdac5d803",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "beach?",
        createTime: new Date("2026-11-10T07:51:00Z"),
        updateTime: new Date("2026-11-10T07:51:00Z"),
      },
    ],
    [
      "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/428b91a4-c54e-49f2-b231-62b7c99f0f30",
      {
        name: "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/428b91a4-c54e-49f2-b231-62b7c99f0f30",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "it is literally raining every day",
        createTime: new Date("2026-11-10T07:54:00Z"),
        updateTime: new Date("2026-11-10T07:54:00Z"),
      },
    ],
    [
      "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/714233d4-bde4-43ef-afdb-1c5347053dc6",
      {
        name: "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/714233d4-bde4-43ef-afdb-1c5347053dc6",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "what if we rent a place and just cook together",
        createTime: new Date("2026-11-10T07:57:00Z"),
        updateTime: new Date("2026-11-10T07:57:00Z"),
      },
    ],
    [
      "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/4e83a1c6-2d95-4f70-b8a3-6c21d9e05f74",
      {
        name: "conversations/f2a74d91-0b63-4e58-9c12-7d85a3e6f204/messages/4e83a1c6-2d95-4f70-b8a3-6c21d9e05f74",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "that sounds way better. i'll send a few options tonight",
        createTime: new Date("2026-11-10T08:00:00Z"),
        updateTime: new Date("2026-11-10T08:00:00Z"),
      },
    ],

    // Skill Issue
    [
      "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/02c1dd99-894f-49c3-b1f2-eaed71119bd4",
      {
        name: "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/02c1dd99-894f-49c3-b1f2-eaed71119bd4",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "queue ranked?",
        createTime: new Date("2026-11-10T06:48:00Z"),
        updateTime: new Date("2026-11-10T06:48:00Z"),
      },
    ],
    [
      "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/4738362d-772c-476c-9435-9fc17f433006",
      {
        name: "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/4738362d-772c-476c-9435-9fc17f433006",
        user: "users/46f2e983-8064-4e31-9b9a-a241870ed0c6",
        content: "we need one more",
        createTime: new Date("2026-11-10T06:51:00Z"),
        updateTime: new Date("2026-11-10T06:51:00Z"),
      },
    ],
    [
      "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/cbb1e1e5-16c7-4db3-a21f-435a19b7da42",
      {
        name: "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/cbb1e1e5-16c7-4db3-a21f-435a19b7da42",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "ryan is online",
        createTime: new Date("2026-11-10T06:54:00Z"),
        updateTime: new Date("2026-11-10T06:54:00Z"),
      },
    ],
    [
      "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/d75da62e-fa7d-4d7b-8fa5-264f7bafc1fa",
      {
        name: "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/d75da62e-fa7d-4d7b-8fa5-264f7bafc1fa",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "im literally in the lobby",
        createTime: new Date("2026-11-10T06:57:00Z"),
        updateTime: new Date("2026-11-10T06:57:00Z"),
      },
    ],
    [
      "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/9f60b2d1-8c47-4a53-ae26-3d75c0f91864",
      {
        name: "conversations/a5e20c87-9f31-4d64-b782-0c96e1a35f48/messages/9f60b2d1-8c47-4a53-ae26-3d75c0f91864",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "THEN ACCEPT THE INVITE",
        createTime: new Date("2026-11-10T07:00:00Z"),
        updateTime: new Date("2026-11-10T07:00:00Z"),
      },
    ],

    // Family Group
    [
      "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615/messages/749ae8ba-978d-4c27-9af7-ba7e30d9cad1",
      {
        name: "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615/messages/749ae8ba-978d-4c27-9af7-ba7e30d9cad1",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "everyone coming for dinner on Sunday?",
        createTime: new Date("2026-11-09T07:51:00Z"),
        updateTime: new Date("2026-11-09T07:51:00Z"),
      },
    ],
    [
      "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615/messages/17778c49-3570-4eea-a2b9-e0dc07c6fadc",
      {
        name: "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615/messages/17778c49-3570-4eea-a2b9-e0dc07c6fadc",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "yep, should be there around six",
        createTime: new Date("2026-11-09T07:54:00Z"),
        updateTime: new Date("2026-11-09T07:54:00Z"),
      },
    ],
    [
      "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615/messages/71fa3c3a-c816-4c3d-8f0f-f37a0e1380a0",
      {
        name: "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615/messages/71fa3c3a-c816-4c3d-8f0f-f37a0e1380a0",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "should I bring dessert?",
        createTime: new Date("2026-11-09T07:57:00Z"),
        updateTime: new Date("2026-11-09T07:57:00Z"),
      },
    ],
    [
      "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615/messages/1c78e4a9-6b32-4d85-9f01-a52d3e7b6048",
      {
        name: "conversations/6b3d18f2-7a90-4c51-8e46-d2f09a73b615/messages/1c78e4a9-6b32-4d85-9f01-a52d3e7b6048",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "yes please, that would be lovely ❤️",
        createTime: new Date("2026-11-09T08:00:00Z"),
        updateTime: new Date("2026-11-09T08:00:00Z"),
      },
    ],

    // Makan Mana?
    [
      "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/6c0d1e86-f389-4058-b2ab-a6ceb36543a0",
      {
        name: "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/6c0d1e86-f389-4058-b2ab-a6ceb36543a0",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "makan di mana abis kelas?",
        createTime: new Date("2026-11-08T06:48:00Z"),
        updateTime: new Date("2026-11-08T06:48:00Z"),
      },
    ],
    [
      "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/8de50133-e384-4a9c-802e-5ae94164b40a",
      {
        name: "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/8de50133-e384-4a9c-802e-5ae94164b40a",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "bebas sih",
        createTime: new Date("2026-11-08T06:51:00Z"),
        updateTime: new Date("2026-11-08T06:51:00Z"),
      },
    ],
    [
      "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/f7ad49b5-9bea-4084-abf3-d9217697bce2",
      {
        name: "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/f7ad49b5-9bea-4084-abf3-d9217697bce2",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "jangan jawab bebas 😭",
        createTime: new Date("2026-11-08T06:54:00Z"),
        updateTime: new Date("2026-11-08T06:54:00Z"),
      },
    ],
    [
      "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/38ebf5f1-c26f-4e8a-a5c2-4b404e4dfb31",
      {
        name: "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/38ebf5f1-c26f-4e8a-a5c2-4b404e4dfb31",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "ayam bakar depan kampus?",
        createTime: new Date("2026-11-08T06:57:00Z"),
        updateTime: new Date("2026-11-08T06:57:00Z"),
      },
    ],
    [
      "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/5d29a8f1-0c73-4e64-b915-7a3f20d68c41",
      {
        name: "conversations/c7f49a20-1e63-4b85-9d72-a0e36f18c954/messages/5d29a8f1-0c73-4e64-b915-7a3f20d68c41",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "gas, aku nyusul 10 menit lagi",
        createTime: new Date("2026-11-08T07:00:00Z"),
        updateTime: new Date("2026-11-08T07:00:00Z"),
      },
    ],

    // Deadline Survivors
    [
      "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/76eb245f-6175-4f99-91f2-ca5576a74b0b",
      {
        name: "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/76eb245f-6175-4f99-91f2-ca5576a74b0b",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "did anyone get question 4 to work?",
        createTime: new Date("2026-11-07T05:48:00Z"),
        updateTime: new Date("2026-11-07T05:48:00Z"),
      },
    ],
    [
      "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/e236338d-8900-4c35-9d9e-7cac47cc483f",
      {
        name: "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/e236338d-8900-4c35-9d9e-7cac47cc483f",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "mine keeps returning duplicate rows",
        createTime: new Date("2026-11-07T05:51:00Z"),
        updateTime: new Date("2026-11-07T05:51:00Z"),
      },
    ],
    [
      "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/56f475d9-0db5-44d8-87b1-64a8b72217bd",
      {
        name: "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/56f475d9-0db5-44d8-87b1-64a8b72217bd",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "did you forget the join condition",
        createTime: new Date("2026-11-07T05:54:00Z"),
        updateTime: new Date("2026-11-07T05:54:00Z"),
      },
    ],
    [
      "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/64544bbb-e7f9-4d03-b80b-3ba6c429587a",
      {
        name: "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/64544bbb-e7f9-4d03-b80b-3ba6c429587a",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "...yes 😭",
        createTime: new Date("2026-11-07T05:57:00Z"),
        updateTime: new Date("2026-11-07T05:57:00Z"),
      },
    ],
    [
      "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/8a16d3e5-4c92-4f70-b6e1-2d59a0c83764",
      {
        name: "conversations/91e5d3a7-2b60-4f84-ac19-6d72e0b35f48/messages/8a16d3e5-4c92-4f70-b6e1-2d59a0c83764",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "okay that fixed mine too thank you",
        createTime: new Date("2026-11-07T06:00:00Z"),
        updateTime: new Date("2026-11-07T06:00:00Z"),
      },
    ],

    // No Context Allowed
    [
      "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/960b88c7-d27e-448b-951e-eae78b9c0ed4",
      {
        name: "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/960b88c7-d27e-448b-951e-eae78b9c0ed4",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "found a photo of alex from 2019",
        createTime: new Date("2026-11-06T04:48:00Z"),
        updateTime: new Date("2026-11-06T04:48:00Z"),
      },
    ],
    [
      "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/5b856b13-ec94-4ee2-923b-e697914c8d11",
      {
        name: "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/5b856b13-ec94-4ee2-923b-e697914c8d11",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "NO",
        createTime: new Date("2026-11-06T04:51:00Z"),
        updateTime: new Date("2026-11-06T04:51:00Z"),
      },
    ],
    [
      "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/6892e789-b9f6-406b-9b2c-58553ba20719",
      {
        name: "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/6892e789-b9f6-406b-9b2c-58553ba20719",
        content: "A message was deleted.",
        createTime: new Date("2026-11-06T04:54:00Z"),
        updateTime: new Date("2026-11-06T04:54:00Z"),
      },
    ],
    [
      "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/e0b8a2ec-7c6f-439f-a4fe-c095fb036eb5",
      {
        name: "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/e0b8a2ec-7c6f-439f-a4fe-c095fb036eb5",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "WHAT DID I MISS",
        createTime: new Date("2026-11-06T04:57:00Z"),
        updateTime: new Date("2026-11-06T04:57:00Z"),
      },
    ],
    [
      "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/3e71c9a4-8d25-4b60-af13-5c92d7e04861",
      {
        name: "conversations/4a0f89c2-6e31-4b75-9d48-f1a63e20c857/messages/3e71c9a4-8d25-4b60-af13-5c92d7e04861",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "nothing you can ever unsee",
        createTime: new Date("2026-11-06T05:00:00Z"),
        updateTime: new Date("2026-11-06T05:00:00Z"),
      },
    ],

    // People Who Never Reply
    [
      "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/390e027a-1161-408d-9e6a-1ff1b498bdde",
      {
        name: "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/390e027a-1161-408d-9e6a-1ff1b498bdde",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "is anybody still in this group",
        createTime: new Date("2026-11-05T03:48:00Z"),
        updateTime: new Date("2026-11-05T03:48:00Z"),
      },
    ],
    [
      "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/dd991045-e822-48d4-a62c-3d5c54890e0c",
      {
        name: "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/dd991045-e822-48d4-a62c-3d5c54890e0c",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "somehow yes",
        createTime: new Date("2026-11-05T03:51:00Z"),
        updateTime: new Date("2026-11-05T03:51:00Z"),
      },
    ],
    [
      "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/bed1833c-26a0-4e0b-b5c8-2689dc0af44b",
      {
        name: "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/bed1833c-26a0-4e0b-b5c8-2689dc0af44b",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "we should meet up before the year ends",
        createTime: new Date("2026-11-05T03:54:00Z"),
        updateTime: new Date("2026-11-05T03:54:00Z"),
      },
    ],
    [
      "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/5f3cde83-642f-446e-82c8-9281b7fd55f3",
      {
        name: "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/5f3cde83-642f-446e-82c8-9281b7fd55f3",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "we have said that every year since 2022",
        createTime: new Date("2026-11-05T03:57:00Z"),
        updateTime: new Date("2026-11-05T03:57:00Z"),
      },
    ],
    [
      "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/6f82a1d3-9b40-4e75-ac26-1d53f8e09764",
      {
        name: "conversations/e3b62d90-5c17-4a84-bf39-8d01e7c25a64/messages/6f82a1d3-9b40-4e75-ac26-1d53f8e09764",
        content: "A member left the group.",
        createTime: new Date("2026-11-05T04:00:00Z"),
        updateTime: new Date("2026-11-05T04:00:00Z"),
      },
    ],

    // Movie Night
    [
      "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40/messages/7798bfa1-375d-438b-85f2-0fbfddc9d8c8",
      {
        name: "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40/messages/7798bfa1-375d-438b-85f2-0fbfddc9d8c8",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "everyone watched it yet?",
        createTime: new Date("2026-11-04T02:51:00Z"),
        updateTime: new Date("2026-11-04T02:51:00Z"),
      },
    ],
    [
      "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40/messages/62db4db1-f154-4582-9ec5-39b958a4c30a",
      {
        name: "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40/messages/62db4db1-f154-4582-9ec5-39b958a4c30a",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "yes and I NEED to talk about that ending",
        createTime: new Date("2026-11-04T02:54:00Z"),
        updateTime: new Date("2026-11-04T02:54:00Z"),
      },
    ],
    [
      "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40/messages/626f61f3-f1e1-430f-884e-e853e731488c",
      {
        name: "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40/messages/626f61f3-f1e1-430f-884e-e853e731488c",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "NO SPOILERS I HAVE 20 MINUTES LEFT",
        createTime: new Date("2026-11-04T02:57:00Z"),
        updateTime: new Date("2026-11-04T02:57:00Z"),
      },
    ],
    [
      "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40/messages/2d85f1a9-6c43-4b70-9e12-8a36d0f52794",
      {
        name: "conversations/7f21c8a4-0d63-4e95-b2a7-5c91f6d38e40/messages/2d85f1a9-6c43-4b70-9e12-8a36d0f52794",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "okay we can wait 😂",
        createTime: new Date("2026-11-04T03:00:00Z"),
        updateTime: new Date("2026-11-04T03:00:00Z"),
      },
    ],

    // Frontend Developers
    [
      "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/8929cf5b-b2c4-4444-a4e8-d3c90d6b4839",
      {
        name: "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/8929cf5b-b2c4-4444-a4e8-d3c90d6b4839",
        user: "users/46f2e983-8064-4e31-9b9a-a241870ed0c6",
        content: "has anyone tried the React compiler in production?",
        createTime: new Date("2026-11-03T11:48:00Z"),
        updateTime: new Date("2026-11-03T11:48:00Z"),
      },
    ],
    [
      "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/84f31f2b-2ef5-4088-b380-0d9b1d8af60a",
      {
        name: "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/84f31f2b-2ef5-4088-b380-0d9b1d8af60a",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "only on an internal dashboard",
        createTime: new Date("2026-11-03T11:51:00Z"),
        updateTime: new Date("2026-11-03T11:51:00Z"),
      },
    ],
    [
      "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/b603d3cf-7087-4b23-a578-e0670419b41c",
      {
        name: "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/b603d3cf-7087-4b23-a578-e0670419b41c",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "did it actually improve anything?",
        createTime: new Date("2026-11-03T11:54:00Z"),
        updateTime: new Date("2026-11-03T11:54:00Z"),
      },
    ],
    [
      "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/8c23647a-2125-4630-9e9b-1d2892c69b1e",
      {
        name: "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/8c23647a-2125-4630-9e9b-1d2892c69b1e",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "less manual memoization, perf looked about the same",
        createTime: new Date("2026-11-03T11:57:00Z"),
        updateTime: new Date("2026-11-03T11:57:00Z"),
      },
    ],
    [
      "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/3f74c1a8-2b69-4d50-ae13-8c95f0d62741",
      {
        name: "conversations/b1d29f60-4c75-4a83-9e16-f0c38d72a954/messages/3f74c1a8-2b69-4d50-ae13-8c95f0d62741",
        user: "users/46f2e983-8064-4e31-9b9a-a241870ed0c6",
        content: "fair. might try it on a small route first",
        createTime: new Date("2026-11-03T12:00:00Z"),
        updateTime: new Date("2026-11-03T12:00:00Z"),
      },
    ],

    // Project Phoenix
    [
      "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/a9e9beb0-b4b5-4361-84ea-01f67beb4169",
      {
        name: "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/a9e9beb0-b4b5-4361-84ea-01f67beb4169",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "pushed the pagination fix",
        createTime: new Date("2026-11-02T09:18:00Z"),
        updateTime: new Date("2026-11-02T09:18:00Z"),
      },
    ],
    [
      "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/a39dad69-c0ed-4601-ac7d-9dfb77666c27",
      {
        name: "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/a39dad69-c0ed-4601-ac7d-9dfb77666c27",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "does it handle an empty next cursor?",
        createTime: new Date("2026-11-02T09:21:00Z"),
        updateTime: new Date("2026-11-02T09:21:00Z"),
      },
    ],
    [
      "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/5053082c-3807-41a9-9452-9b929cf4112e",
      {
        name: "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/5053082c-3807-41a9-9452-9b929cf4112e",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "yep, tested both empty and expired cursors",
        createTime: new Date("2026-11-02T09:24:00Z"),
        updateTime: new Date("2026-11-02T09:24:00Z"),
      },
    ],
    [
      "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/c944bf48-06b4-4155-97be-3bd29346c283",
      {
        name: "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/c944bf48-06b4-4155-97be-3bd29346c283",
        user: "users/46f2e983-8064-4e31-9b9a-a241870ed0c6",
        content: "trying it with the frontend now",
        createTime: new Date("2026-11-02T09:27:00Z"),
        updateTime: new Date("2026-11-02T09:27:00Z"),
      },
    ],
    [
      "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/0e91d5a7-4c32-4f68-b2a5-7d03e9c61482",
      {
        name: "conversations/d8a30e71-5f42-4c96-b1e7-29f64a0d83c5/messages/0e91d5a7-4c32-4f68-b2a5-7d03e9c61482",
        user: "users/46f2e983-8064-4e31-9b9a-a241870ed0c6",
        content: "works on my end. nice one",
        createTime: new Date("2026-11-02T09:30:00Z"),
        updateTime: new Date("2026-11-02T09:30:00Z"),
      },
    ],

    // Design Feedback
    [
      "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/02e773b0-0702-4d3d-8b2d-2df08f62c820",
      {
        name: "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/02e773b0-0702-4d3d-8b2d-2df08f62c820",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "new sidebar version is up in the file",
        createTime: new Date("2026-11-01T14:08:00Z"),
        updateTime: new Date("2026-11-01T14:08:00Z"),
      },
    ],
    [
      "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/ee1c031d-01c0-427f-a8f4-8988f1201798",
      {
        name: "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/ee1c031d-01c0-427f-a8f4-8988f1201798",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "spacing is so much better",
        createTime: new Date("2026-11-01T14:11:00Z"),
        updateTime: new Date("2026-11-01T14:11:00Z"),
      },
    ],
    [
      "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/8afccdd5-63fa-4a2b-a395-a5a8642b84eb",
      {
        name: "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/8afccdd5-63fa-4a2b-a395-a5a8642b84eb",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "can we bump the active state contrast a little?",
        createTime: new Date("2026-11-01T14:14:00Z"),
        updateTime: new Date("2026-11-01T14:14:00Z"),
      },
    ],
    [
      "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/85a1684d-e1fb-4ad0-bfd1-19dee6cce3a6",
      {
        name: "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/85a1684d-e1fb-4ad0-bfd1-19dee6cce3a6",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "good catch, updating it now",
        createTime: new Date("2026-11-01T14:17:00Z"),
        updateTime: new Date("2026-11-01T14:17:00Z"),
      },
    ],
    [
      "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/6b20e1d9-3a75-4f84-bc12-9e06d5a72843",
      {
        name: "conversations/5e82c1a9-3d70-4f65-a2b8-91d4e6f03c72/messages/6b20e1d9-3a75-4f84-bc12-9e06d5a72843",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "the new icons are great btw",
        createTime: new Date("2026-11-01T14:20:00Z"),
        updateTime: new Date("2026-11-01T14:20:00Z"),
      },
    ],

    // Random
    [
      "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694/messages/58a2066e-6dd7-494e-89d9-3dbee0456ec6",
      {
        name: "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694/messages/58a2066e-6dd7-494e-89d9-3dbee0456ec6",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "does anyone remember where we parked",
        createTime: new Date("2026-10-30T10:51:00Z"),
        updateTime: new Date("2026-10-30T10:51:00Z"),
      },
    ],
    [
      "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694/messages/5513632f-b834-41db-974a-e393e377e93b",
      {
        name: "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694/messages/5513632f-b834-41db-974a-e393e377e93b",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "pretty sure level 3",
        createTime: new Date("2026-10-30T10:54:00Z"),
        updateTime: new Date("2026-10-30T10:54:00Z"),
      },
    ],
    [
      "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694/messages/c11749e1-7f4b-4532-a942-0a90eb975a60",
      {
        name: "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694/messages/c11749e1-7f4b-4532-a942-0a90eb975a60",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "no bro level 4",
        createTime: new Date("2026-10-30T10:57:00Z"),
        updateTime: new Date("2026-10-30T10:57:00Z"),
      },
    ],
    [
      "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694/messages/4d18a9e2-7c53-4f60-b1e8-9a25d0c63741",
      {
        name: "conversations/0f7a93c2-6e41-4b85-9d27-a8c50e13f694/messages/4d18a9e2-7c53-4f60-b1e8-9a25d0c63741",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "perfect. three adults and zero brain cells",
        createTime: new Date("2026-10-30T11:00:00Z"),
        updateTime: new Date("2026-10-30T11:00:00Z"),
      },
    ],

    // Travel Buddies
    [
      "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/6f428c1b-1a1c-483a-b597-68a7007507c4",
      {
        name: "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/6f428c1b-1a1c-483a-b597-68a7007507c4",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "what if we do Japan next year",
        createTime: new Date("2026-10-27T13:28:00Z"),
        updateTime: new Date("2026-10-27T13:28:00Z"),
      },
    ],
    [
      "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/a2794128-1a50-41a3-aaad-e2d31888b148",
      {
        name: "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/a2794128-1a50-41a3-aaad-e2d31888b148",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "YES. Kyoto please",
        createTime: new Date("2026-10-27T13:31:00Z"),
        updateTime: new Date("2026-10-27T13:31:00Z"),
      },
    ],
    [
      "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/17910569-c875-471c-ab65-4db6697badf0",
      {
        name: "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/17910569-c875-471c-ab65-4db6697badf0",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "depends how much flights cost",
        createTime: new Date("2026-10-27T13:34:00Z"),
        updateTime: new Date("2026-10-27T13:34:00Z"),
      },
    ],
    [
      "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/8b9ba555-8d5d-4701-9aee-0d120d363908",
      {
        name: "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/8b9ba555-8d5d-4701-9aee-0d120d363908",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "we can start saving now",
        createTime: new Date("2026-10-27T13:37:00Z"),
        updateTime: new Date("2026-10-27T13:37:00Z"),
      },
    ],
    [
      "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/8e25c0a7-1d94-4b63-af72-5c08e6d31941",
      {
        name: "conversations/4d82e6a1-7f30-4c95-b2e8-0a63d19f5c74/messages/8e25c0a7-1d94-4b63-af72-5c08e6d31941",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "i'll make a shared list of places",
        createTime: new Date("2026-10-27T13:40:00Z"),
        updateTime: new Date("2026-10-27T13:40:00Z"),
      },
    ],

    // Photography Enthusiasts
    [
      "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/47863ca4-594c-46be-903f-779effdff3f9",
      {
        name: "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/47863ca4-594c-46be-903f-779effdff3f9",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "anyone want to do a photo walk saturday",
        createTime: new Date("2026-10-25T09:08:00Z"),
        updateTime: new Date("2026-10-25T09:08:00Z"),
      },
    ],
    [
      "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/364d63f2-760a-4660-9ab5-5f381fa70b8e",
      {
        name: "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/364d63f2-760a-4660-9ab5-5f381fa70b8e",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "i am in! where",
        createTime: new Date("2026-10-25T09:11:00Z"),
        updateTime: new Date("2026-10-25T09:11:00Z"),
      },
    ],
    [
      "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/4316f998-eb7d-4518-b5c3-f3e910cad891",
      {
        name: "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/4316f998-eb7d-4518-b5c3-f3e910cad891",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "somewhere with old buildings maybe",
        createTime: new Date("2026-10-25T09:14:00Z"),
        updateTime: new Date("2026-10-25T09:14:00Z"),
      },
    ],
    [
      "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/b86e6d6a-3076-4309-8c8f-09959a522033",
      {
        name: "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/b86e6d6a-3076-4309-8c8f-09959a522033",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "old town at 7? morning light should be nice",
        createTime: new Date("2026-10-25T09:17:00Z"),
        updateTime: new Date("2026-10-25T09:17:00Z"),
      },
    ],
    [
      "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/7c91e4a0-2d63-4f85-b1e9-6a30d8c52741",
      {
        name: "conversations/a3e71d90-5b62-4f84-8c19-0d75a2e63f48/messages/7c91e4a0-2d63-4f85-b1e9-6a30d8c52741",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "sounds good, see you there",
        createTime: new Date("2026-10-25T09:20:00Z"),
        updateTime: new Date("2026-10-25T09:20:00Z"),
      },
    ],

    // Gym Accountability
    [
      "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/9353385a-365e-452c-bd24-b06496b35baa",
      {
        name: "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/9353385a-365e-452c-bd24-b06496b35baa",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "leg day tomorrow, 7am",
        createTime: new Date("2026-10-24T07:33:00Z"),
        updateTime: new Date("2026-10-24T07:33:00Z"),
      },
    ],
    [
      "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/f04e9529-944a-4e65-ab9c-419b37ae0dfa",
      {
        name: "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/f04e9529-944a-4e65-ab9c-419b37ae0dfa",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "my legs still hurt from monday",
        createTime: new Date("2026-10-24T07:36:00Z"),
        updateTime: new Date("2026-10-24T07:36:00Z"),
      },
    ],
    [
      "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/c8d8e849-6478-4b78-bd36-796b28d26bfb",
      {
        name: "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/c8d8e849-6478-4b78-bd36-796b28d26bfb",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "then do a lighter session",
        createTime: new Date("2026-10-24T07:39:00Z"),
        updateTime: new Date("2026-10-24T07:39:00Z"),
      },
    ],
    [
      "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/07896716-c4cb-4ca2-9fee-9aaabf3eb0ba",
      {
        name: "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/07896716-c4cb-4ca2-9fee-9aaabf3eb0ba",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "fine but i am not doing lunges again",
        createTime: new Date("2026-10-24T07:42:00Z"),
        updateTime: new Date("2026-10-24T07:42:00Z"),
      },
    ],
    [
      "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/5a63d1e8-9c20-4f74-b6e1-3d95a0c82741",
      {
        name: "conversations/1e94a7c0-6d32-4b85-b9f1-8c20e5d73a64/messages/5a63d1e8-9c20-4f74-b6e1-3d95a0c82741",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "deal 🤝",
        createTime: new Date("2026-10-24T07:45:00Z"),
        updateTime: new Date("2026-10-24T07:45:00Z"),
      },
    ],

    // Long Title Edge Case
    [
      "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64/messages/f25b4882-e8bc-43a1-b619-85c98ecb23cd",
      {
        name: "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64/messages/f25b4882-e8bc-43a1-b619-85c98ecb23cd",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "who changed the group name to that entire paragraph",
        createTime: new Date("2026-10-23T15:51:00Z"),
        updateTime: new Date("2026-10-23T15:51:00Z"),
      },
    ],
    [
      "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64/messages/99d71e45-8249-49bf-95c4-8f78d2e41143",
      {
        name: "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64/messages/99d71e45-8249-49bf-95c4-8f78d2e41143",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "me 😌",
        createTime: new Date("2026-10-23T15:54:00Z"),
        updateTime: new Date("2026-10-23T15:54:00Z"),
      },
    ],
    [
      "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64/messages/4fc7b758-d4bc-4845-ad60-2e92d0c2edd1",
      {
        name: "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64/messages/4fc7b758-d4bc-4845-ad60-2e92d0c2edd1",
        user: "users/46f2e983-8064-4e31-9b9a-a241870ed0c6",
        content: "it goes off the screen on my phone",
        createTime: new Date("2026-10-23T15:57:00Z"),
        updateTime: new Date("2026-10-23T15:57:00Z"),
      },
    ],
    [
      "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64/messages/1f84d3a7-6c29-4e50-b9d1-8a63c0e52794",
      {
        name: "conversations/7b20c9e4-1d63-4f85-a2e9-5c71d0a38f64/messages/1f84d3a7-6c29-4e50-b9d1-8a63c0e52794",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "that is the whole point",
        createTime: new Date("2026-10-23T16:00:00Z"),
        updateTime: new Date("2026-10-23T16:00:00Z"),
      },
    ],

    // 日本語の勉強会
    [
      "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64/messages/37a57508-e85c-4698-95d6-4dc752005797",
      {
        name: "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64/messages/37a57508-e85c-4698-95d6-4dc752005797",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "今日も日本語を練習する？",
        createTime: new Date("2026-10-21T05:06:00Z"),
        updateTime: new Date("2026-10-21T05:06:00Z"),
      },
    ],
    [
      "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64/messages/8043dfb9-b5b8-4e42-8ea7-c0ccb06e2ec5",
      {
        name: "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64/messages/8043dfb9-b5b8-4e42-8ea7-c0ccb06e2ec5",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "うん！でも漢字が難しい 😭",
        createTime: new Date("2026-10-21T05:09:00Z"),
        updateTime: new Date("2026-10-21T05:09:00Z"),
      },
    ],
    [
      "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64/messages/153a1b01-bbf4-44d4-b06f-e770ec7d07e2",
      {
        name: "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64/messages/153a1b01-bbf4-44d4-b06f-e770ec7d07e2",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "一緒に勉強しよう",
        createTime: new Date("2026-10-21T05:12:00Z"),
        updateTime: new Date("2026-10-21T05:12:00Z"),
      },
    ],
    [
      "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64/messages/9e41a7c2-5d83-4f60-b1e9-0c72d6a35841",
      {
        name: "conversations/0c83f2a7-4d61-4e95-a8b3-9d20c7e51f64/messages/9e41a7c2-5d83-4f60-b1e9-0c72d6a35841",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "いいね、夜8時からどう？",
        createTime: new Date("2026-10-21T05:15:00Z"),
        updateTime: new Date("2026-10-21T05:15:00Z"),
      },
    ],

    // Archive 2025
    [
      "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64/messages/1c1a9d86-7e4f-42f5-9b4a-60695383acc3",
      {
        name: "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64/messages/1c1a9d86-7e4f-42f5-9b4a-60695383acc3",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "one more day till new year",
        createTime: new Date("2025-12-30T18:36:00Z"),
        updateTime: new Date("2025-12-30T18:36:00Z"),
      },
    ],
    [
      "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64/messages/a566d897-3874-4b9e-b791-8b76207e6125",
      {
        name: "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64/messages/a566d897-3874-4b9e-b791-8b76207e6125",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "this year actually flew by",
        createTime: new Date("2025-12-30T18:39:00Z"),
        updateTime: new Date("2025-12-30T18:39:00Z"),
      },
    ],
    [
      "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64/messages/034edb60-d2a0-441e-996d-ee6d7d065193",
      {
        name: "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64/messages/034edb60-d2a0-441e-996d-ee6d7d065193",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "we need another group trip next year",
        createTime: new Date("2025-12-30T18:42:00Z"),
        updateTime: new Date("2025-12-30T18:42:00Z"),
      },
    ],
    [
      "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64/messages/4a82c1e7-6d39-4f50-b8e2-0c75d9a63148",
      {
        name: "conversations/e6a19d30-7c42-4f85-b1e9-3d70a52c8f64/messages/4a82c1e7-6d39-4f50-b8e2-0c75d9a63148",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "100%. happy new year early everyone 🎉",
        createTime: new Date("2025-12-30T18:45:00Z"),
        updateTime: new Date("2025-12-30T18:45:00Z"),
      },
    ],

    // Empty Description Test
    [
      "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54/messages/571bcb98-6693-40f3-85dc-35a9a676c0ec",
      {
        name: "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54/messages/571bcb98-6693-40f3-85dc-35a9a676c0ec",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "testing the group notifications",
        createTime: new Date("2026-10-20T09:51:00Z"),
        updateTime: new Date("2026-10-20T09:51:00Z"),
      },
    ],
    [
      "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54/messages/6c9a1a3d-a53d-4f3b-89d7-09f58b455bd4",
      {
        name: "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54/messages/6c9a1a3d-a53d-4f3b-89d7-09f58b455bd4",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "got one",
        createTime: new Date("2026-10-20T09:54:00Z"),
        updateTime: new Date("2026-10-20T09:54:00Z"),
      },
    ],
    [
      "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54/messages/ff362fa2-0f71-4666-877b-e5c77dfdd707",
      {
        name: "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54/messages/ff362fa2-0f71-4666-877b-e5c77dfdd707",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "did it show the right group name?",
        createTime: new Date("2026-10-20T09:57:00Z"),
        updateTime: new Date("2026-10-20T09:57:00Z"),
      },
    ],
    [
      "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54/messages/6c20e9a1-4d75-4f83-b2e8-1a93d0c65742",
      {
        name: "conversations/3d91a6e0-5c72-4b84-a1f9-8e20d7c63a54/messages/6c20e9a1-4d75-4f83-b2e8-1a93d0c65742",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "yep it works 😂",
        createTime: new Date("2026-10-20T10:00:00Z"),
        updateTime: new Date("2026-10-20T10:00:00Z"),
      },
    ],
  ])
)
