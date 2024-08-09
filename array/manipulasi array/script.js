// manipulasi array

// 1. menambah isi array
// var arr = ["a", 1, true];

// console.log(arr[1]);

// var arr = [];
// arr[0] = "fahmief";
// arr[1] = "tabitha";
// arr[2] = "nur";
// // ketika tidak ada index sebelumnya maka akan di buat jadi undifined
// arr[4] = "risky";
// console.log(arr);

// 2. menghapus isi array
// var arr = ["fahmief", "tabitha", "nur"];
// arr[2] = undefined;
// console.log(arr);

// 3. menampilkan isi array
// var arr = ["fahmief", "tabitha", "nur"];

// for (var i = 0; i < arr.length; i++) {
//   console.log("mahasiswa ke-" + (i + 1) + " : " + arr[i]);
// }

// method pada array

// 1. join
// untuk menggabungka array dalam apapun entah spasi - atau /
// console.log(arr.join(" - "));

//2. push dan pop
// push menambhahkan element

// arr.push("shelma", "fitri");
// pop menghapus element terakhir sebuah array

// arr.pop();
// console.log(arr.join(" - "));

// 3. unshift & shift
// element pertama pada array
// unshift menambhkan array di awal element pertama
// arr.unshift("risky");

//shift menghapus element di awal array
// arr.shift();
// console.log(arr.join(" - "));

// var arr = ["fahmief", "tabitha", "nur"];

// 4. splice
// menyambung atau menambal ditengah tengah array
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, "Risky", "meki");
// arr.splice(1, 2, "risky", "meki");
// console.log(arr.join(" - "));

// 5. slice
// mengiris sebuah array menjadi array baru
// slice(awal,akhir);
// slice harus membuat array baru karena di iris datanya

// var arr = ["fahmief", "tabitha", "nur", "risky", "meki"];
// var arr2 = arr.slice(1, 4);
// console.log(arr.join(" - "));
// console.log(arr2.join(" - "));

// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["fahmief", "tabitha", "nur"];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log("mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });

// 7. map
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 8. sort
// mengurutkan data
// mengurutkan data sesuai angka yang terkecil contoh dari 1 10 2 20
// maka jawabannya 1 10 2 20 dan seterusnya
// a-b untuk ascending (mengurut menaik atau dari kecil ke atas)
// b-a untuk descending (dari atas ke bawah)
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// 9. filter
// mencari data / mengembalikan banyak nilai
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// var angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2.join(" - "));

// 10. find
// mencari data / mengembalikan 1 nilai
var angka = [1, 2, 7, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function (x) {
  return x > 5;
});
console.log(angka2);
