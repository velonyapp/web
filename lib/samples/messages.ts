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

    // Extended Certified Yappers: deliberately varied message + timestamp edge cases.
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/03d6ea26-c127-5f97-b1de-940ad31a806d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/03d6ea26-c127-5f97-b1de-940ad31a806d",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "HE TEXTED HER",
        createTime: new Date("2026-11-11T08:00:01Z"),
        updateTime: new Date("2026-11-11T08:00:01Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bc44c61a-45ad-5b56-922a-2545cc7eb236",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bc44c61a-45ad-5b56-922a-2545cc7eb236",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "AT 2:14 AM",
        createTime: new Date("2026-11-11T08:00:02Z"),
        updateTime: new Date("2026-11-11T08:00:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5c0304e0-3164-5ef8-b662-40962e75b199",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5c0304e0-3164-5ef8-b662-40962e75b199",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "with a paragraph",
        createTime: new Date("2026-11-11T08:00:04Z"),
        updateTime: new Date("2026-11-11T08:00:04Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1f00396a-24d1-53b3-b887-1c9aed23be3b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1f00396a-24d1-53b3-b887-1c9aed23be3b",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "of course it was a paragraph",
        createTime: new Date("2026-11-11T08:00:08Z"),
        updateTime: new Date("2026-11-11T08:00:08Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3bc0df88-467a-5e36-b3b0-a840915720bb",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3bc0df88-467a-5e36-b3b0-a840915720bb",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "what did it say",
        createTime: new Date("2026-11-11T08:00:08Z"),
        updateTime: new Date("2026-11-11T08:00:08Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/87da63a2-13fc-5f25-9c57-9eb25105be5f",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/87da63a2-13fc-5f25-9c57-9eb25105be5f",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: '"hey stranger" 💀',
        createTime: new Date("2026-11-11T08:00:15Z"),
        updateTime: new Date("2026-11-11T08:00:15Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8b7d230e-b169-592b-8be3-2cbc78423aea",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8b7d230e-b169-592b-8be3-2cbc78423aea",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "delete his keyboard",
        createTime: new Date("2026-11-11T08:00:26Z"),
        updateTime: new Date("2026-11-11T08:00:26Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/64a2b0e9-ea38-5869-87c9-103edd8a7518",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/64a2b0e9-ea38-5869-87c9-103edd8a7518",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "the opening alone is a red flag",
        createTime: new Date("2026-11-11T08:00:28Z"),
        updateTime: new Date("2026-11-11T08:00:28Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f59889e0-15d8-513e-89db-448de03b9214",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f59889e0-15d8-513e-89db-448de03b9214",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "WAIT IM NOT DONE",
        createTime: new Date("2026-11-11T08:00:53Z"),
        updateTime: new Date("2026-11-11T08:00:53Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a5d80eb7-e079-5945-b849-88603cc2135a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a5d80eb7-e079-5945-b849-88603cc2135a",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: 'then he wrote "i saw a cloud that looked like your dog"',
        createTime: new Date("2026-11-11T08:00:53Z"),
        updateTime: new Date("2026-11-11T08:00:53Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/04fd5b7e-47ed-5fd1-a2c3-2da7028f0d96",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/04fd5b7e-47ed-5fd1-a2c3-2da7028f0d96",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "HOW IS THE DOG INVOLVED",
        createTime: new Date("2026-11-11T08:01:32Z"),
        updateTime: new Date("2026-11-11T08:01:32Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/64d1f562-8e89-5702-84ab-8758939088f4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/64d1f562-8e89-5702-84ab-8758939088f4",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "the dog has legal representation now",
        createTime: new Date("2026-11-11T08:02:31Z"),
        updateTime: new Date("2026-11-11T08:02:31Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b94900f5-01f4-56d4-a530-cce331cc08d2",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b94900f5-01f4-56d4-a530-cce331cc08d2",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content:
          "I have a screenshot but the screenshot is a screenshot of a screenshot",
        createTime: new Date("2026-11-11T08:02:36Z"),
        updateTime: new Date("2026-11-11T08:02:36Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5b9685ad-501c-5125-a714-64b571184828",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5b9685ad-501c-5125-a714-64b571184828",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "enhance 👁️👁️",
        createTime: new Date("2026-11-11T08:02:37Z"),
        updateTime: new Date("2026-11-11T08:02:37Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c672db14-d7a4-5cb1-a6d1-5ac002e0216c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c672db14-d7a4-5cb1-a6d1-5ac002e0216c",
        user: "users/46f2e983-8064-4e31-9b9a-a241870ed0c6",
        content: "CSI: group chat edition",
        createTime: new Date("2026-11-11T08:02:53Z"),
        updateTime: new Date("2026-11-11T08:02:53Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/96b56632-934a-537f-99ca-eb7a8687073f",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/96b56632-934a-537f-99ca-eb7a8687073f",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "Please respect the dog's privacy.",
        createTime: new Date("2026-11-11T08:04:15Z"),
        updateTime: new Date("2026-11-11T08:04:15Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/10b66bb5-ac3a-5848-b4da-a9a71e68b380",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/10b66bb5-ac3a-5848-b4da-a9a71e68b380",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "okay so she replied",
        createTime: new Date("2026-11-11T08:04:15Z"),
        updateTime: new Date("2026-11-11T08:04:15Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2ab3bc3e-7937-517c-bc48-7b703c3c353d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2ab3bc3e-7937-517c-bc48-7b703c3c353d",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: '"wrong number"',
        createTime: new Date("2026-11-11T08:04:18Z"),
        updateTime: new Date("2026-11-11T08:04:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5eb3cf74-fadd-54e8-8712-11280cf958d8",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5eb3cf74-fadd-54e8-8712-11280cf958d8",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "HAHAHAHAHAHA",
        createTime: new Date("2026-11-11T08:05:02Z"),
        updateTime: new Date("2026-11-11T08:05:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/63050515-480c-5ce1-a3c8-b06a0c69f067",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/63050515-480c-5ce1-a3c8-b06a0c69f067",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "deserved",
        createTime: new Date("2026-11-11T08:05:21Z"),
        updateTime: new Date("2026-11-11T08:05:21Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/135b7f2a-b7af-5686-865b-821149a10f8b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/135b7f2a-b7af-5686-865b-821149a10f8b",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "imagine getting rejected by your own contact list",
        createTime: new Date("2026-11-11T08:05:21Z"),
        updateTime: new Date("2026-11-11T08:05:21Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/aa0bfef7-449d-537c-9aaf-9312a21b6fbf",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/aa0bfef7-449d-537c-9aaf-9312a21b6fbf",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "Do we actually know if she meant it or was joking?",
        createTime: new Date("2026-11-11T08:05:29Z"),
        updateTime: new Date("2026-11-11T08:05:29Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8934aebe-92e7-5d37-873c-9a6ac66eed12",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8934aebe-92e7-5d37-873c-9a6ac66eed12",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "she absolutely meant it",
        createTime: new Date("2026-11-11T08:06:03Z"),
        updateTime: new Date("2026-11-11T08:06:03Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f6b05c33-3068-5728-b1f4-83600a02c57a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f6b05c33-3068-5728-b1f4-83600a02c57a",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "hey just woke up what happened",
        createTime: new Date("2026-11-11T08:06:05Z"),
        updateTime: new Date("2026-11-11T08:06:05Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/546bbef9-0678-5d5b-9e18-c977a659202d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/546bbef9-0678-5d5b-9e18-c977a659202d",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "someone's dignity filed for bankruptcy",
        createTime: new Date("2026-11-11T08:06:05Z"),
        updateTime: new Date("2026-11-11T08:06:05Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/712cbf93-f668-5ba4-bdfc-fd3a2530010b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/712cbf93-f668-5ba4-bdfc-fd3a2530010b",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "good morning to that dignity specifically",
        createTime: new Date("2026-11-11T08:06:22Z"),
        updateTime: new Date("2026-11-11T08:06:22Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f375d1ca-e312-5c34-afd9-77a44f572a4d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f375d1ca-e312-5c34-afd9-77a44f572a4d",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content:
          "Okay, here is the context that nobody asked for but everyone needs. On Monday he announced that he had grown as a person. On Tuesday he told three separate people that his phone was only for work. On Wednesday he posted a quote about letting go. On Thursday he apparently studied cloud formations until he found an excuse to text someone who had already explained, with great clarity, that she did not want to hear from him. I am not making any of that up, and I have the time stamps. The funniest part is not the cloud, and it isn't even the dog. It's that he thought the phrase 'hey stranger' was a fresh beginning instead of the title of every terrible late-night decision ever. Anyway, I am going to make tea and stop following this case before I accidentally become a full-time weather investigator. Okay, here is the context that nobody asked for but everyone needs. On Monday he announced that he had grown as a person. On Tuesday he told three separate people that his phone was only for work. On Wednesday he posted a quote about letting go. On Thursday he apparently studied cloud formations until he found an excuse to text someone who had already explained, with great clarity, that she did not want to hear from him. I am not making any of that up, and I have the time stamps. The funniest part is not the cloud, and it isn't even the dog. It's that he thought the phrase 'hey stranger' was a fresh beginning instead of the title of every terrible late-night decision ever. Anyway, I am going to make tea and stop following this case before I accidentally become a full-time weather investigator. Okay, here is the context that nobody asked for but everyone needs. On Monday he announced that he had grown as a person. On Tuesday he told three separate people that his phone was only for work. On Wednesday he posted a quote about letting go. On Thursday he apparently studied cloud formations until he found an excuse to text someone who had already explained, with great clarity, that she did not want to hear from him. I am not making any of that up, and I have the time stamps. The funniest part is not the cloud, and it isn't even the dog. It's that he thought the phrase 'hey stranger' was a fresh beginning instead of the title of every terrible late-night decision ever. Anyway, I am going to make tea and stop following this case before I accidentally become a full-time weather investigator. ",
        createTime: new Date("2026-11-11T08:06:28Z"),
        updateTime: new Date("2026-11-11T08:06:28Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7abed419-b5d8-5056-88ba-6aaecb18ab85",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7abed419-b5d8-5056-88ba-6aaecb18ab85",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "I just opened the app and got a novel.",
        createTime: new Date("2026-11-11T08:07:31Z"),
        updateTime: new Date("2026-11-11T08:07:31Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/80f64f3f-71fc-57a0-9fad-e216678c95e2",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/80f64f3f-71fc-57a0-9fad-e216678c95e2",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "can I get a table of contents",
        createTime: new Date("2026-11-11T08:07:33Z"),
        updateTime: new Date("2026-11-11T08:07:33Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/609f5d87-b879-54c4-a388-affc182a1377",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/609f5d87-b879-54c4-a388-affc182a1377",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "Chapter 1: cloud. Chapter 2: dog. Chapter 3: consequences.",
        createTime: new Date("2026-11-11T08:07:33Z"),
        updateTime: new Date("2026-11-11T08:07:33Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/db14847b-e48a-5c4d-9931-93f259d93e46",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/db14847b-e48a-5c4d-9931-93f259d93e46",
        content: "A message was deleted.",
        createTime: new Date("2026-11-11T08:07:47Z"),
        updateTime: new Date("2026-11-11T08:07:47Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/54700e89-5ff6-5d3e-b5df-37adc8f374c9",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/54700e89-5ff6-5d3e-b5df-37adc8f374c9",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "WHO DELETED THAT",
        createTime: new Date("2026-11-11T08:08:18Z"),
        updateTime: new Date("2026-11-11T08:08:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/20d78cb7-b084-57e5-8c63-2fc86d803824",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/20d78cb7-b084-57e5-8c63-2fc86d803824",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "me, wrong chat, please pretend you saw nothing",
        createTime: new Date("2026-11-11T08:08:19Z"),
        updateTime: new Date("2026-11-11T08:08:19Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0aa71c46-c225-5070-b408-c8073dbc21aa",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0aa71c46-c225-5070-b408-c8073dbc21aa",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "nothing at all",
        createTime: new Date("2026-11-11T08:08:29Z"),
        updateTime: new Date("2026-11-11T08:08:29Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0369dc56-a8e0-5cd8-96eb-fea63b2c1cdf",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0369dc56-a8e0-5cd8-96eb-fea63b2c1cdf",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "I saw everything 👀",
        createTime: new Date("2026-11-11T08:09:21Z"),
        updateTime: new Date("2026-11-11T08:09:21Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3630ff5d-7235-588e-a2a2-e93a3d51737b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3630ff5d-7235-588e-a2a2-e93a3d51737b",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "anyway he called her after that",
        createTime: new Date("2026-11-11T08:09:21Z"),
        updateTime: new Date("2026-11-11T08:09:21Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/debb8d9c-3a27-568f-b830-4318cde70838",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/debb8d9c-3a27-568f-b830-4318cde70838",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "PLEASE TELL ME SHE DIDN'T PICK UP",
        createTime: new Date("2026-11-11T08:09:48Z"),
        updateTime: new Date("2026-11-11T08:09:48Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/09671745-6926-59b1-ba5b-8ffc9719bc62",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/09671745-6926-59b1-ba5b-8ffc9719bc62",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "she didn't",
        createTime: new Date("2026-11-11T08:09:48Z"),
        updateTime: new Date("2026-11-11T08:09:48Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/25b86c87-44bc-5afd-9fc1-136e6e6d6f14",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/25b86c87-44bc-5afd-9fc1-136e6e6d6f14",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "she was asleep",
        createTime: new Date("2026-11-11T08:09:49Z"),
        updateTime: new Date("2026-11-11T08:09:49Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4b3e7d55-a4a9-5e85-9280-ee1eee6e2172",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4b3e7d55-a4a9-5e85-9280-ee1eee6e2172",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "the first reasonable action in this entire story",
        createTime: new Date("2026-11-11T08:09:51Z"),
        updateTime: new Date("2026-11-11T08:09:51Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0633e071-b0c2-5ebf-8e69-7acdef13ad53",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0633e071-b0c2-5ebf-8e69-7acdef13ad53",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "lunch break update: I have been thinking about the cloud",
        createTime: new Date("2026-11-11T12:22:00Z"),
        updateTime: new Date("2026-11-11T12:22:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/073692a4-64b3-5249-a602-a8ccfe414b3b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/073692a4-64b3-5249-a602-a8ccfe414b3b",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "why specifically a cloud",
        createTime: new Date("2026-11-11T12:22:00Z"),
        updateTime: new Date("2026-11-11T12:22:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1e98c1ca-e5bc-53d8-9c34-bf04288647f4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1e98c1ca-e5bc-53d8-9c34-bf04288647f4",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "someone once told me a potato looked like me",
        createTime: new Date("2026-11-11T12:22:07Z"),
        updateTime: new Date("2026-11-11T12:22:07Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e1999b5d-8a08-54d3-a5f6-64845d2d1b1e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e1999b5d-8a08-54d3-a5f6-64845d2d1b1e",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "this is not relevant but it still hurts",
        createTime: new Date("2026-11-11T12:22:18Z"),
        updateTime: new Date("2026-11-11T12:22:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7581cf50-4123-5cad-af2a-990e57621c29",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7581cf50-4123-5cad-af2a-990e57621c29",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "🥔",
        createTime: new Date("2026-11-11T12:22:20Z"),
        updateTime: new Date("2026-11-11T12:22:20Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4247cf93-70c4-5c51-98fc-c2c67670e9de",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4247cf93-70c4-5c51-98fc-c2c67670e9de",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content:
          "😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶 😂 💀 😭 🥐 🤡 ✨ 🦄 🫠 🧋 🔥 👀 🐶",
        createTime: new Date("2026-11-11T12:22:45Z"),
        updateTime: new Date("2026-11-11T12:22:45Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/63afdb30-00a6-5930-9645-316661ae6127",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/63afdb30-00a6-5930-9645-316661ae6127",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "STOP THAT'S GOING TO FILL MY SCREEN",
        createTime: new Date("2026-11-11T12:22:45Z"),
        updateTime: new Date("2026-11-11T12:22:45Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a7a85caa-5043-579f-b29f-9ec7737ced31",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a7a85caa-5043-579f-b29f-9ec7737ced31",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "my phone is wheezing 😭",
        createTime: new Date("2026-11-11T12:23:24Z"),
        updateTime: new Date("2026-11-11T12:23:24Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2e6f8112-91f7-54a4-a6ed-b8eaf809cc9d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2e6f8112-91f7-54a4-a6ed-b8eaf809cc9d",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "when does the documentary drop",
        createTime: new Date("2026-11-11T12:24:23Z"),
        updateTime: new Date("2026-11-11T12:24:23Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8afff23f-2789-5170-9e31-ad1fd8416992",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8afff23f-2789-5170-9e31-ad1fd8416992",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "I HAVE NEW INFORMATION",
        createTime: new Date("2026-11-11T12:24:28Z"),
        updateTime: new Date("2026-11-11T12:24:28Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4d0a6af8-2249-523b-9a3e-131c1ab88f26",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4d0a6af8-2249-523b-9a3e-131c1ab88f26",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "not again",
        createTime: new Date("2026-11-11T12:24:29Z"),
        updateTime: new Date("2026-11-11T12:24:29Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ff2ebb26-f681-5a6f-b1a9-a27b411ce2ed",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ff2ebb26-f681-5a6f-b1a9-a27b411ce2ed",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "the cloud looked like a CROISSANT",
        createTime: new Date("2026-11-11T12:24:45Z"),
        updateTime: new Date("2026-11-11T12:24:45Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c1754190-1898-5d38-a479-e9d5e88fea24",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c1754190-1898-5d38-a479-e9d5e88fea24",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "WHY DID WE GO FROM DOG TO CROISSANT",
        createTime: new Date("2026-11-11T12:26:07Z"),
        updateTime: new Date("2026-11-11T12:26:07Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3fe337ae-8413-5c3d-9e4b-3ee7ebd8da8f",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3fe337ae-8413-5c3d-9e4b-3ee7ebd8da8f",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "犬 → 雲 → クロワッサン 🥐",
        createTime: new Date("2026-11-11T12:26:07Z"),
        updateTime: new Date("2026-11-11T12:26:07Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2935ea3d-fbd0-58d6-bede-9c853b29ee48",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2935ea3d-fbd0-58d6-bede-9c853b29ee48",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "aku baru buka chat, ini grup apa bakery?",
        createTime: new Date("2026-11-11T12:26:10Z"),
        updateTime: new Date("2026-11-11T12:26:10Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1fef53b1-3cc8-530d-a743-bbf5b011833c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1fef53b1-3cc8-530d-a743-bbf5b011833c",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "selamat datang di episode roti awan",
        createTime: new Date("2026-11-11T12:26:54Z"),
        updateTime: new Date("2026-11-11T12:26:54Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b292ee95-d07e-5007-be59-07cc304d96f2",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b292ee95-d07e-5007-be59-07cc304d96f2",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "i vote the croissant becomes admin",
        createTime: new Date("2026-11-11T12:27:13Z"),
        updateTime: new Date("2026-11-11T12:27:13Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b8e4c683-281e-5720-b473-371916dd69b2",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b8e4c683-281e-5720-b473-371916dd69b2",
        content:
          "Lia changed the group icon. (Just kidding; this is only a text fixture.)",
        createTime: new Date("2026-11-11T12:27:13Z"),
        updateTime: new Date("2026-11-11T12:27:13Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f1da626f-23f4-5b78-a3a5-984572c85b92",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f1da626f-23f4-5b78-a3a5-984572c85b92",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "who is generating these system messages",
        createTime: new Date("2026-11-11T12:27:21Z"),
        updateTime: new Date("2026-11-11T12:27:21Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9b83f678-db09-5fcd-82da-26bc992438aa",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9b83f678-db09-5fcd-82da-26bc992438aa",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "nobody, that's what makes them unsettling",
        createTime: new Date("2026-11-11T12:27:55Z"),
        updateTime: new Date("2026-11-11T12:27:55Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3169cbd6-90ce-5a67-a5db-0968066f7247",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3169cbd6-90ce-5a67-a5db-0968066f7247",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content:
          "Unrequested essay incoming.\n\nPart one: there is no reason for this to be so dramatic.\n\nPart two: I have decided that punctuation is a form of performance art.\n\nPart three: sometimes the funniest thing in a group chat is a single word on its own line.\n\nWAIT.\n\nPart four: it turns out I had more thoughts.\n\nI meant to send one small update and then remembered eight other things. First, somebody knocked over a drink on the table while everyone pretended not to notice. Second, the playlist kept replaying the same song and we collectively decided it was a sign. Third, I forgot my charger, borrowed another one, misplaced that one, and then found both in the same bag. Fourth, a stranger overheard us discussing the croissant and offered a completely serious opinion on pastry architecture. Fifth, I promised myself I would send a short message, which is clearly no longer happening. The point of this paragraph is partly to tell the story and partly to see whether a chat bubble can keep expanding gracefully without suddenly clipping the rest of the words, hiding the timestamp, swallowing the avatar, or making the read receipt disappear. I meant to send one small update and then remembered eight other things. First, somebody knocked over a drink on the table while everyone pretended not to notice. Second, the playlist kept replaying the same song and we collectively decided it was a sign. Third, I forgot my charger, borrowed another one, misplaced that one, and then found both in the same bag. Fourth, a stranger overheard us discussing the croissant and offered a completely serious opinion on pastry architecture. Fifth, I promised myself I would send a short message, which is clearly no longer happening. The point of this paragraph is partly to tell the story and partly to see whether a chat bubble can keep expanding gracefully without suddenly clipping the rest of the words, hiding the timestamp, swallowing the avatar, or making the read receipt disappear. \n\nEnd of essay. Thank you for attending the unexpected lecture.",
        createTime: new Date("2026-11-11T12:27:57Z"),
        updateTime: new Date("2026-11-11T12:27:57Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8ca59bf3-f709-595c-bbf8-5743f989f8c2",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8ca59bf3-f709-595c-bbf8-5743f989f8c2",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "I scrolled for three business days.",
        createTime: new Date("2026-11-11T12:27:57Z"),
        updateTime: new Date("2026-11-11T12:27:57Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3398a5e7-0058-59ab-916a-64068fc4a920",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3398a5e7-0058-59ab-916a-64068fc4a920",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "my thumb has submitted its resignation",
        createTime: new Date("2026-11-11T12:28:14Z"),
        updateTime: new Date("2026-11-11T12:28:14Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3ca9373f-5fc0-5cd1-831f-a6e4cf1fe1b0",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3ca9373f-5fc0-5cd1-831f-a6e4cf1fe1b0",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "That was a genuinely excellent essay though.",
        createTime: new Date("2026-11-11T12:28:20Z"),
        updateTime: new Date("2026-11-11T12:28:20Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0d4d33a9-0f95-50b6-8ca2-9fbce64aa43b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0d4d33a9-0f95-50b6-8ca2-9fbce64aa43b",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "everyone please stay focused on the relationship disaster",
        createTime: new Date("2026-11-11T12:29:23Z"),
        updateTime: new Date("2026-11-11T12:29:23Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/cc77edd4-b6f8-53c4-987c-6c395c4e70ce",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/cc77edd4-b6f8-53c4-987c-6c395c4e70ce",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "also who wants noodles",
        createTime: new Date("2026-11-11T12:29:25Z"),
        updateTime: new Date("2026-11-11T12:29:25Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4e7a9d62-90c6-5bec-b290-f85bdc214791",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4e7a9d62-90c6-5bec-b290-f85bdc214791",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "those are two unrelated emergencies",
        createTime: new Date("2026-11-11T12:29:25Z"),
        updateTime: new Date("2026-11-11T12:29:25Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/48bdb849-14b8-5ae6-8b26-2381de787cb4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/48bdb849-14b8-5ae6-8b26-2381de787cb4",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "both are urgent",
        createTime: new Date("2026-11-11T12:29:39Z"),
        updateTime: new Date("2026-11-11T12:29:39Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0afdce4e-0102-5b9c-928f-fe1e42eeeb84",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0afdce4e-0102-5b9c-928f-fe1e42eeeb84",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "noodles first, emotional damage later",
        createTime: new Date("2026-11-11T12:30:10Z"),
        updateTime: new Date("2026-11-11T12:30:10Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/831a1463-d554-5a3d-b35a-d14f804a7622",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/831a1463-d554-5a3d-b35a-d14f804a7622",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "are we still talking about the cloud",
        createTime: new Date("2026-11-11T21:39:00Z"),
        updateTime: new Date("2026-11-11T21:39:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/006ccc49-f27e-516e-8b0d-7c646bdf2706",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/006ccc49-f27e-516e-8b0d-7c646bdf2706",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "technically we're talking about noodles",
        createTime: new Date("2026-11-11T21:39:10Z"),
        updateTime: new Date("2026-11-11T21:39:10Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1c7c900f-0a9c-5979-8de0-2f361bd485bf",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1c7c900f-0a9c-5979-8de0-2f361bd485bf",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "can we vote on a new mascot",
        createTime: new Date("2026-11-11T21:40:02Z"),
        updateTime: new Date("2026-11-11T21:40:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f9f41a38-30c2-5a5d-bd7a-59d4c9254b3a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f9f41a38-30c2-5a5d-bd7a-59d4c9254b3a",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "croissant dog 🐶🥐",
        createTime: new Date("2026-11-11T21:40:02Z"),
        updateTime: new Date("2026-11-11T21:40:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/854a6c87-b306-5434-82cc-b591648b6467",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/854a6c87-b306-5434-82cc-b591648b6467",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "this is my official nomination",
        createTime: new Date("2026-11-11T21:40:29Z"),
        updateTime: new Date("2026-11-11T21:40:29Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6a7e815e-c35d-527b-a7e9-e14c971af598",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6a7e815e-c35d-527b-a7e9-e14c971af598",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "seconded",
        createTime: new Date("2026-11-11T21:40:29Z"),
        updateTime: new Date("2026-11-11T21:40:29Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/517bd2d2-6aa3-5d86-8ee4-53439249f166",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/517bd2d2-6aa3-5d86-8ee4-53439249f166",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "thirded",
        createTime: new Date("2026-11-11T21:40:30Z"),
        updateTime: new Date("2026-11-11T21:45:30Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a7748309-0c42-551b-ae9a-68a35c368dc4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a7748309-0c42-551b-ae9a-68a35c368dc4",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "fourth-ed, as an individual who is also me",
        createTime: new Date("2026-11-11T21:40:32Z"),
        updateTime: new Date("2026-11-11T21:40:32Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/70c4871e-a4af-5e43-aea7-82c435ea409a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/70c4871e-a4af-5e43-aea7-82c435ea409a",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "One person gets one vote.",
        createTime: new Date("2026-11-11T21:40:36Z"),
        updateTime: new Date("2026-11-11T21:40:36Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2ffab081-6077-51ab-ba0f-68ecc81f6cb4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2ffab081-6077-51ab-ba0f-68ecc81f6cb4",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "wow democracy is difficult",
        createTime: new Date("2026-11-11T21:40:36Z"),
        updateTime: new Date("2026-11-11T21:40:36Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/098464ab-693b-529c-9398-387a2a03ca7a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/098464ab-693b-529c-9398-387a2a03ca7a",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content:
          "thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789thecroissantdogcloudincidentabcdefghijklmnopqrstuvwxyz0123456789",
        createTime: new Date("2026-11-11T21:40:43Z"),
        updateTime: new Date("2026-11-11T21:40:43Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5ce17a33-59dc-5796-bbfd-c9213dfcb224",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5ce17a33-59dc-5796-bbfd-c9213dfcb224",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "sorry my keyboard held down a key",
        createTime: new Date("2026-11-11T21:40:54Z"),
        updateTime: new Date("2026-11-11T21:40:54Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1a1b1a13-2fe7-56ab-9287-ef1a9395eae7",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1a1b1a13-2fe7-56ab-9287-ef1a9395eae7",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "that is not a key. that is the full alphabet.",
        createTime: new Date("2026-11-11T21:40:56Z"),
        updateTime: new Date("2026-11-11T21:40:56Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/157a9bc0-5db1-50bf-857e-6d02c6a2e62d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/157a9bc0-5db1-50bf-857e-6d02c6a2e62d",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "does the bubble have horizontal scroll",
        createTime: new Date("2026-11-11T21:41:21Z"),
        updateTime: new Date("2026-11-11T21:41:21Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/239d3145-b83b-5e98-b512-fd69aad4f402",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/239d3145-b83b-5e98-b512-fd69aad4f402",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "or did it just break the entire layout",
        createTime: new Date("2026-11-11T21:41:21Z"),
        updateTime: new Date("2026-11-11T21:41:21Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8a1ca872-4310-5144-ad61-f9ad756a7440",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8a1ca872-4310-5144-ad61-f9ad756a7440",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "my browser's flexbox is crying",
        createTime: new Date("2026-11-11T21:42:00Z"),
        updateTime: new Date("2026-11-11T21:42:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/85b961bb-5ef4-5e5b-8a56-4822d331e6fb",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/85b961bb-5ef4-5e5b-8a56-4822d331e6fb",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "overflow-wrap: anywhere; saves lives",
        createTime: new Date("2026-11-11T21:42:59Z"),
        updateTime: new Date("2026-11-11T21:42:59Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/90520698-63c0-553c-9188-c78500628907",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/90520698-63c0-553c-9188-c78500628907",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "I thought this was supposed to be a friendship group",
        createTime: new Date("2026-11-11T21:43:04Z"),
        updateTime: new Date("2026-11-11T21:43:04Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8a502779-31bc-5530-8896-7184151c14b5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8a502779-31bc-5530-8896-7184151c14b5",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "it's now a CSS support forum",
        createTime: new Date("2026-11-11T21:43:05Z"),
        updateTime: new Date("2026-11-11T21:43:05Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/466358c9-beb4-522e-a5e9-9d290a790e1e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/466358c9-beb4-522e-a5e9-9d290a790e1e",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "`word-break: break-word` enters the chat",
        createTime: new Date("2026-11-11T21:43:21Z"),
        updateTime: new Date("2026-11-11T21:43:21Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8c66c6a9-eb8b-590e-8ee4-3756cd09fe95",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8c66c6a9-eb8b-590e-8ee4-3756cd09fe95",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "長すぎるメッセージだね 😂",
        createTime: new Date("2026-11-11T21:44:43Z"),
        updateTime: new Date("2026-11-11T21:44:43Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/cae82807-3c84-5a42-aa1c-2ed6bc891bdf",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/cae82807-3c84-5a42-aa1c-2ed6bc891bdf",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content:
          "**BREAKING NEWS**\n\n- cloud observed\n- dog allegedly involved\n- croissant confirmed\n\n> sources close to the pastry refused to comment\n\n```ts\nconst evidence = ['cloud', 'dog', 'croissant']\nconsole.log(evidence.join(' → '))\n```",
        createTime: new Date("2026-11-11T21:44:43Z"),
        updateTime: new Date("2026-11-11T21:44:43Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1bec50b5-e03d-521f-a3a8-efa74ae3c744",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1bec50b5-e03d-521f-a3a8-efa74ae3c744",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "why is there a code block in the gossip",
        createTime: new Date("2026-11-11T21:44:46Z"),
        updateTime: new Date("2026-11-11T21:44:46Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ef0e04ac-c155-5825-8e6c-625d1506870d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ef0e04ac-c155-5825-8e6c-625d1506870d",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "why isn't there a code block in the gossip",
        createTime: new Date("2026-11-11T21:45:30Z"),
        updateTime: new Date("2026-11-11T21:45:30Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/92a9484f-4af9-5428-a519-b1790755229d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/92a9484f-4af9-5428-a519-b1790755229d",
        content: "A member left the group.",
        createTime: new Date("2026-11-11T21:45:49Z"),
        updateTime: new Date("2026-11-11T21:45:49Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a3971768-c594-5e72-b0b6-3b83fd500d61",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a3971768-c594-5e72-b0b6-3b83fd500d61",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "THAT WASN'T EVEN A REAL MEMBER",
        createTime: new Date("2026-11-11T21:45:49Z"),
        updateTime: new Date("2026-11-11T21:45:49Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/31e97cd6-75e0-5c02-87c0-4b1f4b5dd6bc",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/31e97cd6-75e0-5c02-87c0-4b1f4b5dd6bc",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "we're definitely testing something at this point",
        createTime: new Date("2026-11-11T21:45:57Z"),
        updateTime: new Date("2026-11-11T21:45:57Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b28582d9-696f-5120-a857-5b9c49724c7b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b28582d9-696f-5120-a857-5b9c49724c7b",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "testing my patience specifically",
        createTime: new Date("2026-11-11T21:46:31Z"),
        updateTime: new Date("2026-11-11T21:46:31Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f71db8b7-20d4-55db-a75b-bdec3f36ace5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f71db8b7-20d4-55db-a75b-bdec3f36ace5",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "goodnight everyone",
        createTime: new Date("2026-11-11T21:46:33Z"),
        updateTime: new Date("2026-11-11T21:46:33Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3a32b75a-bccc-53a9-87d5-115599fff429",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3a32b75a-bccc-53a9-87d5-115599fff429",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "actual goodnight",
        createTime: new Date("2026-11-11T21:46:33Z"),
        updateTime: new Date("2026-11-11T21:46:33Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4aba3076-ce60-5b82-a9c0-48fcef0b9568",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4aba3076-ce60-5b82-a9c0-48fcef0b9568",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "I will not open this again until morning",
        createTime: new Date("2026-11-11T21:46:50Z"),
        updateTime: new Date("2026-11-11T21:46:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/078bb2fe-aab3-5c68-9031-4ec8c376a954",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/078bb2fe-aab3-5c68-9031-4ec8c376a954",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "screenshotting for evidence",
        createTime: new Date("2026-11-11T21:46:56Z"),
        updateTime: new Date("2026-11-11T21:46:56Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/05948dae-0496-5ccc-bdc1-66ebeb5a3c60",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/05948dae-0496-5ccc-bdc1-66ebeb5a3c60",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "okay I'm back",
        createTime: new Date("2026-11-12T02:03:00Z"),
        updateTime: new Date("2026-11-12T02:03:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/40ca12fc-f6c4-516b-8703-1a8f77a1670c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/40ca12fc-f6c4-516b-8703-1a8f77a1670c",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "you lasted four hours",
        createTime: new Date("2026-11-12T02:03:02Z"),
        updateTime: new Date("2026-11-12T02:03:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b7ae4bc7-d8ce-5780-bcba-41a05a99c3f1",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b7ae4bc7-d8ce-5780-bcba-41a05a99c3f1",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "my sleep schedule is a theoretical concept",
        createTime: new Date("2026-11-12T02:03:02Z"),
        updateTime: new Date("2026-11-12T02:03:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1b1e64fa-1e6f-53d2-95b7-4afdfd3d4712",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1b1e64fa-1e6f-53d2-95b7-4afdfd3d4712",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "you said MORNING",
        createTime: new Date("2026-11-12T02:03:16Z"),
        updateTime: new Date("2026-11-12T02:03:16Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d8118285-10a0-57eb-821f-ff10d937afa4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d8118285-10a0-57eb-821f-ff10d937afa4",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "it's morning somewhere",
        createTime: new Date("2026-11-12T02:03:47Z"),
        updateTime: new Date("2026-11-12T02:03:47Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e89e30a0-ee79-5d7e-81ca-8d6b2a86f275",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e89e30a0-ee79-5d7e-81ca-8d6b2a86f275",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "it is 2 am UTC please stop speaking",
        createTime: new Date("2026-11-12T02:03:48Z"),
        updateTime: new Date("2026-11-12T02:03:48Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0ffc6356-bc8e-528e-8b11-f02877ad9aa0",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0ffc6356-bc8e-528e-8b11-f02877ad9aa0",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "new update",
        createTime: new Date("2026-11-12T02:03:58Z"),
        updateTime: new Date("2026-11-12T02:03:58Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f6218611-3a29-52fa-8801-8c50b1572217",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f6218611-3a29-52fa-8801-8c50b1572217",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "sorry",
        createTime: new Date("2026-11-12T02:04:50Z"),
        updateTime: new Date("2026-11-12T02:04:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/05b32cee-038b-5ce8-862a-558218c7a98d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/05b32cee-038b-5ce8-862a-558218c7a98d",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "actually not sorry",
        createTime: new Date("2026-11-12T02:04:50Z"),
        updateTime: new Date("2026-11-12T02:04:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5bbfee4f-4be1-52a4-b16b-874269596134",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5bbfee4f-4be1-52a4-b16b-874269596134",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "This group needs quiet hours.",
        createTime: new Date("2026-11-12T02:05:17Z"),
        updateTime: new Date("2026-11-12T02:05:17Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0a676310-0f34-5007-a602-836d6a0bb71c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0a676310-0f34-5007-a602-836d6a0bb71c",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "shhhh",
        createTime: new Date("2026-11-12T02:05:17Z"),
        updateTime: new Date("2026-11-12T02:05:17Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a5ee30d5-dd98-56ca-9f4b-310bb5445b04",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a5ee30d5-dd98-56ca-9f4b-310bb5445b04",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "shhhhhhh",
        createTime: new Date("2026-11-12T02:05:18Z"),
        updateTime: new Date("2026-11-12T02:05:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/06d783b2-6b66-5671-8162-475b510d219e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/06d783b2-6b66-5671-8162-475b510d219e",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "shhhhhhhhhhhhh",
        createTime: new Date("2026-11-12T02:05:20Z"),
        updateTime: new Date("2026-11-12T02:05:20Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c8e61be0-02f7-5752-8dbb-8c9cf64872fd",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c8e61be0-02f7-5752-8dbb-8c9cf64872fd",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "🔕",
        createTime: new Date("2026-11-12T02:05:24Z"),
        updateTime: new Date("2026-11-12T02:05:24Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/57e7e9d6-4822-5a65-9436-da15fad807fb",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/57e7e9d6-4822-5a65-9436-da15fad807fb",
        content: "A message was removed by its sender.",
        createTime: new Date("2026-11-12T02:05:24Z"),
        updateTime: new Date("2026-11-12T02:05:24Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6462ea8e-ead7-5d57-aff4-86f01a443932",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6462ea8e-ead7-5d57-aff4-86f01a443932",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "why is the removed message always the interesting one",
        createTime: new Date("2026-11-12T02:05:31Z"),
        updateTime: new Date("2026-11-12T02:05:31Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b6b1eb85-822d-5a19-8cca-cdbc65d4c926",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b6b1eb85-822d-5a19-8cca-cdbc65d4c926",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content:
          "Mixed-direction test: مرحباً بالعالم — שלום לכולם — English 12345 — فارسی: سلام — العربية ٢٠٢٦ — हिन्दी नमस्ते — 中文测试 — 日本語テスト — 한국어 테스트. 👩🏽‍💻✨",
        createTime: new Date("2026-11-12T02:05:42Z"),
        updateTime: new Date("2026-11-12T02:05:42Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f0c76609-7ef8-5110-bc4b-00fa4c4ca7a8",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f0c76609-7ef8-5110-bc4b-00fa4c4ca7a8",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "she blocked him and went back to bed",
        createTime: new Date("2026-11-12T02:05:44Z"),
        updateTime: new Date("2026-11-12T02:05:44Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/84230aad-ad9c-5f1a-b748-648bc4b0c7c5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/84230aad-ad9c-5f1a-b748-648bc4b0c7c5",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "FINALLY A HAPPY ENDING",
        createTime: new Date("2026-11-12T02:06:09Z"),
        updateTime: new Date("2026-11-12T02:06:09Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c35f49b6-bb0f-5472-9a4d-d2fb1a5e5ab0",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c35f49b6-bb0f-5472-9a4d-d2fb1a5e5ab0",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "we can all go to sleep now",
        createTime: new Date("2026-11-12T02:06:09Z"),
        updateTime: new Date("2026-11-12T02:06:09Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/10c10798-eddb-5f00-a8fe-58b464e512c8",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/10c10798-eddb-5f00-a8fe-58b464e512c8",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "unless",
        createTime: new Date("2026-11-12T02:06:48Z"),
        updateTime: new Date("2026-11-12T02:06:48Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/eb80ab9f-0a48-5289-8833-9cce9276ef00",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/eb80ab9f-0a48-5289-8833-9cce9276ef00",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "the cloud has a sequel",
        createTime: new Date("2026-11-12T02:07:47Z"),
        updateTime: new Date("2026-11-12T02:07:47Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3b5edd8d-b521-5814-b33c-d102fc158bae",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3b5edd8d-b521-5814-b33c-d102fc158bae",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "Don't you dare.",
        createTime: new Date("2026-11-12T02:07:52Z"),
        updateTime: new Date("2026-11-12T02:07:52Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a6e71af7-6c18-59ab-ae93-9d9f55cd1a44",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a6e71af7-6c18-59ab-ae93-9d9f55cd1a44",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "good afternoon from the future",
        createTime: new Date("2026-11-12T13:14:00Z"),
        updateTime: new Date("2026-11-12T13:14:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/efd78013-fb19-5688-989f-25526886197c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/efd78013-fb19-5688-989f-25526886197c",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "i brought snacks 🍪🍪🍪",
        createTime: new Date("2026-11-12T13:14:16Z"),
        updateTime: new Date("2026-11-12T13:14:16Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/38de6533-aee7-5f60-b95c-0c9d33fd2974",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/38de6533-aee7-5f60-b95c-0c9d33fd2974",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "makan apa hari ini",
        createTime: new Date("2026-11-12T13:15:38Z"),
        updateTime: new Date("2026-11-12T13:15:38Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bc81b121-cccc-54ce-8ac0-7193459c3c55",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bc81b121-cccc-54ce-8ac0-7193459c3c55",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "bakso or nasi goreng?",
        createTime: new Date("2026-11-12T13:15:38Z"),
        updateTime: new Date("2026-11-12T13:15:38Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3b848b3a-ef48-5ef8-8e62-3e27d38de546",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3b848b3a-ef48-5ef8-8e62-3e27d38de546",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "ramen 🍜",
        createTime: new Date("2026-11-12T13:15:41Z"),
        updateTime: new Date("2026-11-12T13:15:41Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7379cd8f-1eab-523f-8919-a62ab32db0ea",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7379cd8f-1eab-523f-8919-a62ab32db0ea",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "the correct answer is all three",
        createTime: new Date("2026-11-12T13:16:25Z"),
        updateTime: new Date("2026-11-12T13:16:25Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2c2cae5a-168b-51e2-b1e0-34bb278e3852",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2c2cae5a-168b-51e2-b1e0-34bb278e3852",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "you can't eat all three",
        createTime: new Date("2026-11-12T13:16:44Z"),
        updateTime: new Date("2026-11-12T13:16:44Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a919758b-ad8c-50ab-910d-0a728c1b1297",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a919758b-ad8c-50ab-910d-0a728c1b1297",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "watch me",
        createTime: new Date("2026-11-12T13:16:44Z"),
        updateTime: new Date("2026-11-12T13:16:44Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e38935d2-78dd-5b99-9bde-eaf7d8a48034",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e38935d2-78dd-5b99-9bde-eaf7d8a48034",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content:
          "I meant to send one small update and then remembered eight other things. First, somebody knocked over a drink on the table while everyone pretended not to notice. Second, the playlist kept replaying the same song and we collectively decided it was a sign. Third, I forgot my charger, borrowed another one, misplaced that one, and then found both in the same bag. Fourth, a stranger overheard us discussing the croissant and offered a completely serious opinion on pastry architecture. Fifth, I promised myself I would send a short message, which is clearly no longer happening. The point of this paragraph is partly to tell the story and partly to see whether a chat bubble can keep expanding gracefully without suddenly clipping the rest of the words, hiding the timestamp, swallowing the avatar, or making the read receipt disappear. I meant to send one small update and then remembered eight other things. First, somebody knocked over a drink on the table while everyone pretended not to notice. Second, the playlist kept replaying the same song and we collectively decided it was a sign. Third, I forgot my charger, borrowed another one, misplaced that one, and then found both in the same bag. Fourth, a stranger overheard us discussing the croissant and offered a completely serious opinion on pastry architecture. Fifth, I promised myself I would send a short message, which is clearly no longer happening. The point of this paragraph is partly to tell the story and partly to see whether a chat bubble can keep expanding gracefully without suddenly clipping the rest of the words, hiding the timestamp, swallowing the avatar, or making the read receipt disappear. I meant to send one small update and then remembered eight other things. First, somebody knocked over a drink on the table while everyone pretended not to notice. Second, the playlist kept replaying the same song and we collectively decided it was a sign. Third, I forgot my charger, borrowed another one, misplaced that one, and then found both in the same bag. Fourth, a stranger overheard us discussing the croissant and offered a completely serious opinion on pastry architecture. Fifth, I promised myself I would send a short message, which is clearly no longer happening. The point of this paragraph is partly to tell the story and partly to see whether a chat bubble can keep expanding gracefully without suddenly clipping the rest of the words, hiding the timestamp, swallowing the avatar, or making the read receipt disappear. I meant to send one small update and then remembered eight other things. First, somebody knocked over a drink on the table while everyone pretended not to notice. Second, the playlist kept replaying the same song and we collectively decided it was a sign. Third, I forgot my charger, borrowed another one, misplaced that one, and then found both in the same bag. Fourth, a stranger overheard us discussing the croissant and offered a completely serious opinion on pastry architecture. Fifth, I promised myself I would send a short message, which is clearly no longer happening. The point of this paragraph is partly to tell the story and partly to see whether a chat bubble can keep expanding gracefully without suddenly clipping the rest of the words, hiding the timestamp, swallowing the avatar, or making the read receipt disappear. I meant to send one small update and then remembered eight other things. First, somebody knocked over a drink on the table while everyone pretended not to notice. Second, the playlist kept replaying the same song and we collectively decided it was a sign. Third, I forgot my charger, borrowed another one, misplaced that one, and then found both in the same bag. Fourth, a stranger overheard us discussing the croissant and offered a completely serious opinion on pastry architecture. Fifth, I promised myself I would send a short message, which is clearly no longer happening. The point of this paragraph is partly to tell the story and partly to see whether a chat bubble can keep expanding gracefully without suddenly clipping the rest of the words, hiding the timestamp, swallowing the avatar, or making the read receipt disappear. ",
        createTime: new Date("2026-11-12T13:16:52Z"),
        updateTime: new Date("2026-11-12T13:16:52Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d7061d1f-53d1-5edd-8753-aa22c62555b5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d7061d1f-53d1-5edd-8753-aa22c62555b5",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "THAT IS A VERY LONG MESSAGE",
        createTime: new Date("2026-11-12T13:17:26Z"),
        updateTime: new Date("2026-11-12T13:17:26Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7a45f05b-f446-59c7-b093-82839f2de123",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7a45f05b-f446-59c7-b093-82839f2de123",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "I can't even see the start of it anymore",
        createTime: new Date("2026-11-12T13:17:28Z"),
        updateTime: new Date("2026-11-12T13:17:28Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/40f3914f-85cc-57ce-bbf1-761ef7146287",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/40f3914f-85cc-57ce-bbf1-761ef7146287",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "is that the final boss of text wrapping",
        createTime: new Date("2026-11-12T13:17:28Z"),
        updateTime: new Date("2026-11-12T13:17:28Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ea4f9994-6541-5e46-81a1-6e5666374737",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ea4f9994-6541-5e46-81a1-6e5666374737",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "The words are normal but the paragraph is way too long.",
        createTime: new Date("2026-11-12T13:17:45Z"),
        updateTime: new Date("2026-11-12T13:17:45Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ade445fa-7744-51e5-9c9e-8632efbfd4be",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ade445fa-7744-51e5-9c9e-8632efbfd4be",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "i needed somewhere to put my thoughts",
        createTime: new Date("2026-11-12T13:17:51Z"),
        updateTime: new Date("2026-11-12T13:17:51Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d418ef2a-75c4-508d-87ac-a4bcbe4ce49f",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d418ef2a-75c4-508d-87ac-a4bcbe4ce49f",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "we support you and also your use of paragraphs",
        createTime: new Date("2026-11-12T13:18:54Z"),
        updateTime: new Date("2026-11-12T13:18:54Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/688b5be9-cc8d-5a54-b336-2c2923654eb4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/688b5be9-cc8d-5a54-b336-2c2923654eb4",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content:
          "for anyone testing UI: please don't truncate this at 2 lines inside the message bubble",
        createTime: new Date("2026-11-12T13:18:56Z"),
        updateTime: new Date("2026-11-12T13:18:56Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7657ca54-3082-5f41-b9e9-0d64eb40a2ca",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7657ca54-3082-5f41-b9e9-0d64eb40a2ca",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "yes, let it grow to its natural ridiculous height",
        createTime: new Date("2026-11-12T13:18:56Z"),
        updateTime: new Date("2026-11-12T13:18:56Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f1b10248-3c74-5c53-b637-b18d04645b1f",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f1b10248-3c74-5c53-b637-b18d04645b1f",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "but previews should probably clamp it",
        createTime: new Date("2026-11-12T13:19:10Z"),
        updateTime: new Date("2026-11-12T13:19:10Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a401338d-14d7-5505-8a59-b3a50f8c7e30",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a401338d-14d7-5505-8a59-b3a50f8c7e30",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "also test this: 👨‍👩‍👧‍👦 👩🏽‍💻 🧑🏻‍🚀 🏳️‍🌈 🇮🇩 ❤️‍🔥",
        createTime: new Date("2026-11-12T13:19:41Z"),
        updateTime: new Date("2026-11-12T13:19:41Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/95a09327-bbd0-5231-bcb4-e3edfaf3ed18",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/95a09327-bbd0-5231-bcb4-e3edfaf3ed18",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content:
          "all those combined emoji sequences are gonna mess with your character counter",
        createTime: new Date("2026-11-12T13:19:42Z"),
        updateTime: new Date("2026-11-12T13:19:42Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d3cda459-4419-5d08-ad37-8b1c0f5b95c9",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d3cda459-4419-5d08-ad37-8b1c0f5b95c9",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "こんにちは！今日はいい天気ですね 🌸",
        createTime: new Date("2026-11-12T13:19:52Z"),
        updateTime: new Date("2026-11-12T13:19:52Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/60853f5a-df40-5824-b33b-d5ddab7f788f",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/60853f5a-df40-5824-b33b-d5ddab7f788f",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "مرحبا، كيف الحال؟",
        createTime: new Date("2026-11-12T13:20:44Z"),
        updateTime: new Date("2026-11-12T13:20:44Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/087d96d0-ed34-5c2d-8961-cb4b3b62ac9a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/087d96d0-ed34-5c2d-8961-cb4b3b62ac9a",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "안녕하세요 ☺️",
        createTime: new Date("2026-11-12T13:20:44Z"),
        updateTime: new Date("2026-11-12T13:20:44Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ffe529fd-0c2d-5bb5-b93b-5b127171df55",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ffe529fd-0c2d-5bb5-b93b-5b127171df55",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "สวัสดีครับ",
        createTime: new Date("2026-11-12T13:21:11Z"),
        updateTime: new Date("2026-11-12T13:21:11Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2d8f6878-0907-5eb8-8d64-f985c3046061",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2d8f6878-0907-5eb8-8d64-f985c3046061",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "one group chat, six keyboards",
        createTime: new Date("2026-11-12T13:21:11Z"),
        updateTime: new Date("2026-11-12T13:21:11Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5502b0e8-70a5-55e0-8e6d-9086490af414",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5502b0e8-70a5-55e0-8e6d-9086490af414",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "Does selection still work across all of that?",
        createTime: new Date("2026-11-12T13:21:12Z"),
        updateTime: new Date("2026-11-12T13:21:12Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/db4a62c9-85b7-5f77-a369-839588fc6df3",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/db4a62c9-85b7-5f77-a369-839588fc6df3",
        content: "This member's account is no longer available.",
        createTime: new Date("2026-11-12T13:21:14Z"),
        updateTime: new Date("2026-11-12T13:21:14Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e7c5904c-e8cf-514a-a147-724404af0dc7",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e7c5904c-e8cf-514a-a147-724404af0dc7",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "and apparently the mysterious speaker is back",
        createTime: new Date("2026-11-12T13:21:18Z"),
        updateTime: new Date("2026-11-12T13:21:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a0f3758a-d865-509f-bb09-1a7fc339d3dc",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a0f3758a-d865-509f-bb09-1a7fc339d3dc",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "someone tell the phantom to introduce themselves",
        createTime: new Date("2026-11-12T13:21:18Z"),
        updateTime: new Date("2026-11-12T13:21:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/29330cf8-93c6-51d1-a365-438e35cb2a0c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/29330cf8-93c6-51d1-a365-438e35cb2a0c",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "can we play a game",
        createTime: new Date("2026-11-12T18:01:00Z"),
        updateTime: new Date("2026-11-12T18:01:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/857d858a-0426-50e8-981d-54d135eaf637",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/857d858a-0426-50e8-981d-54d135eaf637",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "yes",
        createTime: new Date("2026-11-12T18:01:11Z"),
        updateTime: new Date("2026-11-12T18:01:11Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/fcd90e1f-bca7-52f3-9d96-fafb9e3d5db5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/fcd90e1f-bca7-52f3-9d96-fafb9e3d5db5",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "everyone describe their day in three words",
        createTime: new Date("2026-11-12T18:01:13Z"),
        updateTime: new Date("2026-11-12T18:01:13Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9d07a488-9ecb-5f83-a6f9-d983def7c239",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9d07a488-9ecb-5f83-a6f9-d983def7c239",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "meetings meetings meetings",
        createTime: new Date("2026-11-12T18:01:38Z"),
        updateTime: new Date("2026-11-12T18:01:38Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3e812c01-376d-5352-b9cd-89ff15733180",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3e812c01-376d-5352-b9cd-89ff15733180",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "coffee saved me",
        createTime: new Date("2026-11-12T18:01:38Z"),
        updateTime: new Date("2026-11-12T18:01:38Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7ecdae86-6f31-51a6-be46-283dc5bd2012",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7ecdae86-6f31-51a6-be46-283dc5bd2012",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "barely saved me",
        createTime: new Date("2026-11-12T18:02:17Z"),
        updateTime: new Date("2026-11-12T18:02:17Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/561da614-8577-5aed-b4fa-45fd43a19403",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/561da614-8577-5aed-b4fa-45fd43a19403",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "forgot my lunch",
        createTime: new Date("2026-11-12T18:03:16Z"),
        updateTime: new Date("2026-11-12T18:03:16Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d5ad5f25-204f-5199-b4e9-6a396d4561d6",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d5ad5f25-204f-5199-b4e9-6a396d4561d6",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "ate his lunch",
        createTime: new Date("2026-11-12T18:03:21Z"),
        updateTime: new Date("2026-11-12T18:03:21Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d71b8f5e-b762-57da-8e46-00ad8abe2d60",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d71b8f5e-b762-57da-8e46-00ad8abe2d60",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "THAT WAS YOU???",
        createTime: new Date("2026-11-12T18:03:22Z"),
        updateTime: new Date("2026-11-12T18:03:22Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6a17bcab-1d4a-58e8-bd24-113f21222ea6",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6a17bcab-1d4a-58e8-bd24-113f21222ea6",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "allegedly 🍔",
        createTime: new Date("2026-11-12T18:03:38Z"),
        updateTime: new Date("2026-11-12T18:03:38Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/88fba322-f0f3-54cd-be43-00779527bda2",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/88fba322-f0f3-54cd-be43-00779527bda2",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "rain, tea, books",
        createTime: new Date("2026-11-12T18:05:00Z"),
        updateTime: new Date("2026-11-12T18:05:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6d32157a-0dba-5fb7-9a86-1f31c99b9e64",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6d32157a-0dba-5fb7-9a86-1f31c99b9e64",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "macet hujan lapar",
        createTime: new Date("2026-11-12T18:05:00Z"),
        updateTime: new Date("2026-11-12T18:05:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/03e63962-fe9a-5e6e-a741-21ba27a5d93d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/03e63962-fe9a-5e6e-a741-21ba27a5d93d",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "same same same",
        createTime: new Date("2026-11-12T18:05:03Z"),
        updateTime: new Date("2026-11-12T18:05:03Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b1ac0bc7-eb83-5f11-bee6-21590102e816",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b1ac0bc7-eb83-5f11-bee6-21590102e816",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "why only three",
        createTime: new Date("2026-11-12T18:05:47Z"),
        updateTime: new Date("2026-11-12T18:05:47Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/570b1081-c2ba-55ea-a060-fb40c4a75978",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/570b1081-c2ba-55ea-a060-fb40c4a75978",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "i need at least forty",
        createTime: new Date("2026-11-12T18:06:06Z"),
        updateTime: new Date("2026-11-12T18:06:06Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2a04ddb2-31fc-5b3c-9986-bc1da958413a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2a04ddb2-31fc-5b3c-9986-bc1da958413a",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content:
          "So the day began with me looking for my keys for fifteen minutes. They were already in my hand, which should have been the moment I accepted that today would not be a normal day. Then I missed the bus, walked to a different stop, got on the wrong bus, and spent the first twenty minutes of the commute wondering why the streets looked unfamiliar. After that I ordered iced coffee and received hot tea. I decided to consider it a sign to try new things. At work I joined a call that had been rescheduled but nobody updated the meeting link, so six of us waited in two empty rooms. At lunch I met a dog that was friendlier than most humans and also much better at listening. By the evening I had a list of things to do, a completely different list of things I had done, and an urge to tell the group all of it. Please admire the way this message refuses to reach a natural conclusion. So the day began with me looking for my keys for fifteen minutes. They were already in my hand, which should have been the moment I accepted that today would not be a normal day. Then I missed the bus, walked to a different stop, got on the wrong bus, and spent the first twenty minutes of the commute wondering why the streets looked unfamiliar. After that I ordered iced coffee and received hot tea. I decided to consider it a sign to try new things. At work I joined a call that had been rescheduled but nobody updated the meeting link, so six of us waited in two empty rooms. At lunch I met a dog that was friendlier than most humans and also much better at listening. By the evening I had a list of things to do, a completely different list of things I had done, and an urge to tell the group all of it. Please admire the way this message refuses to reach a natural conclusion. So the day began with me looking for my keys for fifteen minutes. They were already in my hand, which should have been the moment I accepted that today would not be a normal day. Then I missed the bus, walked to a different stop, got on the wrong bus, and spent the first twenty minutes of the commute wondering why the streets looked unfamiliar. After that I ordered iced coffee and received hot tea. I decided to consider it a sign to try new things. At work I joined a call that had been rescheduled but nobody updated the meeting link, so six of us waited in two empty rooms. At lunch I met a dog that was friendlier than most humans and also much better at listening. By the evening I had a list of things to do, a completely different list of things I had done, and an urge to tell the group all of it. Please admire the way this message refuses to reach a natural conclusion. So the day began with me looking for my keys for fifteen minutes. They were already in my hand, which should have been the moment I accepted that today would not be a normal day. Then I missed the bus, walked to a different stop, got on the wrong bus, and spent the first twenty minutes of the commute wondering why the streets looked unfamiliar. After that I ordered iced coffee and received hot tea. I decided to consider it a sign to try new things. At work I joined a call that had been rescheduled but nobody updated the meeting link, so six of us waited in two empty rooms. At lunch I met a dog that was friendlier than most humans and also much better at listening. By the evening I had a list of things to do, a completely different list of things I had done, and an urge to tell the group all of it. Please admire the way this message refuses to reach a natural conclusion. ",
        createTime: new Date("2026-11-12T18:06:06Z"),
        updateTime: new Date("2026-11-12T18:06:06Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5885068b-c1e9-5f7b-b773-5b4ca4f08073",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5885068b-c1e9-5f7b-b773-5b4ca4f08073",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "that was not three words",
        createTime: new Date("2026-11-12T18:06:14Z"),
        updateTime: new Date("2026-11-12T18:11:14Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/450214e0-5699-5d02-856c-b1c635c57769",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/450214e0-5699-5d02-856c-b1c635c57769",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "three very long feelings",
        createTime: new Date("2026-11-12T18:06:48Z"),
        updateTime: new Date("2026-11-12T18:06:48Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/66985169-48c0-5e01-8b14-af16d6ec539c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/66985169-48c0-5e01-8b14-af16d6ec539c",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content:
          'I was going to say "productive but tired" and now it feels inadequate.',
        createTime: new Date("2026-11-12T18:06:50Z"),
        updateTime: new Date("2026-11-12T18:06:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/fc4ccb1d-5c03-59bc-941b-6eebccf13628",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/fc4ccb1d-5c03-59bc-941b-6eebccf13628",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "alive, confused, hydrated",
        createTime: new Date("2026-11-12T18:06:50Z"),
        updateTime: new Date("2026-11-12T18:06:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3011c46a-c338-579a-9b41-66a47b305edb",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3011c46a-c338-579a-9b41-66a47b305edb",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "honestly that's the goal",
        createTime: new Date("2026-11-12T18:07:07Z"),
        updateTime: new Date("2026-11-12T18:07:07Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1b72a9d0-9663-5eb5-a9d0-9b60432a1043",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1b72a9d0-9663-5eb5-a9d0-9b60432a1043",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "keyboard keyboard keyboard",
        createTime: new Date("2026-11-12T18:07:13Z"),
        updateTime: new Date("2026-11-12T18:07:13Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/add1f8ab-30c8-542b-8ffe-294a88b26350",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/add1f8ab-30c8-542b-8ffe-294a88b26350",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "this is not a metaphor",
        createTime: new Date("2026-11-12T18:08:16Z"),
        updateTime: new Date("2026-11-12T18:08:16Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2bd79574-75ba-5a04-b4a9-6121d735af6e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2bd79574-75ba-5a04-b4a9-6121d735af6e",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "my spacebar is broken",
        createTime: new Date("2026-11-12T18:08:18Z"),
        updateTime: new Date("2026-11-12T18:08:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0b888304-a3db-5fad-8f75-c2aad068cbc4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0b888304-a3db-5fad-8f75-c2aad068cbc4",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content:
          "https://example.invalid/definitely-not-a-real-link?tracking=abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0abcD1234_XyZ-0",
        createTime: new Date("2026-11-12T18:08:18Z"),
        updateTime: new Date("2026-11-12T18:08:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/176818f2-bf1e-52c0-a385-2418287ed77c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/176818f2-bf1e-52c0-a385-2418287ed77c",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "this link is wider than my future",
        createTime: new Date("2026-11-12T18:08:32Z"),
        updateTime: new Date("2026-11-12T18:08:32Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f8901719-dcb3-5a23-ac17-5a27a7c80ec1",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f8901719-dcb3-5a23-ac17-5a27a7c80ec1",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "why did you paste the entire tracking token",
        createTime: new Date("2026-11-12T18:09:03Z"),
        updateTime: new Date("2026-11-12T18:09:03Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4e230d4d-fd36-53b6-9012-0716a5dfa113",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4e230d4d-fd36-53b6-9012-0716a5dfa113",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "fake URL! please don't try to open it",
        createTime: new Date("2026-11-12T18:09:04Z"),
        updateTime: new Date("2026-11-12T18:09:04Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e3257a2b-85d6-5166-a0bd-dc3c083486f8",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e3257a2b-85d6-5166-a0bd-dc3c083486f8",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "anyone awake",
        createTime: new Date("2026-11-13T00:28:00Z"),
        updateTime: new Date("2026-11-13T00:28:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/55c0dff7-16e3-5454-a995-f5ee185d9ce9",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/55c0dff7-16e3-5454-a995-f5ee185d9ce9",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "hello",
        createTime: new Date("2026-11-13T00:28:52Z"),
        updateTime: new Date("2026-11-13T00:28:52Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c94ba8f6-2343-5d78-b7c1-0591b1b60279",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c94ba8f6-2343-5d78-b7c1-0591b1b60279",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "helloooo",
        createTime: new Date("2026-11-13T00:28:52Z"),
        updateTime: new Date("2026-11-13T00:28:52Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c0f608fe-e0c4-5ed1-9f98-5313272f8aec",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c0f608fe-e0c4-5ed1-9f98-5313272f8aec",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "HELLOOOOOOOOOOO",
        createTime: new Date("2026-11-13T00:29:19Z"),
        updateTime: new Date("2026-11-13T00:29:19Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8308232c-681e-5fdb-a352-b82d0422a8e9",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8308232c-681e-5fdb-a352-b82d0422a8e9",
        content: " ",
        createTime: new Date("2026-11-13T00:29:19Z"),
        updateTime: new Date("2026-11-13T00:29:19Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c5c11d9c-4064-5c7d-b9ab-39451f7249f9",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c5c11d9c-4064-5c7d-b9ab-39451f7249f9",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "why did the ghost reply with a single space",
        createTime: new Date("2026-11-13T00:29:20Z"),
        updateTime: new Date("2026-11-13T00:29:20Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d2399aa6-e21d-5b59-a360-9079174f0337",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d2399aa6-e21d-5b59-a360-9079174f0337",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "it's me",
        createTime: new Date("2026-11-13T00:29:22Z"),
        updateTime: new Date("2026-11-13T00:29:22Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f63b4487-5588-52ad-b795-7913b9dc097e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f63b4487-5588-52ad-b795-7913b9dc097e",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "I was pretending to be asleep",
        createTime: new Date("2026-11-13T00:29:26Z"),
        updateTime: new Date("2026-11-13T00:29:26Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/68ceb369-0254-5cee-b271-0006582dcfb3",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/68ceb369-0254-5cee-b271-0006582dcfb3",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "that is personal betrayal",
        createTime: new Date("2026-11-13T00:29:26Z"),
        updateTime: new Date("2026-11-13T00:29:26Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4bcb33ba-5d2c-548c-9f7d-abdcfaa9a278",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4bcb33ba-5d2c-548c-9f7d-abdcfaa9a278",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "I needed five minutes of silence",
        createTime: new Date("2026-11-13T00:29:33Z"),
        updateTime: new Date("2026-11-13T00:29:33Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3b51e9a5-b53f-57da-b987-5b43e952ba9f",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3b51e9a5-b53f-57da-b987-5b43e952ba9f",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "i am also awake",
        createTime: new Date("2026-11-13T00:29:44Z"),
        updateTime: new Date("2026-11-13T00:29:44Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7672e09a-1e6b-5f6a-995b-f79b8c474916",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7672e09a-1e6b-5f6a-995b-f79b8c474916",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "not on purpose",
        createTime: new Date("2026-11-13T00:29:46Z"),
        updateTime: new Date("2026-11-13T00:29:46Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8f00e888-7b01-5f37-be05-65cbefac632d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8f00e888-7b01-5f37-be05-65cbefac632d",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content:
          "I wish phones had a feature where we could ignore group chats.",
        createTime: new Date("2026-11-13T00:30:11Z"),
        updateTime: new Date("2026-11-13T00:30:11Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e16645e2-a50e-52c1-827d-b0bc88361529",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e16645e2-a50e-52c1-827d-b0bc88361529",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "mute button: am i a joke to you",
        createTime: new Date("2026-11-13T00:30:11Z"),
        updateTime: new Date("2026-11-13T00:30:11Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9a009d3d-ee1e-53d7-b4fa-c7351fec63ee",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9a009d3d-ee1e-53d7-b4fa-c7351fec63ee",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "I muted you all two days ago.",
        createTime: new Date("2026-11-13T00:30:50Z"),
        updateTime: new Date("2026-11-13T00:30:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3ed84802-4439-5e27-804d-0756a0cc39b2",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3ed84802-4439-5e27-804d-0756a0cc39b2",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "HOW DID YOU SEE THAT THEN",
        createTime: new Date("2026-11-13T00:31:49Z"),
        updateTime: new Date("2026-11-13T00:31:49Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8e26f206-cded-5769-ba30-1ff46cbdc232",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8e26f206-cded-5769-ba30-1ff46cbdc232",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "I checked my phone. A mistake.",
        createTime: new Date("2026-11-13T00:31:54Z"),
        updateTime: new Date("2026-11-13T00:31:54Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/fedac30e-09f5-5f79-ba28-9e8d611301d3",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/fedac30e-09f5-5f79-ba28-9e8d611301d3",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "congrats we are all making excellent choices",
        createTime: new Date("2026-11-13T00:31:55Z"),
        updateTime: new Date("2026-11-13T00:31:55Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ed709ef4-7c18-5f2a-a887-d373b05d9afd",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ed709ef4-7c18-5f2a-a887-d373b05d9afd",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "🌙✨",
        createTime: new Date("2026-11-13T00:32:11Z"),
        updateTime: new Date("2026-11-13T00:32:11Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6ab0a0d8-ae2a-540d-9c6d-b524195aae30",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6ab0a0d8-ae2a-540d-9c6d-b524195aae30",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content:
          "first line\n\n\nsecond line after three line breaks\n    indented with four spaces\n\tindented with a tab\n\nfinal line (the empty space above is intentional)",
        createTime: new Date("2026-11-13T00:33:33Z"),
        updateTime: new Date("2026-11-13T00:33:33Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ad15cddb-c617-571a-b2af-27ae14ccbd9b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ad15cddb-c617-571a-b2af-27ae14ccbd9b",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "it's like a poem but every stanza is mildly concerning",
        createTime: new Date("2026-11-13T00:33:33Z"),
        updateTime: new Date("2026-11-13T00:33:33Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a3ebea2c-55fc-5776-ba78-b2a8c2267b09",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a3ebea2c-55fc-5776-ba78-b2a8c2267b09",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "the blank lines are doing dramatic work",
        createTime: new Date("2026-11-13T00:33:36Z"),
        updateTime: new Date("2026-11-13T00:33:36Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bd8f6396-c74b-58ed-b584-36d7e3fb5b00",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bd8f6396-c74b-58ed-b584-36d7e3fb5b00",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "ok seriously go sleep",
        createTime: new Date("2026-11-13T00:34:20Z"),
        updateTime: new Date("2026-11-13T00:34:20Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/fded9f14-5983-5bd2-a690-f9e77409d07e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/fded9f14-5983-5bd2-a690-f9e77409d07e",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "okay",
        createTime: new Date("2026-11-13T00:34:39Z"),
        updateTime: new Date("2026-11-13T00:34:39Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0d5bc652-cb4b-5059-a02b-9f53255087b4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0d5bc652-cb4b-5059-a02b-9f53255087b4",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "okay okay",
        createTime: new Date("2026-11-13T00:34:39Z"),
        updateTime: new Date("2026-11-13T00:34:39Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/881ba873-38b3-51a0-89d8-22faeeba1de5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/881ba873-38b3-51a0-89d8-22faeeba1de5",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "okay okay okay",
        createTime: new Date("2026-11-13T00:34:47Z"),
        updateTime: new Date("2026-11-13T00:34:47Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e2ad982e-081e-50dc-b789-e0e064d18720",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e2ad982e-081e-50dc-b789-e0e064d18720",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "morning everybody 🌞",
        createTime: new Date("2026-11-13T10:06:00Z"),
        updateTime: new Date("2026-11-13T10:06:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3c64e2d7-8a52-5116-9f48-505ed16691fe",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3c64e2d7-8a52-5116-9f48-505ed16691fe",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "siang bang",
        createTime: new Date("2026-11-13T10:06:02Z"),
        updateTime: new Date("2026-11-13T10:06:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ef5ab499-f656-59ae-8139-7cdd7db56577",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ef5ab499-f656-59ae-8139-7cdd7db56577",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "pagi? udah jam segini 😭",
        createTime: new Date("2026-11-13T10:06:02Z"),
        updateTime: new Date("2026-11-13T10:06:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8b897c50-b599-5733-8b3c-9eac4cfc0775",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8b897c50-b599-5733-8b3c-9eac4cfc0775",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "this group spans multiple time zones apparently",
        createTime: new Date("2026-11-13T10:06:19Z"),
        updateTime: new Date("2026-11-13T10:06:19Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/57cfe502-7059-57e7-82f1-4e50d24d6512",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/57cfe502-7059-57e7-82f1-4e50d24d6512",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "time zones are just different flavors of confusion",
        createTime: new Date("2026-11-13T10:06:25Z"),
        updateTime: new Date("2026-11-13T10:06:25Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0e951a1e-50f6-5843-828f-06585b9ffc53",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0e951a1e-50f6-5843-828f-06585b9ffc53",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "question: what's the longest word you've ever seen",
        createTime: new Date("2026-11-13T10:07:28Z"),
        updateTime: new Date("2026-11-13T10:07:28Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f2257f33-1379-5e8d-8a6e-58d1adfd6929",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f2257f33-1379-5e8d-8a6e-58d1adfd6929",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "supercalifragilisticexpialidocious",
        createTime: new Date("2026-11-13T10:07:30Z"),
        updateTime: new Date("2026-11-13T10:07:30Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d00ee0d9-dd7d-5929-b4d8-87086e8ff3e7",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d00ee0d9-dd7d-5929-b4d8-87086e8ff3e7",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "that is not even the longest word on this page",
        createTime: new Date("2026-11-13T10:07:30Z"),
        updateTime: new Date("2026-11-13T10:07:30Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6fe17ee3-6f06-5627-8336-7207726e7525",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6fe17ee3-6f06-5627-8336-7207726e7525",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content:
          "漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻漢字カタカナ한글αβγδεζηθабвгдежз0123456789🦊🐣💻",
        createTime: new Date("2026-11-13T10:07:44Z"),
        updateTime: new Date("2026-11-13T10:07:44Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a4f09db1-5a15-54ce-9e22-487a01e05f78",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a4f09db1-5a15-54ce-9e22-487a01e05f78",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "my phone just got warmer",
        createTime: new Date("2026-11-13T10:08:15Z"),
        updateTime: new Date("2026-11-13T10:08:15Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2907123f-a2c7-51e6-9a74-9a2f357e2620",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2907123f-a2c7-51e6-9a74-9a2f357e2620",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "it's compiling the word",
        createTime: new Date("2026-11-13T10:08:16Z"),
        updateTime: new Date("2026-11-13T10:08:16Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/adae5ebb-0b65-5bef-9cc0-8dfc7ae26059",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/adae5ebb-0b65-5bef-9cc0-8dfc7ae26059",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "Can we test a message that contains only punctuation?",
        createTime: new Date("2026-11-13T10:08:26Z"),
        updateTime: new Date("2026-11-13T10:08:26Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b18c63fa-77fb-5d38-b4a9-c264e2a7842e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b18c63fa-77fb-5d38-b4a9-c264e2a7842e",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "...?!??!!??!?...,,,,;;;:::---___",
        createTime: new Date("2026-11-13T10:09:18Z"),
        updateTime: new Date("2026-11-13T10:09:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a865c3ad-5f94-5e1b-a295-09295506ae84",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a865c3ad-5f94-5e1b-a295-09295506ae84",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "done",
        createTime: new Date("2026-11-13T10:09:18Z"),
        updateTime: new Date("2026-11-13T10:09:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1cc7daf5-7e28-511e-85e5-27ce74d82216",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1cc7daf5-7e28-511e-85e5-27ce74d82216",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "what about a message with just emoji?",
        createTime: new Date("2026-11-13T10:09:45Z"),
        updateTime: new Date("2026-11-13T10:09:45Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/78a84059-984e-5d45-9288-35ad7af62f6c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/78a84059-984e-5d45-9288-35ad7af62f6c",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "🫠🫠🫠🫠🫠🫠🫠🫠🫠🫠",
        createTime: new Date("2026-11-13T10:09:45Z"),
        updateTime: new Date("2026-11-13T10:09:45Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2ec9a7d2-d99c-5552-86ef-f60a5ebd5385",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2ec9a7d2-d99c-5552-86ef-f60a5ebd5385",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "what about a message with just a period",
        createTime: new Date("2026-11-13T10:09:46Z"),
        updateTime: new Date("2026-11-13T10:09:46Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/19d6ae7e-654f-5006-a079-f1122e555c44",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/19d6ae7e-654f-5006-a079-f1122e555c44",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: ".",
        createTime: new Date("2026-11-13T10:09:48Z"),
        updateTime: new Date("2026-11-13T10:09:48Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4defe230-40a3-5344-88c8-1100f4195f07",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4defe230-40a3-5344-88c8-1100f4195f07",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: ".",
        createTime: new Date("2026-11-13T10:09:52Z"),
        updateTime: new Date("2026-11-13T10:09:52Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/68398b42-b906-5c9b-9c13-35551b9b0095",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/68398b42-b906-5c9b-9c13-35551b9b0095",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: ".",
        createTime: new Date("2026-11-13T10:09:52Z"),
        updateTime: new Date("2026-11-13T10:09:52Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d502ff5f-54fb-5cd9-b8f3-86dd785d6761",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d502ff5f-54fb-5cd9-b8f3-86dd785d6761",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "why are there four separate bubbles",
        createTime: new Date("2026-11-13T10:09:59Z"),
        updateTime: new Date("2026-11-13T10:09:59Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ad8aca26-6a52-56da-a9f7-7e90b3980133",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ad8aca26-6a52-56da-a9f7-7e90b3980133",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content:
          "because someone has chosen violence against grouping algorithms",
        createTime: new Date("2026-11-13T10:10:10Z"),
        updateTime: new Date("2026-11-13T10:10:10Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/68ad152f-3f04-5d4b-86f7-50d1716e378c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/68ad152f-3f04-5d4b-86f7-50d1716e378c",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "長文テスト、改行テスト、絵文字テスト、全部入り！",
        createTime: new Date("2026-11-13T10:10:12Z"),
        updateTime: new Date("2026-11-13T10:10:12Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/aa17a582-f313-5968-9dff-874991a99883",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/aa17a582-f313-5968-9dff-874991a99883",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content:
          '{\n  "thread": "Certified Yappers",\n  "isChaos": true,\n  "messages": ["short", "looooooooong", "👩🏽‍💻"],\n  "note": "This is a string in a chat bubble, not an object"\n}',
        createTime: new Date("2026-11-13T10:10:37Z"),
        updateTime: new Date("2026-11-13T10:10:37Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/35b5b361-d3e0-50e0-8d96-21a760eee7e9",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/35b5b361-d3e0-50e0-8d96-21a760eee7e9",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "JSON in the middle of lunch, my favorite food",
        createTime: new Date("2026-11-13T10:10:37Z"),
        updateTime: new Date("2026-11-13T10:10:37Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d0a9aa76-33ab-5ea6-8ea4-1f648a98e0a1",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d0a9aa76-33ab-5ea6-8ea4-1f648a98e0a1",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "ini bukan restoran coding 😭",
        createTime: new Date("2026-11-13T10:11:16Z"),
        updateTime: new Date("2026-11-13T10:11:16Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7214cb00-6f0e-5a35-8587-b200a4568b83",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7214cb00-6f0e-5a35-8587-b200a4568b83",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "I have a serious question",
        createTime: new Date("2026-11-13T21:10:00Z"),
        updateTime: new Date("2026-11-13T21:10:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/000403b1-e383-5135-89bd-a25ef2429867",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/000403b1-e383-5135-89bd-a25ef2429867",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content:
          "would you rather fight one croissant-sized dog or one dog-sized croissant",
        createTime: new Date("2026-11-13T21:10:05Z"),
        updateTime: new Date("2026-11-13T21:10:05Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/465f8247-b24b-50c7-8e76-62dc9c13a831",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/465f8247-b24b-50c7-8e76-62dc9c13a831",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "croissant-sized dog obviously",
        createTime: new Date("2026-11-13T21:10:06Z"),
        updateTime: new Date("2026-11-13T21:10:06Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9810833a-cc6c-5428-a0bf-8d73dca30cd0",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9810833a-cc6c-5428-a0bf-8d73dca30cd0",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "dog-sized croissant. free dinner.",
        createTime: new Date("2026-11-13T21:10:22Z"),
        updateTime: new Date("2026-11-13T21:10:22Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4370598b-9546-5c2c-8b9c-5af4e24da18e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/4370598b-9546-5c2c-8b9c-5af4e24da18e",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "does the croissant have teeth",
        createTime: new Date("2026-11-13T21:11:44Z"),
        updateTime: new Date("2026-11-13T21:11:44Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a641266a-019f-5487-997b-be08a0e1bf5d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a641266a-019f-5487-997b-be08a0e1bf5d",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "please don't introduce more variables",
        createTime: new Date("2026-11-13T21:11:44Z"),
        updateTime: new Date("2026-11-13T21:11:44Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/61cff58e-a643-5ae6-a30d-35a6f775779f",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/61cff58e-a643-5ae6-a30d-35a6f775779f",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "is the croissant fresh",
        createTime: new Date("2026-11-13T21:11:47Z"),
        updateTime: new Date("2026-11-13T21:11:47Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/76e8e453-4366-5a3b-9f09-9c0c0a2ee59e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/76e8e453-4366-5a3b-9f09-9c0c0a2ee59e",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "is the dog friendly",
        createTime: new Date("2026-11-13T21:12:31Z"),
        updateTime: new Date("2026-11-13T21:12:31Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6b005bd2-f4fb-5010-a940-790dae219310",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6b005bd2-f4fb-5010-a940-790dae219310",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "what's the exchange rate from dog to croissant",
        createTime: new Date("2026-11-13T21:12:50Z"),
        updateTime: new Date("2026-11-13T21:12:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3dbf998e-7a40-57cc-a65f-e0ea1a2cd9db",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3dbf998e-7a40-57cc-a65f-e0ea1a2cd9db",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "my fault, I caused all of this",
        createTime: new Date("2026-11-13T21:12:50Z"),
        updateTime: new Date("2026-11-13T21:12:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c760efd1-1ad2-594e-834a-651c75f23de7",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c760efd1-1ad2-594e-834a-651c75f23de7",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "it started with one guy's text",
        createTime: new Date("2026-11-13T21:12:58Z"),
        updateTime: new Date("2026-11-13T21:12:58Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5888051a-4894-5e55-a39f-74a89ea3d469",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5888051a-4894-5e55-a39f-74a89ea3d469",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "the lore is expanding",
        createTime: new Date("2026-11-13T21:13:32Z"),
        updateTime: new Date("2026-11-13T21:13:32Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/efc9a8ff-945c-5816-a172-48b432ffdca8",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/efc9a8ff-945c-5816-a172-48b432ffdca8",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content:
          "Hypothesis: the dog-sized croissant would be the better opponent because it would lack the skeletal structure needed for sustained movement. Counterargument: no one has established whether the croissant is sentient, stale, armored with almond flakes, or equipped with the emotional persistence of a regular household pet. A croissant-sized dog, meanwhile, would retain canine instincts but could potentially be distracted by crumbs. Another major consideration is whether the croissant is baked fresh or frozen solid. The committee has failed to define its terms, set a budget, or provide a reasonable rubric. Therefore I move that we postpone all combat until someone brings snacks. Hypothesis: the dog-sized croissant would be the better opponent because it would lack the skeletal structure needed for sustained movement. Counterargument: no one has established whether the croissant is sentient, stale, armored with almond flakes, or equipped with the emotional persistence of a regular household pet. A croissant-sized dog, meanwhile, would retain canine instincts but could potentially be distracted by crumbs. Another major consideration is whether the croissant is baked fresh or frozen solid. The committee has failed to define its terms, set a budget, or provide a reasonable rubric. Therefore I move that we postpone all combat until someone brings snacks. Hypothesis: the dog-sized croissant would be the better opponent because it would lack the skeletal structure needed for sustained movement. Counterargument: no one has established whether the croissant is sentient, stale, armored with almond flakes, or equipped with the emotional persistence of a regular household pet. A croissant-sized dog, meanwhile, would retain canine instincts but could potentially be distracted by crumbs. Another major consideration is whether the croissant is baked fresh or frozen solid. The committee has failed to define its terms, set a budget, or provide a reasonable rubric. Therefore I move that we postpone all combat until someone brings snacks. Hypothesis: the dog-sized croissant would be the better opponent because it would lack the skeletal structure needed for sustained movement. Counterargument: no one has established whether the croissant is sentient, stale, armored with almond flakes, or equipped with the emotional persistence of a regular household pet. A croissant-sized dog, meanwhile, would retain canine instincts but could potentially be distracted by crumbs. Another major consideration is whether the croissant is baked fresh or frozen solid. The committee has failed to define its terms, set a budget, or provide a reasonable rubric. Therefore I move that we postpone all combat until someone brings snacks. Hypothesis: the dog-sized croissant would be the better opponent because it would lack the skeletal structure needed for sustained movement. Counterargument: no one has established whether the croissant is sentient, stale, armored with almond flakes, or equipped with the emotional persistence of a regular household pet. A croissant-sized dog, meanwhile, would retain canine instincts but could potentially be distracted by crumbs. Another major consideration is whether the croissant is baked fresh or frozen solid. The committee has failed to define its terms, set a budget, or provide a reasonable rubric. Therefore I move that we postpone all combat until someone brings snacks. ",
        createTime: new Date("2026-11-13T21:13:34Z"),
        updateTime: new Date("2026-11-13T21:13:34Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c580b717-dd32-52f6-bde2-66f687486ba3",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c580b717-dd32-52f6-bde2-66f687486ba3",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "you could submit that to a journal",
        createTime: new Date("2026-11-13T21:13:34Z"),
        updateTime: new Date("2026-11-13T21:13:34Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b82e3d75-176c-52cc-a4aa-119ac386df0a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b82e3d75-176c-52cc-a4aa-119ac386df0a",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "We need a peer review on that paragraph.",
        createTime: new Date("2026-11-13T21:13:51Z"),
        updateTime: new Date("2026-11-13T21:13:51Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/80e06d7d-83fd-5ac3-b4d9-e3d6a1bf993d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/80e06d7d-83fd-5ac3-b4d9-e3d6a1bf993d",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "peer review: 🥐/10",
        createTime: new Date("2026-11-13T21:13:57Z"),
        updateTime: new Date("2026-11-13T21:13:57Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/dc5ddde8-334f-507b-b559-2ef3a65edc6c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/dc5ddde8-334f-507b-b559-2ef3a65edc6c",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "this chat has become sentient",
        createTime: new Date("2026-11-13T21:15:00Z"),
        updateTime: new Date("2026-11-13T21:15:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1c229763-815d-571a-9c91-e7192be80563",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1c229763-815d-571a-9c91-e7192be80563",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "same user sent 4 messages in a row challenge",
        createTime: new Date("2026-11-13T21:15:02Z"),
        updateTime: new Date("2026-11-13T21:15:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9126dce5-dfbc-583d-b491-dd15437984a4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9126dce5-dfbc-583d-b491-dd15437984a4",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "one",
        createTime: new Date("2026-11-13T21:15:02Z"),
        updateTime: new Date("2026-11-13T21:15:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0c6e541e-a3c7-554a-93e4-f6fac8beaf90",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0c6e541e-a3c7-554a-93e4-f6fac8beaf90",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "two",
        createTime: new Date("2026-11-13T21:15:16Z"),
        updateTime: new Date("2026-11-13T21:15:16Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9d0450f7-e7ee-5bdd-89ab-531eca9bdbee",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9d0450f7-e7ee-5bdd-89ab-531eca9bdbee",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "three",
        createTime: new Date("2026-11-13T21:15:47Z"),
        updateTime: new Date("2026-11-13T21:15:47Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bb85e034-7a51-5564-86b1-3a3eaab4a38a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bb85e034-7a51-5564-86b1-3a3eaab4a38a",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "four",
        createTime: new Date("2026-11-13T21:15:48Z"),
        updateTime: new Date("2026-11-13T21:15:48Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0b30db4e-fc08-59a7-a3b4-1a4c884c28df",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0b30db4e-fc08-59a7-a3b4-1a4c884c28df",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "five actually",
        createTime: new Date("2026-11-13T21:15:58Z"),
        updateTime: new Date("2026-11-13T21:15:58Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/baf507e5-eaad-5935-8cb4-d30eee0cfa61",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/baf507e5-eaad-5935-8cb4-d30eee0cfa61",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "please never call anything a challenge again",
        createTime: new Date("2026-11-13T21:16:50Z"),
        updateTime: new Date("2026-11-13T21:16:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/57a7d988-8266-5dfc-afaf-b654982fdc86",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/57a7d988-8266-5dfc-afaf-b654982fdc86",
        content: "A moderator pinned a message. (Synthetic system-event text.)",
        createTime: new Date("2026-11-13T21:16:50Z"),
        updateTime: new Date("2026-11-13T21:16:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b29b37f4-51e4-5c5b-9909-81d8128aa11d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b29b37f4-51e4-5c5b-9909-81d8128aa11d",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "which one",
        createTime: new Date("2026-11-13T21:17:17Z"),
        updateTime: new Date("2026-11-13T21:17:17Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e2b849c6-8c9d-5371-828d-88328990c517",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e2b849c6-8c9d-5371-828d-88328990c517",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "the croissant philosophy essay apparently",
        createTime: new Date("2026-11-13T21:17:17Z"),
        updateTime: new Date("2026-11-13T21:17:17Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/41c00132-4bc4-56b5-bccd-8a4101210378",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/41c00132-4bc4-56b5-bccd-8a4101210378",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "good morning, tiny sunrise report: 🌅",
        createTime: new Date("2026-11-14T06:15:00Z"),
        updateTime: new Date("2026-11-14T06:15:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c3d97d91-c546-5081-a91b-52db549d1046",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c3d97d91-c546-5081-a91b-52db549d1046",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "the sky is pink",
        createTime: new Date("2026-11-14T06:15:02Z"),
        updateTime: new Date("2026-11-14T06:15:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/adfef908-2c28-54fa-bb00-f626b7a38628",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/adfef908-2c28-54fa-bb00-f626b7a38628",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "my coffee is hot",
        createTime: new Date("2026-11-14T06:15:06Z"),
        updateTime: new Date("2026-11-14T06:15:06Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8d035355-ba94-562a-8730-d0ce6d8704ff",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8d035355-ba94-562a-8730-d0ce6d8704ff",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "this group is still weird",
        createTime: new Date("2026-11-14T06:15:06Z"),
        updateTime: new Date("2026-11-14T06:15:06Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3515e447-7ddd-51b1-947c-75ecf8c9dd74",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3515e447-7ddd-51b1-947c-75ecf8c9dd74",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "aku belum tidur 😔",
        createTime: new Date("2026-11-14T06:15:13Z"),
        updateTime: new Date("2026-11-14T06:15:13Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/09719b29-99bd-594d-b7ee-665818b03125",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/09719b29-99bd-594d-b7ee-665818b03125",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "same",
        createTime: new Date("2026-11-14T06:15:24Z"),
        updateTime: new Date("2026-11-14T06:15:24Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bcf1f3b4-e2ae-5963-b48d-b65e83741d6c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bcf1f3b4-e2ae-5963-b48d-b65e83741d6c",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "kalian pada ngapain",
        createTime: new Date("2026-11-14T06:15:26Z"),
        updateTime: new Date("2026-11-14T06:15:26Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/59c558da-36e2-5d14-a4a7-532fb061d255",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/59c558da-36e2-5d14-a4a7-532fb061d255",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content:
          "apparently watching the sunrise together from five different places",
        createTime: new Date("2026-11-14T06:15:51Z"),
        updateTime: new Date("2026-11-14T06:15:51Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2233bce5-b235-50c9-ac4e-234505bbc34a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/2233bce5-b235-50c9-ac4e-234505bbc34a",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "That's actually quite sweet.",
        createTime: new Date("2026-11-14T06:15:51Z"),
        updateTime: new Date("2026-11-14T06:15:51Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/29a37bfc-cc63-50d8-b72d-9ec538c44afb",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/29a37bfc-cc63-50d8-b72d-9ec538c44afb",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content:
          "I would like to thank the academy, the group chat, the chaotic cloud, and the dog that never asked to be included.\n\nOkay, here is the context that nobody asked for but everyone needs. On Monday he announced that he had grown as a person. On Tuesday he told three separate people that his phone was only for work. On Wednesday he posted a quote about letting go. On Thursday he apparently studied cloud formations until he found an excuse to text someone who had already explained, with great clarity, that she did not want to hear from him. I am not making any of that up, and I have the time stamps. The funniest part is not the cloud, and it isn't even the dog. It's that he thought the phrase 'hey stranger' was a fresh beginning instead of the title of every terrible late-night decision ever. Anyway, I am going to make tea and stop following this case before I accidentally become a full-time weather investigator. \n\nSo the day began with me looking for my keys for fifteen minutes. They were already in my hand, which should have been the moment I accepted that today would not be a normal day. Then I missed the bus, walked to a different stop, got on the wrong bus, and spent the first twenty minutes of the commute wondering why the streets looked unfamiliar. After that I ordered iced coffee and received hot tea. I decided to consider it a sign to try new things. At work I joined a call that had been rescheduled but nobody updated the meeting link, so six of us waited in two empty rooms. At lunch I met a dog that was friendlier than most humans and also much better at listening. By the evening I had a list of things to do, a completely different list of things I had done, and an urge to tell the group all of it. Please admire the way this message refuses to reach a natural conclusion. \n\nA final note: paragraphs should be separated by actual line breaks. If your rendering removes those breaks, the joke has become a technical issue.",
        createTime: new Date("2026-11-14T06:16:30Z"),
        updateTime: new Date("2026-11-14T06:16:30Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/56808a22-dda6-5104-a1c1-b067d65d62a0",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/56808a22-dda6-5104-a1c1-b067d65d62a0",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "you really woke up and wrote an entire acceptance speech",
        createTime: new Date("2026-11-14T06:17:29Z"),
        updateTime: new Date("2026-11-14T06:17:29Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a43fc4c9-2b9f-544e-a3e0-a3be554ac21f",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a43fc4c9-2b9f-544e-a3e0-a3be554ac21f",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "it was in my drafts",
        createTime: new Date("2026-11-14T06:17:34Z"),
        updateTime: new Date("2026-11-14T06:17:34Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6efd5dd8-200f-568c-bc92-a0fa6d285038",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6efd5dd8-200f-568c-bc92-a0fa6d285038",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "who writes drafts for a group chat",
        createTime: new Date("2026-11-14T06:17:35Z"),
        updateTime: new Date("2026-11-14T06:17:35Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0322e060-c401-53b6-a830-f84486d61dca",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0322e060-c401-53b6-a830-f84486d61dca",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "a professional yapper",
        createTime: new Date("2026-11-14T06:17:51Z"),
        updateTime: new Date("2026-11-14T06:17:51Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/71bc3667-f3bc-5de0-b968-8907c9cfffe3",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/71bc3667-f3bc-5de0-b968-8907c9cfffe3",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "the title has never been more accurate",
        createTime: new Date("2026-11-14T06:19:13Z"),
        updateTime: new Date("2026-11-14T06:19:13Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e2ef21f3-356c-5ece-8f33-9a64727cf3d1",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e2ef21f3-356c-5ece-8f33-9a64727cf3d1",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "new challenge: don't say anything for ten minutes",
        createTime: new Date("2026-11-14T06:19:13Z"),
        updateTime: new Date("2026-11-14T06:19:13Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/475bafe7-6b7f-563e-aac9-c964a433da19",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/475bafe7-6b7f-563e-aac9-c964a433da19",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "start",
        createTime: new Date("2026-11-14T06:19:16Z"),
        updateTime: new Date("2026-11-14T06:19:16Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/457150d1-ba1a-5d3e-a386-d436ad055e08",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/457150d1-ba1a-5d3e-a386-d436ad055e08",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "wait",
        createTime: new Date("2026-11-14T06:20:00Z"),
        updateTime: new Date("2026-11-14T06:20:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/34cf7ba6-8b26-5ac0-ac53-24f49f248d5e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/34cf7ba6-8b26-5ac0-ac53-24f49f248d5e",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "does the challenge include me",
        createTime: new Date("2026-11-14T06:20:19Z"),
        updateTime: new Date("2026-11-14T06:20:19Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f14def7d-434b-5c95-aa9c-b196f2730b6d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f14def7d-434b-5c95-aa9c-b196f2730b6d",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "yes",
        createTime: new Date("2026-11-14T06:20:19Z"),
        updateTime: new Date("2026-11-14T06:20:19Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/66927633-e197-5e65-b2f7-8ee74518e643",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/66927633-e197-5e65-b2f7-8ee74518e643",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "oh",
        createTime: new Date("2026-11-14T06:20:27Z"),
        updateTime: new Date("2026-11-14T06:20:27Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1543cb83-d20f-5143-9a02-79e18d7ea29d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/1543cb83-d20f-5143-9a02-79e18d7ea29d",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "sorry",
        createTime: new Date("2026-11-14T06:21:01Z"),
        updateTime: new Date("2026-11-14T06:21:01Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/717a047f-6178-5dcb-bb93-afa58763335b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/717a047f-6178-5dcb-bb93-afa58763335b",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "failed in eleven seconds",
        createTime: new Date("2026-11-14T06:21:03Z"),
        updateTime: new Date("2026-11-14T06:21:03Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9f687e87-c251-59e3-ac68-03411fcdabd4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9f687e87-c251-59e3-ac68-03411fcdabd4",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content:
          "NOTICE:this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones this entire sentence uses nonbreaking spaces instead of ordinary ones",
        createTime: new Date("2026-11-14T06:21:03Z"),
        updateTime: new Date("2026-11-14T06:21:03Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d6a9342b-d179-569e-8de4-b9cdd78edd02",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d6a9342b-d179-569e-8de4-b9cdd78edd02",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content:
          "this long thing has nonbreaking spaces and it's doing something unpleasant to layout",
        createTime: new Date("2026-11-14T06:21:20Z"),
        updateTime: new Date("2026-11-14T06:21:20Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/90df2ace-344e-5c8c-9cc8-756186fc379d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/90df2ace-344e-5c8c-9cc8-756186fc379d",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content:
          "That is an excellent regression test and a terrible sentence.",
        createTime: new Date("2026-11-14T06:21:26Z"),
        updateTime: new Date("2026-11-14T06:21:26Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bed92a0e-e0ad-50f5-aee7-7e9d3f3452ab",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bed92a0e-e0ad-50f5-aee7-7e9d3f3452ab",
        content: "A message was deleted.",
        createTime: new Date("2026-11-14T06:22:29Z"),
        updateTime: new Date("2026-11-14T06:22:29Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6682081e-5dde-5fdc-b94d-baf8407786b5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/6682081e-5dde-5fdc-b94d-baf8407786b5",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "I have stopped asking who is deleting things",
        createTime: new Date("2026-11-14T06:22:31Z"),
        updateTime: new Date("2026-11-14T06:22:31Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d753a42f-7738-5bcb-a77b-3a9e85b91a3d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d753a42f-7738-5bcb-a77b-3a9e85b91a3d",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "the deletion gremlin lives here now",
        createTime: new Date("2026-11-14T06:22:31Z"),
        updateTime: new Date("2026-11-14T06:22:31Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/fd54c901-a3d7-5a80-9baf-1d5e1d44872e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/fd54c901-a3d7-5a80-9baf-1d5e1d44872e",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "does anyone know why we have 400 unread messages",
        createTime: new Date("2026-11-14T23:44:00Z"),
        updateTime: new Date("2026-11-14T23:44:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/86de9c07-89a5-51c2-8dad-2a41ba556bca",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/86de9c07-89a5-51c2-8dad-2a41ba556bca",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "i was gone for one afternoon",
        createTime: new Date("2026-11-14T23:44:31Z"),
        updateTime: new Date("2026-11-14T23:44:31Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/08e8c1fa-dd2f-5f55-b87f-b94827ad14ea",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/08e8c1fa-dd2f-5f55-b87f-b94827ad14ea",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "we are passionate people",
        createTime: new Date("2026-11-14T23:44:32Z"),
        updateTime: new Date("2026-11-14T23:44:32Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f63c6c24-a6d2-5e90-b398-b6b65b0d9d01",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f63c6c24-a6d2-5e90-b398-b6b65b0d9d01",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "the chat history is a UNESCO heritage site now",
        createTime: new Date("2026-11-14T23:44:42Z"),
        updateTime: new Date("2026-11-14T23:44:42Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bf580637-4995-5e2c-a2de-602e4cd0126c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/bf580637-4995-5e2c-a2de-602e4cd0126c",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "somebody archive it",
        createTime: new Date("2026-11-14T23:45:34Z"),
        updateTime: new Date("2026-11-14T23:45:34Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3df80ee5-ba3c-5cca-ada4-29c052ce3212",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3df80ee5-ba3c-5cca-ada4-29c052ce3212",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "DO NOT ARCHIVE ME",
        createTime: new Date("2026-11-14T23:45:34Z"),
        updateTime: new Date("2026-11-14T23:45:34Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/398a14b2-36c8-5d17-97ac-d52eff8f2020",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/398a14b2-36c8-5d17-97ac-d52eff8f2020",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "we could create a museum",
        createTime: new Date("2026-11-14T23:46:01Z"),
        updateTime: new Date("2026-11-14T23:46:01Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/90b3b14b-f5fd-506c-9cbc-2573b7025e9d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/90b3b14b-f5fd-506c-9cbc-2573b7025e9d",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "admission is one croissant",
        createTime: new Date("2026-11-14T23:46:01Z"),
        updateTime: new Date("2026-11-14T23:46:01Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a1f14a53-6d38-5a89-8398-db6c1623edd9",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a1f14a53-6d38-5a89-8398-db6c1623edd9",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "i still have an emotional connection to the cloud",
        createTime: new Date("2026-11-14T23:46:02Z"),
        updateTime: new Date("2026-11-14T23:46:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f517195c-7830-58c8-bb27-4d59a49f1b27",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f517195c-7830-58c8-bb27-4d59a49f1b27",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "I want that sentence printed on a shirt.",
        createTime: new Date("2026-11-14T23:46:04Z"),
        updateTime: new Date("2026-11-14T23:46:04Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/be719281-975f-5432-83d1-b67fce0e8a28",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/be719281-975f-5432-83d1-b67fce0e8a28",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content:
          '```tsx\nfunction ChatBubble({ content }: { content: string }) {\n  return <div className="min-w-0 whitespace-pre-wrap break-words">{content}</div>\n}\n```\n(Just a test snippet. No guarantees about your real layout.)',
        createTime: new Date("2026-11-14T23:46:08Z"),
        updateTime: new Date("2026-11-14T23:46:08Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/248fe0d3-94be-50d1-b7fb-9a1e3df6f9e5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/248fe0d3-94be-50d1-b7fb-9a1e3df6f9e5",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "えっ、コードまで出てきた 😂",
        createTime: new Date("2026-11-14T23:46:08Z"),
        updateTime: new Date("2026-11-14T23:46:08Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/958f6b07-b118-5826-a5ca-be025ebfc166",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/958f6b07-b118-5826-a5ca-be025ebfc166",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "`display: flex` isn't fixing this emotional mess",
        createTime: new Date("2026-11-14T23:46:15Z"),
        updateTime: new Date("2026-11-14T23:46:15Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7e262e58-c9da-557c-8b7d-7da2bb17f737",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7e262e58-c9da-557c-8b7d-7da2bb17f737",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "coba display none dulu",
        createTime: new Date("2026-11-14T23:46:26Z"),
        updateTime: new Date("2026-11-14T23:46:26Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/89129806-7917-55f8-80b7-1a92d5246a68",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/89129806-7917-55f8-80b7-1a92d5246a68",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "absolutely not",
        createTime: new Date("2026-11-14T23:46:28Z"),
        updateTime: new Date("2026-11-14T23:46:28Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7823730c-76e5-5bc5-b2d7-9cc8315b3606",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/7823730c-76e5-5bc5-b2d7-9cc8315b3606",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "GUYS NEW UPDATE",
        createTime: new Date("2026-11-14T23:46:53Z"),
        updateTime: new Date("2026-11-14T23:46:53Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/30ffe4e8-c043-5baf-86e0-9ac34df7b6da",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/30ffe4e8-c043-5baf-86e0-9ac34df7b6da",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "different update this time",
        createTime: new Date("2026-11-14T23:46:53Z"),
        updateTime: new Date("2026-11-14T23:46:53Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/43f489af-a6ea-569f-b9ed-bab1e09d54e8",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/43f489af-a6ea-569f-b9ed-bab1e09d54e8",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "I bought an actual croissant",
        createTime: new Date("2026-11-14T23:47:32Z"),
        updateTime: new Date("2026-11-14T23:47:32Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/73dc1cb9-ae15-5348-90d2-f22977561ef2",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/73dc1cb9-ae15-5348-90d2-f22977561ef2",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "the prophecy",
        createTime: new Date("2026-11-14T23:48:31Z"),
        updateTime: new Date("2026-11-14T23:48:31Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5a6a0c61-4f60-58e2-84cf-9105fcee7a61",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/5a6a0c61-4f60-58e2-84cf-9105fcee7a61",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "proof please 📸",
        createTime: new Date("2026-11-14T23:48:36Z"),
        updateTime: new Date("2026-11-14T23:48:36Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/72e86014-62a9-5628-9029-2bd1b0d0f1f7",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/72e86014-62a9-5628-9029-2bd1b0d0f1f7",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "imagine a photo here because this schema is text-only",
        createTime: new Date("2026-11-14T23:48:37Z"),
        updateTime: new Date("2026-11-14T23:48:37Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/99ce9cd7-9585-54df-a75f-4d53f593273a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/99ce9cd7-9585-54df-a75f-4d53f593273a",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "10/10 mock attachment behavior",
        createTime: new Date("2026-11-14T23:48:53Z"),
        updateTime: new Date("2026-11-14T23:48:53Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f56cb422-776c-53f3-9717-69413c117c04",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f56cb422-776c-53f3-9717-69413c117c04",
        content: "Attachment unavailable.",
        createTime: new Date("2026-11-14T23:50:15Z"),
        updateTime: new Date("2026-11-14T23:50:15Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3d932566-5eac-5a1e-97b5-ffd0778cf67b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3d932566-5eac-5a1e-97b5-ffd0778cf67b",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "status report: still raining",
        createTime: new Date("2026-11-15T05:05:00Z"),
        updateTime: new Date("2026-11-15T05:05:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c85dd549-8dd5-5d3d-a010-6ca67704be18",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c85dd549-8dd5-5d3d-a010-6ca67704be18",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "status report: coffee spilled",
        createTime: new Date("2026-11-15T05:05:03Z"),
        updateTime: new Date("2026-11-15T05:05:03Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d6bc898a-33ef-58e0-841d-365ad85fdbce",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d6bc898a-33ef-58e0-841d-365ad85fdbce",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "status report: i am okay",
        createTime: new Date("2026-11-15T05:05:47Z"),
        updateTime: new Date("2026-11-15T05:05:47Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/56d71f03-00c7-5399-9c23-d96f2744ae16",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/56d71f03-00c7-5399-9c23-d96f2744ae16",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "Was that three messages necessary?",
        createTime: new Date("2026-11-15T05:06:06Z"),
        updateTime: new Date("2026-11-15T05:06:06Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/684c2b19-ff5b-5bdc-bf1c-9097bcdc61dd",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/684c2b19-ff5b-5bdc-bf1c-9097bcdc61dd",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "yes",
        createTime: new Date("2026-11-15T05:06:06Z"),
        updateTime: new Date("2026-11-15T05:06:06Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d0d5ed75-eaa7-5972-976b-7307f1048b9e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/d0d5ed75-eaa7-5972-976b-7307f1048b9e",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "we test consecutive sender bubbles in this house",
        createTime: new Date("2026-11-15T05:06:14Z"),
        updateTime: new Date("2026-11-15T05:06:14Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/34e75ae9-1838-5dae-826a-f726b31fcb78",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/34e75ae9-1838-5dae-826a-f726b31fcb78",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "also same minute stamps",
        createTime: new Date("2026-11-15T05:06:48Z"),
        updateTime: new Date("2026-11-15T05:06:48Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/10e6591b-22ad-50db-8443-c24e3ee7143e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/10e6591b-22ad-50db-8443-c24e3ee7143e",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "this one is probably within the same minute",
        createTime: new Date("2026-11-15T05:06:50Z"),
        updateTime: new Date("2026-11-15T05:06:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/78b1d89b-48fb-5e90-9941-166c262ef86c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/78b1d89b-48fb-5e90-9941-166c262ef86c",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "and this one too",
        createTime: new Date("2026-11-15T05:06:50Z"),
        updateTime: new Date("2026-11-15T05:06:50Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f38b89a1-915e-5d97-8ed4-4ab1445f4891",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f38b89a1-915e-5d97-8ed4-4ab1445f4891",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "and this one",
        createTime: new Date("2026-11-15T05:07:07Z"),
        updateTime: new Date("2026-11-15T05:07:07Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/da42ef36-353a-504a-a6a9-1d1c6bdc50d5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/da42ef36-353a-504a-a6a9-1d1c6bdc50d5",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "and this one",
        createTime: new Date("2026-11-15T05:07:13Z"),
        updateTime: new Date("2026-11-15T05:07:13Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/673be6ce-f9aa-5340-beab-990d4793897e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/673be6ce-f9aa-5340-beab-990d4793897e",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "I can see five of you stacked like pancakes",
        createTime: new Date("2026-11-15T05:08:16Z"),
        updateTime: new Date("2026-11-15T05:08:16Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/80722a2a-0356-529e-9d1b-d842b1f3dacb",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/80722a2a-0356-529e-9d1b-d842b1f3dacb",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "🥞🥞🥞",
        createTime: new Date("2026-11-15T05:08:18Z"),
        updateTime: new Date("2026-11-15T05:08:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f4ce1825-42f6-546a-851a-ea6af48a354e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f4ce1825-42f6-546a-851a-ea6af48a354e",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "🥞 + 🥐 = breakfast diplomacy",
        createTime: new Date("2026-11-15T05:08:18Z"),
        updateTime: new Date("2026-11-15T05:08:18Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0bca59b9-3dec-5119-8ca6-200f9eff0203",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0bca59b9-3dec-5119-8ca6-200f9eff0203",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content:
          "This is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\nThis is the intentionally enormous message. It has to be much bigger than a typical preview, because a compact message could hide a clipping bug that only shows up after several screens of scrolling. Someone should be able to highlight text halfway through, copy the whole message, navigate to a different item, come back, and still find the correct bubble height. The avatar should remain sensible; the sender name should not hover in the middle of the paragraph; the timestamp should not disappear just because the content is inconveniently long. Let this be a reminder that real human beings are perfectly capable of typing thousands of characters into a field with a placeholder that says 'Message'. The absurdity is not the point. The point is whether the interface can handle the absurdity.\n\n",
        createTime: new Date("2026-11-15T05:08:32Z"),
        updateTime: new Date("2026-11-15T05:08:32Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f1b4f479-92c7-5aca-822b-ae84c9a41e7c",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f1b4f479-92c7-5aca-822b-ae84c9a41e7c",
        user: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        content: "that paragraph is longer than this entire argument",
        createTime: new Date("2026-11-15T05:09:03Z"),
        updateTime: new Date("2026-11-15T05:09:03Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/78ac65b7-a351-5bb5-9b5e-38165af1518e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/78ac65b7-a351-5bb5-9b5e-38165af1518e",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content: "the scroll bar just became a single pixel",
        createTime: new Date("2026-11-15T05:09:04Z"),
        updateTime: new Date("2026-11-15T05:09:04Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b862215a-bcd3-53fa-8ec8-be31dfb4533a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/b862215a-bcd3-53fa-8ec8-be31dfb4533a",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content: "does it still preserve newlines?",
        createTime: new Date("2026-11-15T05:09:14Z"),
        updateTime: new Date("2026-11-15T05:09:14Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f10d3473-1301-5068-bdf5-628a58004345",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f10d3473-1301-5068-bdf5-628a58004345",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "yes",
        createTime: new Date("2026-11-15T05:10:06Z"),
        updateTime: new Date("2026-11-15T05:10:06Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/960520d5-0bf3-530a-8d31-bc6ca0b7a7d5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/960520d5-0bf3-530a-8d31-bc6ca0b7a7d5",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "and tabs\\tlike\\tthese",
        createTime: new Date("2026-11-15T05:10:06Z"),
        updateTime: new Date("2026-11-15T05:10:06Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f803b1af-97e0-5052-ae1b-b94295f113a5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f803b1af-97e0-5052-ae1b-b94295f113a5",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "somebody check mobile width please",
        createTime: new Date("2026-11-15T05:10:33Z"),
        updateTime: new Date("2026-11-15T05:10:33Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0816da6a-ba76-59f5-99fc-986069193f08",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0816da6a-ba76-59f5-99fc-986069193f08",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "aman di hp aku",
        createTime: new Date("2026-11-15T05:10:33Z"),
        updateTime: new Date("2026-11-15T05:10:33Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/881aef63-7604-5074-b582-2a34fb3e1c25",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/881aef63-7604-5074-b582-2a34fb3e1c25",
        user: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        content: "di aku scrollnya jauh banget 😂",
        createTime: new Date("2026-11-15T05:10:34Z"),
        updateTime: new Date("2026-11-15T05:10:34Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/01916bea-8a53-5b60-aac0-a9fb73bcc237",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/01916bea-8a53-5b60-aac0-a9fb73bcc237",
        content: "A message from an unavailable user.",
        createTime: new Date("2026-11-15T05:10:36Z"),
        updateTime: new Date("2026-11-15T05:10:36Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/61d2c5bb-eccb-5412-890e-6c1d1b04f7f9",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/61d2c5bb-eccb-5412-890e-6c1d1b04f7f9",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "who are these ghost accounts",
        createTime: new Date("2026-11-15T05:10:40Z"),
        updateTime: new Date("2026-11-15T05:10:40Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ecbc77ba-5aa3-53dc-89ee-d6661215d1a5",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ecbc77ba-5aa3-53dc-89ee-d6661215d1a5",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "Do we need to invite an exorcist or a frontend engineer?",
        createTime: new Date("2026-11-15T05:10:40Z"),
        updateTime: new Date("2026-11-15T05:10:40Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/08deae2c-9717-58d0-9f3f-40658d541f83",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/08deae2c-9717-58d0-9f3f-40658d541f83",
        user: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        content: "same profession",
        createTime: new Date("2026-11-15T05:10:47Z"),
        updateTime: new Date("2026-11-15T05:10:47Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0a23ca30-a3f9-55cc-a0ab-d85966c3780e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/0a23ca30-a3f9-55cc-a0ab-d85966c3780e",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "okay I think I'm finally caught up",
        createTime: new Date("2026-11-15T13:20:00Z"),
        updateTime: new Date("2026-11-15T13:20:00Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e85164f6-ff68-530e-b2b9-70102e37098e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e85164f6-ff68-530e-b2b9-70102e37098e",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "you started the entire thing",
        createTime: new Date("2026-11-15T13:20:02Z"),
        updateTime: new Date("2026-11-15T13:20:02Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a91d35fc-fb96-5c86-b32a-aea80ea4ea50",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/a91d35fc-fb96-5c86-b32a-aea80ea4ea50",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "and I'd do it again",
        createTime: new Date("2026-11-15T13:20:27Z"),
        updateTime: new Date("2026-11-15T13:20:27Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9d366855-d58a-5534-9b37-99c9ba62ad33",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9d366855-d58a-5534-9b37-99c9ba62ad33",
        user: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        content: "we survived the great croissant discourse of 2026",
        createTime: new Date("2026-11-15T13:20:27Z"),
        updateTime: new Date("2026-11-15T13:20:27Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8c7ee0c5-3f82-556b-ba2e-06d6d253bd9b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8c7ee0c5-3f82-556b-ba2e-06d6d253bd9b",
        user: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        content: "survived is a strong word",
        createTime: new Date("2026-11-15T13:21:06Z"),
        updateTime: new Date("2026-11-15T13:21:06Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/05cfef77-4251-5c6f-a962-3f19e736f938",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/05cfef77-4251-5c6f-a962-3f19e736f938",
        user: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        content: "some of us are still recovering",
        createTime: new Date("2026-11-15T13:22:05Z"),
        updateTime: new Date("2026-11-15T13:22:05Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f3adf33a-8cb0-5398-8941-d6b374769bca",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/f3adf33a-8cb0-5398-8941-d6b374769bca",
        user: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        content:
          "if anyone is testing this thread: good luck rendering all the messages",
        createTime: new Date("2026-11-15T13:22:10Z"),
        updateTime: new Date("2026-11-15T13:22:10Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c7c606ab-6542-56e0-b517-c400e0ec8cab",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c7c606ab-6542-56e0-b517-c400e0ec8cab",
        user: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        content:
          "pagination, virtualization, grouping, overflow wrapping, unicode... the whole buffet",
        createTime: new Date("2026-11-15T13:22:11Z"),
        updateTime: new Date("2026-11-15T13:22:11Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e670f081-4a6e-561b-b5a0-c00780325e75",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/e670f081-4a6e-561b-b5a0-c00780325e75",
        user: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        content: "おつかれさま！ 🎉",
        createTime: new Date("2026-11-15T13:22:27Z"),
        updateTime: new Date("2026-11-15T13:22:27Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/613111c9-38fc-5fca-9652-97e16aae788e",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/613111c9-38fc-5fca-9652-97e16aae788e",
        user: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        content: "akhirnya tamat juga",
        createTime: new Date("2026-11-15T13:23:49Z"),
        updateTime: new Date("2026-11-15T13:23:49Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c68ef1e0-6c9f-5198-a24f-3da18c68c6e0",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/c68ef1e0-6c9f-5198-a24f-3da18c68c6e0",
        user: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        content: "don't say tamat, you'll summon part two",
        createTime: new Date("2026-11-15T13:23:49Z"),
        updateTime: new Date("2026-11-15T13:23:49Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ec520e65-a643-5885-a543-1718279e279b",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ec520e65-a643-5885-a543-1718279e279b",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "part two?",
        createTime: new Date("2026-11-15T13:23:52Z"),
        updateTime: new Date("2026-11-15T13:23:52Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/30ed4ff0-ae86-503a-89cf-27d03d9ac0cc",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/30ed4ff0-ae86-503a-89cf-27d03d9ac0cc",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "PART TWO???",
        createTime: new Date("2026-11-15T13:24:36Z"),
        updateTime: new Date("2026-11-15T13:24:36Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ac8199ba-e0a2-5dcd-a35d-fa473216dd9d",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ac8199ba-e0a2-5dcd-a35d-fa473216dd9d",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "just kidding 🤡",
        createTime: new Date("2026-11-15T13:24:55Z"),
        updateTime: new Date("2026-11-15T13:24:55Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8b47ac26-0f8d-5f12-bc8b-6f36b7a136da",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/8b47ac26-0f8d-5f12-bc8b-6f36b7a136da",
        content: "A participant with no user record sent this message.",
        createTime: new Date("2026-11-15T13:24:55Z"),
        updateTime: new Date("2026-11-15T13:24:55Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3b2d219d-b15e-548d-8a46-f57dcdbfbed1",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/3b2d219d-b15e-548d-8a46-f57dcdbfbed1",
        content:
          "if you're reading this, the user ID for this one doesn't exist in sampleUsers",
        createTime: new Date("2026-11-15T13:25:03Z"),
        updateTime: new Date("2026-11-15T13:25:03Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9313bc25-77f7-5e3e-86ef-33e9f57842d2",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/9313bc25-77f7-5e3e-86ef-33e9f57842d2",
        user: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        content: "Okay, that's the last edge case I wanted.",
        createTime: new Date("2026-11-15T13:25:37Z"),
        updateTime: new Date("2026-11-15T13:25:37Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/31da8a46-9ae3-5370-b80b-8027b2e97510",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/31da8a46-9ae3-5370-b80b-8027b2e97510",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "goodnight everyone! 💖",
        createTime: new Date("2026-11-15T13:25:39Z"),
        updateTime: new Date("2026-11-15T13:25:39Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ae1fa0d8-54f1-57da-afb1-7c5747a0333a",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/ae1fa0d8-54f1-57da-afb1-7c5747a0333a",
        user: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        content: "wait it's afternoon",
        createTime: new Date("2026-11-15T13:25:39Z"),
        updateTime: new Date("2026-11-15T13:25:39Z"),
      },
    ],
    [
      "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/727b38e9-2574-5621-8c52-45909030b3f4",
      {
        name: "conversations/3c91f7a0-6d24-4b85-ae19-5f02c8d74b63/messages/727b38e9-2574-5621-8c52-45909030b3f4",
        user: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        content: "certified yapper behavior",
        createTime: new Date("2026-11-15T13:25:56Z"),
        updateTime: new Date("2026-11-15T13:25:56Z"),
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
