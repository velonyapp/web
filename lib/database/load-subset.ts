import {
  extractSimpleComparisons,
  type LoadSubsetOptions,
} from "@tanstack/react-db"
import { z } from "zod"

export function valuesFor(
  options: LoadSubsetOptions | undefined,
  field: string
) {
  const filters = extractSimpleComparisons(options?.where).filter(
    (filter) => filter.field.join(".") === field
  )
  if (filters.length === 0) return undefined
  let values: string[] | undefined
  for (const filter of filters) {
    if (filter.operator !== "eq" && filter.operator !== "in")
      throw new Error(`Unsupported ${field} filter: ${filter.operator}`)
    const next = z
      .array(z.string())
      .parse(filter.operator === "eq" ? [filter.value] : filter.value)
    values = values ? values.filter((value) => next.includes(value)) : next
  }
  return [...new Set(values)]
}

// A keyed load returns known normalized rows and asks the API only for missing ones.
export async function loadIds<T extends { id: string }>(
  ids: string[],
  collection: { get(id: string): T | undefined },
  load: (ids: string[]) => Promise<T[]>,
  refetch = false
): Promise<T[]> {
  const known = new Map<string, T>()
  for (const id of ids) {
    const row = refetch ? undefined : collection.get(id)
    if (row) known.set(id, row)
  }
  const missing = ids.filter((id) => !known.has(id))
  if (missing.length) {
    for (const row of await load(missing)) known.set(row.id, row)
  }
  return ids.flatMap((id) => {
    const row = known.get(id)
    return row ? [row] : []
  })
}
