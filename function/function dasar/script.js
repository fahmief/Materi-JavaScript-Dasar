function volumeJumlahKubus(a, b) {
  return a * a * a + b * b * b;
}
// console.log(volumeJumlahKubus(8, 3));
// console.log(volumeJumlahKubus(5, 5));
tanya = true;
while (tanya) {
  alert("selamat datang di pembuatan pemjumlahan 2 kubus");

  var a = parseInt(prompt("masukkan sisi kubus pertama"));
  var b = parseInt(prompt("masukkan sisi kubus kedua"));
  alert("hasil dari jumlah volume 2 kubus dari sisi kubus pertaman adalahh " + a + " dan sisi kubus kedua adalah " + b + " maka jumlah keseluruhan adalah " + volumeJumlahKubus(a, b));

  tanya = confirm("apakah mau mengulangi lagi?");
}
