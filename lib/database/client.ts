import { DbClient } from "@tanstack/react-db"

export function createDatabaseClient(dependencies: Record<string, unknown> = {}) {
  return new DbClient(dependencies)
}
