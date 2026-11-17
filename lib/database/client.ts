import { DbClient } from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"

export function createDatabase(dependencies: Record<string, unknown> = {}) {
  return new DbClient({
    ...dependencies,
    queryClient: new QueryClient({
      defaultOptions: { queries: { staleTime: 60_000, retry: false } },
    }),
  })
}
