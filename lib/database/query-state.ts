import { findProblems, type LiveQueryStatusFlags } from "@tanstack/react-db"

export function databaseQueryState(
  query: LiveQueryStatusFlags,
  hasData: boolean
) {
  const isError = query.isLoadingError || query.isCrashed || query.isSyncError
  const problem = query.health ? findProblems(query.health)[0] : undefined
  const detail = problem?.error ?? problem?.failureReason
  const error = isError
    ? detail?.cause instanceof Error
      ? detail.cause
      : new Error(detail?.message ?? "Unable to load data")
    : null
  return { error, isError, isPending: !hasData && query.isLoading }
}
