import * as z from "zod"

import { UserSchema, type User } from "@/features/identity/schemas/user"

export const sampleUsers = z.map(z.string(), UserSchema).parse(
  new Map<string, User>([
    [
      "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
      {
        name: "users/0e276ae1-61d2-41d6-8293-d0be73112e85",
        username: "alexmorgan",
        email: "alex.morgan@example.com",
        createTime: new Date("2024-07-01T08:00:00Z"),
      },
    ],
    [
      "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
      {
        name: "users/18c3d640-5ae8-4d36-bf75-2901a87e5c42",
        username: "mayachen",
        email: "maya.chen@example.com",
        createTime: new Date("2024-07-03T09:15:00Z"),
      },
    ],
    [
      "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
      {
        name: "users/2acdf09e-f196-4fbb-b15c-e38a24c0d719",
        username: "ryancooper",
        email: "ryan.cooper@example.com",
        createTime: new Date("2024-07-05T11:30:00Z"),
      },
    ],
    [
      "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
      {
        name: "users/35d8c146-018a-4870-93bf-28c7a6d105e4",
        username: "ninapatel",
        email: "nina.patel@example.com",
        createTime: new Date("2024-07-08T06:45:00Z"),
      },
    ],
    [
      "users/46f2e983-8064-4e31-9b9a-a241870ed0c6",
      {
        name: "users/46f2e983-8064-4e31-9b9a-a241870ed0c6",
        username: "devonbrooks",
        email: "devon.brooks@example.com",
        createTime: new Date("2024-07-12T14:20:00Z"),
      },
    ],
    [
      "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
      {
        name: "users/57a0d4b1-cf5e-42f8-8de4-a1f6832c097b",
        username: "liaanderson",
        email: "lia.anderson@example.com",
        createTime: new Date("2024-07-18T10:00:00Z"),
      },
    ],
    [
      "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
      {
        name: "users/68c5d2e9-410b-4bb7-ada6-7ca143e2f958",
        username: "fahripratama",
        email: "fahri.pratama@example.com",
        createTime: new Date("2024-08-02T07:30:00Z"),
      },
    ],
    [
      "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
      {
        name: "users/79e60a34-70f2-421d-938b-04d21e8c3fa6",
        username: "sitirahmawati",
        email: "siti.rahmawati@example.com",
        createTime: new Date("2024-08-06T12:45:00Z"),
      },
    ],
    [
      "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
      {
        name: "users/8a1e9c47-2bd6-49a0-8f45-d1c063a72e9b",
        username: "julesparker",
        email: "jules.parker@example.com",
        createTime: new Date("2024-08-11T09:20:00Z"),
      },
    ],
    [
      "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
      {
        name: "users/9b4a70e1-3548-4dc2-9c17-582a6d0f3b4e",
        username: "kevinwong",
        email: "kevin.wong@example.com",
        createTime: new Date("2024-08-15T15:10:00Z"),
      },
    ],
    [
      "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
      {
        name: "users/a0cd28b1-6e94-49da-833e-91f5c720d48a",
        username: "taramitchell",
        email: "tara.mitchell@example.com",
        createTime: new Date("2024-08-21T08:40:00Z"),
      },
    ],
    [
      "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
      {
        name: "users/b1e5a94c-7f20-4c38-b6d9-0a72e14f6b83",
        username: "bencarter",
        createTime: new Date("2024-09-01T11:00:00Z"),
      },
    ],
    [
      "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
      {
        name: "users/c2f7d631-8a54-4b30-9e16-f0c83d2a5b74",
        username: "hanatanaka",
        email: "hana.tanaka@example.com",
        createTime: new Date("2024-09-04T06:30:00Z"),
      },
    ],
    [
      "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
      {
        name: "users/d3a9c450-61b8-4df2-a759-1e40c8b6f293",
        username: "edosaputra",
        createTime: new Date("2024-09-09T13:15:00Z"),
      },
    ],
    [
      "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
      {
        name: "users/e4b7f082-2ac3-4de9-86f1-0d39c7a8652e",
        username: "iriswalker",
        email: "iris.walker@example.com",
        createTime: new Date("2024-09-15T10:50:00Z"),
      },
    ],
  ])
)
