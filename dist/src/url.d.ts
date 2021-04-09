/**
 * 将对象转成query串
 * @example object2QueryString({age:123}) => age=123
 * @param o
 */
export declare function object2QueryString(o: Record<string, any>): string;
/**
 * 用于处理url参数传递需要手动拼接字符串的问题
 *
 * @param {string} path url
 * @param {object} pramsObj 传给url的参数对象
 * @return {string} 返回拼接后的url串
 */
export declare function dealPath(path: string, pramsObject?: Record<string, any>): string;
/**
 * 将查询串转成对象，并且最大可能的还原原来的类型
 * @param queryString {string} 需要解析的url query 串
 * @return {Object}
 */
export declare function query2Object(queryString: string): Record<string, string>;
//# sourceMappingURL=url.d.ts.map