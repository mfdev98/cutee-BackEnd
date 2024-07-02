// P-TASK

// Shunday function yozing, u object qabul qilsin va 
// arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

const objectToArray = (obj: any) => {
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]]);
        }
    }
    console.log(result);
};

objectToArray({ a: 10, b: 20 });

console.log('=====N-TASK=====');

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat 
// array qabul qilsin va array ichidagi sonlar yigindisini 
// hisoblab chiqqan javobni qaytarsin. MASALAN: 
// calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(arr: any[]) {
//     let sum: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if ("number" == typeof arr[i])
//             sum += arr[i];
//     }
//     console.log(sum);
// }

// calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);

console.log('=====N-TASK=====');

// N-TASK:

// Shunday function yozing, u string qabul qilsin va 
// string palindrom yani togri oqilganda ham, orqasidan 
// oqilganda ham bir hil oqiladigan soz ekanligini aniqlab 
// boolean qiymat qaytarsin. MASALAN: palindromCheck("dad") 
// return true;  palindromCheck("son") return false;

// function palindromCheck(s: string) {
//     let reversed = s.split('').reverse().join('');

//     if (s === reversed) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));

console.log('=====M-TASK=====');

// M-TASK:

// Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
// tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin
// MASALAN: getSquareNumbers([1, 2, 3]) 
//return [{number: 1, square: 1}, number: 2, square: 4 }, { number: 3, square: 9 }];

// function getSquareNumbers(num: number[]) {
//     let result = [];

//     for (let i = 0; i < num.length; i++) {
//         let square = num[i] * num[i];
//         let obj = {
//             number: num[i],
//             square: square
//         };
//         result.push(obj);
//     }
//     console.log(result);
// }

// getSquareNumbers([1, 2, 3]);

console.log('=====L-TASK=====');

// L-TASK:

// So'zlarni ketma - ketligini buzmasdan har bir so'zni
// alohida teskarisiga o'girib beradigan fucntion tuzing.
// Funtion yagona string qabul qilsin

// MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
// Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda

// function reverseSentence(str:string){
//    str=str.split(' ').map((word: string) => word.split('').reverse().join('')).join(' ');
//    console.log(str);
// }

// reverseSentence("we like coding!");

console.log('=====K-TASK=====');

// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli
// harflar sonini qaytarsin. MASALAN: countVowels("string") return 1;

// function countVowels(str: string) {
//    let count: number = 0;
//    str = str.toLowerCase();

//    for (let i: number = 0; i < str.length; i++) {
//       if (
//          str[i] === 'a' || str[i] === 'e' ||
//          str[i] === 'i' || str[i] === 'o' ||
//          str[i] === 'u' || str[i] === 'y'
//       ) { count++; }
//    }
//    console.log(count);
// }

// countVowels("String");

console.log('=====J-TASK=====');

// J-TASK: 

// Shunday function yozing, u string qabul qilsin va 
// string ichidagi eng uzun sozni qaytarsin. MASALAN: 
// findLongestWord("I come from Uzbekistan") 
// return "Uzbekistan"

// function findLongestWord(str: string) {
//    let strArr: string[] = str.split(" ");
//    let maxLength: number = 0;
//    let maxStr: string = "";

//    for (let i = 0; i < strArr.length; i++) {
//       if (maxLength < strArr[i].length) {
//          maxLength = strArr.length;
//          maxStr = strArr[i];
//       }
//    }

//    console.log(maxStr);
// }

// findLongestWord("I come from Uzbekistan");

console.log('=====I-TASK=====');

// I-TASK:

// Shunday function yozing, u parametridagi array 
// ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function majorityElement(arr: number[]) {
//    let countA: number = 0;   
//    let countB: number = 1;
//    let result: number = 0;
//    for (let a = 0; a < arr.length; a++) {
//       for (let b = 1; b < arr.length; b++) {
//          if (arr[a] === arr[b]) {
//             countB++;
//          }
//       }
//       if (countA <= countB) {
//          result = arr[a];
//          countA = countB;
//          countB = 1;
//       }
//    }
//    console.log(result);
// }


// majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);

console.log('=====H2-TASK=====');

// H2-TASK: 
// Shunday function tuzing, unga string argument pass bolsin.
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(str: string) {
//    let a: RegExp = /[^\0-9]/g;
//    let result: string = str.replace(a, '');
//    console.log(result);
// }

// getDigits('m14i1t');

console.log('=====H-TASK=====');

// H-TASK:

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
// faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(num: number[]) {
//    let p: string = '';
//    for (let i: number = 0; i < num.length; i++) {
//       if (num[i] > 0) {
//          p += num[i];
//       }
//    }
//    return console.log(p);
// }
// getPositive([1, -4, 2, 0, 3]);






// G-TASK

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning taribidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

// function getHighestIndex(num: number[]) {
//     let max: number = 0;
//     let index: number = 0;
//     for (let i: number = 0; i < num.length; i++) {
//         if (max < num[i]) {
//             max = num[i];
//             index = i;
//         }
//     }
//     return console.log(index);
// }
// getHighestIndex([5, 21, 12, 21, 8]);