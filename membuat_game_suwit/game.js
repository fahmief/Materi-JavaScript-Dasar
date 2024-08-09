var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("Pilih : gajah, semut, orang");

  // menangkap pilihan computer
  // membangkitakn bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "Seri!";
  } else if (p == "gajah") {
    //   if (comp == "orang") {
    //     hasil = "Menang!";
    //   } else {
    //     hasil = "Kalah!";
    //   }
    hasil = comp == "orang" ? "Menang!" : "Kalah!";
  } else if (p == "orang") {
    //   if (comp == "gajah") {
    //     hasil = "Kalah!";
    //   } else {
    //     hasil = "Menang!";
    //   }
    hasil = comp == "gajah" ? "Kalah!" : "Menang!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "Kalah" : "Menang!";
  } else {
    hasil = "Memasukkan pilihan yang salah!";
  }

  //tampilkan hasilnya
  alert("Kamu Memilih : " + p + " Dan Komputer Memilih : " + comp + "\nMaka hasilnya : Kamu " + hasil);

  tanya = confirm("Mau bermain lagi?");
}

alert("terimakasih sudah bermain :)");
