/**
 * 空函数
 *
 * @export
 * @return {*}  {void}
 */
export declare function noop(): void;
export interface DebouncedFunction<T extends (...args: any) => any> {
    (...args: Parameters<T>): void;
    cancel: () => void;
}
/**
 * 防抖函数
 *
 * @export
 * @template T
 * @param {T} func
 * @param {number} delay
 * @param {boolean} [immediate=true]
 * @return {*}  {DebouncedFunction<T>}
 */
export declare function debounce<T extends (...args: any) => any>(func: T, delay: number, immediate?: boolean): DebouncedFunction<T>;
export interface ThrottledFunction<T extends (...args: any) => any> {
    (...args: Parameters<T>): void;
}
/**
 *节流函数
 *
 * @export
 * @template T
 * @param {T} func
 * @param {number} delay
 * @return {*}  {ThrottledFunction<T>}
 */
export declare function throttle<T extends (...args: any) => any>(func: T, delay: number): ThrottledFunction<T>;
export declare const Lock: {
    /**
     *
     * 加锁
     * @param {string} key 加锁的内容
     * @return {*}  {boolean}
     */
    isLocked(key: string): boolean;
    /**
     *
     * 解锁
     * @param {string} key 解锁的内容
     */
    unlock(key: string): void;
    /**
     *
     * 判断某有没有加锁
     * @param {string} key
     */
    lock(key: string): void;
};
