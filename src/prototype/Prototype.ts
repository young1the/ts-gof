export default interface Prototype<T> {
    copy(): ThisType<T>;
}