//MIT TASK ZN
/** type scriptda Shunday function yozing, uni array va number parametri 
 * bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4] */
function rotateArray(arr: any[], index: number): any[] {
	// arrayning uzunligini olamiz
	const length = arr.length;
	// indeksni tekshiramiz va to'g'rilaymiz, agar indeks array uzunligidan katta bo'lsa
	const normalizedIndex = index % length;
	// arrayni bo'lamiz
	const firstPart = arr.slice(length - normalizedIndex);
	const secondPart = arr.slice(0, length - normalizedIndex);
	// array qismlarini birlashtiramiz
	return firstPart.concat(secondPart);
}

// Funksiyani chaqirish misoli:
const result = rotateArray([1, 2, 3, 4, 5, 6], 2);
console.log(result); // [5, 6, 1, 2, 3, 4]

//==================

// // MIT TASK ZM
// /** type scriptda Shunday function yozing, u function parametrga berilgan
//  * raqamlarni orqasiga ogirib qaytarsin.
// MASALAN: reverseInteger(123456789) return 987654321 */
// function reverseInteger(num: number): number {
// 	const reversedNum = parseInt(num.toString().split('').reverse().join(''));
// 	return reversedNum;
// }

// console.log(reverseInteger(123456789)); // 987654321
// /**Bu kod reverseInteger nomli bir funksiya qabul qiladi va parametrga berilgan raqamni o'zgartiradi.
//  *  Raqamni stringga aylantiradi,
//  * harflarini qaytib o'zgartiradi va qaytib raqamga o'zgartiradi. */

///======================

// // MIT TASK ZL
// /**Shunday function yozing, u parametrda berilgan stringni
//  * kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”
//  */
// function stringToKebab(input: string): string {
// 	// Harflarni kichik qilish
// 	const lowercaseInput = input.toLowerCase();
// 	// Bo'sh joylarni - belgiga almashtirish
// 	const kebabCaseString = lowercaseInput.replace(/\s+/g, '-');
// 	return kebabCaseString;
// }

// // Test qilish
// console.log(stringToKebab('I love Kebab')); // "i-love-kebab"

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
