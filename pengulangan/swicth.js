// parseInt fungsi untuk menjadikan integer
// var angka = prompt("masukkan angka :");
// if (angka === 1) {
//   alert("anda memasukkan angka 1");
// } else if (angka === 2) {
//   alert("anda memasukkan angka 2");
// } else if (angka === 3) {
//   alert("anda memasukkan angka 3");
// } else {
//   alert("angka yang anda masukkan salah");
// }

//swicth
// switch (angka) {
//   case "1":
//     alert("anda memasukkan angka 1");
//     break;
//   case "2":
//     alert("anda memasukkan angka 2");
//     break;
//   case "3":
//     alert("anda memasukkan angka 3");
//   default:
//     alert("angka yang anda masukkan salah");
//     break;
// }

var item = prompt("masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, burger, softdrink)");
// break ketika cuma 1 case aja yang dijalankan selebihnya akan dikeluarkan
// kalau ada sama kata katanya gak usah pakai break + inputan cukup taruh di angkir yang sama agar tidak memperbanyak space kodingannya
switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan / minuman Sehat");
    break;
  case "burger":
  case "softdrink":
    alert("makanan / minuman tidak Sehat");
    break;
  default:
    alert("anda memasukkan nama makanan/minuman yang salah");
    break;
}
