"use client"

import { useState, type ReactNode } from "react"
import { DbProvider } from "@tanstack/react-db"
import { createDatabase } from "@/lib/database/client"

export function DatabaseProvider({ children }: { children: ReactNode }) {
  const [client] = useState(createDatabase)
  return <DbProvider client={client}>{children}</DbProvider>
}
