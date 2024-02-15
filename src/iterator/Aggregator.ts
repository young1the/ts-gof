export default interface Aggregator<T> {
    iterator(): CustomIterator<T>;
}