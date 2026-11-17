export function resourceId(name: string): string {
  const segments = name.split("/")
  if (
    segments.length < 2 ||
    segments.length % 2 !== 0 ||
    segments.some((segment) => !segment)
  ) {
    throw new Error(`Invalid resource name: ${name}`)
  }
  return segments[segments.length - 1]
}
