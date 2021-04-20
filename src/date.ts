/**
 * 返回这一天是周几
 *
 * @export
 * @param {(number | Date)} [day=new Date()]
 * @param {number} [month]
 * @param {number} [year]
 * @return {array: [string, number]}  返回一个数组，第一个值为对应的英语名称，第二个为1-7表示周一到周日
 */
export function dayOfTheWeek(
  day: number | Date = new Date(),
  month?: number,
  year?: number
): [string, number] {
  // 基姆拉尔森计算公式
  if (day instanceof Date) {
    month = day.getMonth() + 1
    year = day.getFullYear()
    day = day.getDate()
  }
  const now = new Date()
  month = typeof month === 'undefined' ? now.getMonth() + 1 : month
  year = typeof year === 'undefined' ? now.getFullYear() : year
  const arr = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  if (month < 3) {
    month += 12
    --year
  }
  // w 为 0-6
  const w =
    ((day +
      2 * month +
      (3 * month) / 5 +
      year +
      ((year / 4) >>> 0) -
      ((year / 100) >>> 0) +
      ((year / 400) >>> 0) +
      1) >>>
      0) %
    7
  return [arr[w], w + 1]
}
