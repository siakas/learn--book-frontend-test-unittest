/**
 * 指定された時間待機し、時間経過後に resolve する Promise を返す
 *
 * @param {number} duration - 待機する時間（ミリ秒）
 * @returns {Promise<number>} 時間経過後に resolve する Promise
 */
export const wait = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
};

/**
 * 指定された時間待機し、時間経過後に reject する Promise を返す
 *
 * @param {number} duration - 待機する時間（ミリ秒）
 * @returns {Promise<number>} 時間経過後に reject する Promise
 */
export const timeout = (duration: number) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(duration);
    }, duration);
  });
};
