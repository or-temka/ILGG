export interface SliceState<T> {
  data: T
  loading: boolean
  error: string | null | undefined
}
