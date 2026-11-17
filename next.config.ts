import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      // Use the standalone parser without pulling the Node-only SDK into the client.
      "google-gax": "./node_modules/google-gax/build/src/pathTemplate.js",
    },
  },
}

export default nextConfig
