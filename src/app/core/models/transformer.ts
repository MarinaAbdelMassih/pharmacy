// For mapping API Objects
export interface Transformer<T> {
  transform(item: any): T;
}
