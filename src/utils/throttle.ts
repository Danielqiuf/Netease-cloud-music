// 节流函数
/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
let throttle_timer: ReturnType<typeof setTimeout>;
let throttle_flag:boolean = false;
export function throttle(func:() => void, wait = 500, immediate = true) {
	if (immediate) {
		if (!throttle_flag) {
			throttle_flag = true;
			// 如果是立即执行，则在wait毫秒内开始时执行
			typeof func === 'function' && func();
			throttle_timer = setTimeout(() => {
				throttle_flag = false;
			}, wait);
		}
	} else {
		if (!throttle_flag) {
			throttle_flag = true
			// 如果是非立即执行，则在wait毫秒内的结束处执行
			throttle_timer = setTimeout(() => {
				throttle_flag = false
        typeof func === 'function' && func();
        // typeof func === 'function' && func.apply(this, args);
			}, wait);
		}
	}
};