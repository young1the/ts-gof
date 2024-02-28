export default abstract class Shape<T> {
    abstract draw(): ThisType<T>
    abstract moveOffset(dx: number, dy: number): ThisType<T>
}