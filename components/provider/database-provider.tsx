"use client"

import { useState, type ReactNode } from "react"
import { DbProvider } from "@tanstack/react-db"
import { createDatabaseClient } from "@/lib/database/client"

export function DatabaseProvider({ children }: { children: ReactNode }) {
  const [client] = useState(createDatabaseClient)

  return <DbProvider client={client}>{children}</DbProvider>
}
