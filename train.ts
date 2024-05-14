// MIT TASK ZK
/**Shunday function yozing, u parametrda berilgan stringni 
 * kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”
 */
function stringToKebab(input: string): string {
	// Harflarni kichik qilish
	const lowercaseInput = input.toLowerCase();
	// Bo'sh joylarni - belgiga almashtirish
	const kebabCaseString = lowercaseInput.replace(/\s+/g, '-');
	return kebabCaseString;
}

// Test qilish
console.log(stringToKebab('I love Kebab')); // "i-love-kebab"

//==============

// // MIT TASK ZK
// /**
// type scriptda Shunday function yozing, u har soniyada bir marta
// consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini
// toxtatsin.   MASALAN: printNumbers() */
// function printNumbers() {
// 	let count = 1;
// 	const interval = setInterval(() => {
// 		console.log(count);
// 		count++;
// 		if (count > 5) {
// 			clearInterval(interval);
// 		}
// 	}, 1000);
// }

// printNumbers();

//================

// // MIT TASK ZJ
// /** type scriptda Shunday function yozing,
//  * u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8 */
// function reduceNestedArray(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (Array.isArray(arr[i])) {
// 			sum += reduceNestedArray(arr[i]);
// 		} else {
// 			sum += arr[i];
// 		}
// 	}
// 	return sum;
// }
// console.log(reduceNestedArray([1, [1, 2, [4]]]));
