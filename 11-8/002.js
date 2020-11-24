/**
---------------------
First Letter Grouping
---------------------

Diberikan sebuah variabel `name`. Buatlah sebuah script untuk menampilkan nama tersebut
berada di group ke-berapa, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka tampilkan 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka tampilkan 'Masuk group kedua'
- Selain itu tampilkan 'Masuk group terakhir'

Contoh:
- `name` = 'daniel', output: 'Masuk group pertama'
- `name` = 'immelda', output: 'Masuk group kedua'
- `name` = 'taufik', output: 'Masuk group terakhir'
- `name` = 'sergei', output: 'Masuk group terakhir'

*/

function namaHuruf(nama) {
  if (
    nama[0] === "a" ||
    nama[0] === "b" ||
    nama[0] === "c" ||
    nama[0] === "d"
  ) {
    return `${nama} masuk grup pertama`;
  } else if (
    nama[0] === "e" ||
    nama[0] === "f" ||
    nama[0] === "g" ||
    nama[0] === "h"
  ) {
    return `${nama} masuk grup kedua`;
  } else {
    return `${nama} masuk grup terakhir`;
  }
}

console.log(namaHuruf("asep"));
console.log(namaHuruf("hacummm"));
console.log(namaHuruf("ucup"));
