// J-TASK: 

// Shunday function yozing, u string qabul qilsin va 
// string ichidagi eng uzun sozni qaytarsin. MASALAN: 
// findLongestWord("I come from Uzbekistan") 
// return "Uzbekistan"

function findLongestWord(str: string) {
   let strArr: string[] = str.split(" ");
   let maxLength: number = 0;
   let maxStr: string = "";

   for (let i = 0; i < strArr.length; i++) {
      if (maxLength < strArr[i].length) {
         maxLength = strArr.length;
         maxStr = strArr[i];
      }
   }

   console.log(maxStr);
}

findLongestWord("I come from Uzbekistan")

console.log('==========');

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

console.log('==========');

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

console.log('==========');

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