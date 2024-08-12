// // global scope / window scope
// // object paling luar di browsoer kita
// var a = 1;

// function test() {
//   var b = 2;
//   // saat mengambil variabel di global scope maka bisa diambil tetapi sebaliknya jika mengambil variabel di dalam function scope maka tidak bisa
//   console.log(a);
// }

// test();
// // variabel b tidak bisa dipanggil karena variabel nya ada di function scope
// // console.log(b);

// var a = 1;
// function test() {
//   //name conflict
//   var a = 2;
//   // menggunakan fungsi window untuk mengambil variabel diluar function jika nama nya sama
//   console.log(window.a);
// }

// test();
// //console.log(a);

// // "use strict";
// // var a = 1;
// function test() {
//   //ketika kita tidak mendeklarasi variabel dengan keyword var maka akan mengambil di luar function variabel jika diluar tidak ada juga maka akan dibuatkan variabel global
//   a = 2;
// }

// test();
// console.log(a);

//variabel global
var a = 1;
function test(a) {
  // a disini adalah variabel lokal yang ada di function
  console.log(a);
}
test(a);
console.log(a);
