/**

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh. Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


# Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

# Asumsi:
- `maxBudget` akan memiliki nilai >= 0, dan array `gifts` tidak akan pernah kosong.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

// function howManyGifts(maxBudget, gifts) {
//   // Code here
//   let temp;
//   let urutan = [];
//   for (let i = 0; i < gifts.length; i++) {
//     if (gifts[i] > gifts[i + 1]) {
//       temp = gifts[i];
//       gifts[i] = gifts[i + 1];
//       gifts[i + 1] = temp;
//     }
//     urutan.push(gifts[i]);
//   }
//   return urutan;
// }

function howManyGifts(maxBudget, gifts) {
  // Code here
  let temp;
  let urutan = [];
  for (let i = 0; i < gifts.length; i++) {
    for (let j = 0; j < gifts.length; j++) {
      console.log(j);
      console.log("       j", gifts[j]);
      console.log("                   j + 1", gifts[j + 1]);
      if (gifts[j] > gifts[j + 1]) {
        temp = gifts[j];
        gifts[j] = gifts[j + 1];
        gifts[j + 1] = temp;
      }
      urutan.push(gifts[j]);
    }
  }
  return urutan;
}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
// console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
// console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
// console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
// console.log(howManyGifts(0, [10000, 3000])); // 0
