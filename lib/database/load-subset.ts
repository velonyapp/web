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
export async function loadNames<T extends { name: string }>(
  names: string[],
  collection: { get(name: string): T | undefined },
  load: (names: string[]) => Promise<T[]>,
  refetch = false
): Promise<T[]> {
  const known = new Map<string, T>()
  for (const name of names) {
    const row = refetch ? undefined : collection.get(name)
    if (row) known.set(name, row)
  }
  const missing = names.filter((name) => !known.has(name))
  if (missing.length) {
    for (const row of await load(missing)) known.set(row.name, row)
  }
  return names.flatMap((name) => {
    const row = known.get(name)
    return row ? [row] : []
  })
}
