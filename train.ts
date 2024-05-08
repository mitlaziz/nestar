// MIT TASK ZJ
/** type scriptda Shunday function yozing, 
 * u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8 */
function reduceNestedArray(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			sum += reduceNestedArray(arr[i]);
		} else {
			sum += arr[i];
		}
	}
	return sum;
}
console.log(reduceNestedArray([1, [1, 2, [4]]]));
