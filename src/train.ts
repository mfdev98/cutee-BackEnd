// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
// faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(num: number[]) {
   let p: string = '';
   for (let i: number = 0; i < num.length; i++) {
      if (num[i] > 0) {
         p += num[i];
      }
   }
   return console.log(p);
}
getPositive([1, -4, 2, 0, 3]);






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