/**
 * 返回这一天是周几
 *
 * @export
 * @param {(number | Date)} [day=new Date()]
 * @param {number} [month]
 * @param {number} [year]
 * @return {array: [string, number]}  返回一个数组，第一个值为对应的英语名称，第二个为1-7表示周一到周日
 */
export declare function dayOfTheWeek(day?: number | Date, month?: number, year?: number): [string, number];
