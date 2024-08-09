var penumpang = [];
//"fahmief", "NUR", "tabitha"
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    //kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    //telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      //jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + " sudah ada didalam angkot.");
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        //tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan angkot kosong
    console.log("Angkot masih Kosong !");
    //kembalikan isi array & keluar dari function
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak berada di angkot.");
        return penumpang;
      }
    }
  }
  return penumpang;
};
