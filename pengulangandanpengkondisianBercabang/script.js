// var s = "";
// for (var i = 1; i <= 10; i++) {
//   s += "*";
//   s += "\n";
// }
// console.log(s);

// var s = "";
// for (var i = 1; i <= 7; i++) {
//   for (var j = 0; j < 10; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);
//persegi

// var s = "";
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);
//segitga biasa yang baris awal nya cuma 1

// ketika ada for didalam for maka for yang atas akan dikondisikan dulu kalau iya maka ke for lanjutnya dan saat di for ke dua maka harus diulang lagi sampai for ke dua habis tidak ada lagi true maka langsung ke bawah habis itu ke for 1 lagi dan seterusnya sampai gak ada nilai true nya
// var s = "";
// for (var i = 10; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);
// segitiga biasa yang baris awalnya banyak

var s = "";
for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= i; j++) {
    if (j + 1 <= i) {
      s += "";
    } else {
      s += "*";
    }
  }
  s += "\n";
}
console.log(s);
