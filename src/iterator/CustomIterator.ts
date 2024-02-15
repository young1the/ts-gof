export default interface CustomIterator<T> {
    next(): boolean;
    current(): T;
}