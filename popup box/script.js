// alert("hello");
// alert("nama saya fahmi");
//alert("");
//alert untuk menampilkan windows kecil

//promt
//untuk menampilkan windows kecil dan bisa masukkan pesan yang ada ke dialog
//mengembalikan nilai apapun yang di input
// var nama = prompt("masukkan nama :");
// console.log(nama);
// alert(nama);

//confirm
//digunakan untuk meminta konfirmasi dari user
//mengembalikan nilai true or false
// var yes = confirm("kamu yakin :");
// console.log(yes);
// alert(yes);

// if (yes === true) {
//   alert("user menekan tombol ok");
// } else {
//   alert("user menekan tombol cancel");
// }

alert("selamat datang..");
var lagi = true;
//or lagi tok juga bisa karena sudah true//
while (lagi === true) {
  var nama = prompt("masukkan nama :");
  alert("halo " + nama);

  lagi = confirm("coba lagi??");
}

alert("terimah kasih :)");
