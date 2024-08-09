alert("game tebak tebakan pilih dari angka 1-10 \n dan kamu memiliki 3 kesempatan saja");
var kesempatan = 3;
var hasil = "";
var comp = parseInt(Math.random() * 10);
console.log(comp);
// var lagi = true;

while (kesempatan > 0) {
  var orangAngka = prompt("masukkan angka yang akan di pilih");
  if (orangAngka == comp) {
    kesempatan = 0;
    hasil = "Tebakan anda benar Angka yang dicari adalah angka " + orangAngka;
  } else if (orangAngka != comp) {
    kesempatan = kesempatan - 1;
    hasil = orangAngka < comp ? "Tebakan Anda terlalu rendah \n" : "Tebakan anda Terlalu tinggi";
    if (kesempatan != 0) {
      hasil += " anda mempunya " + kesempatan + "kesempatan";
    } else {
      hasil += "Kesempatan anda telah habis. \n " + " Angka yang benar adalah angka " + comp + " \n Terimakasih sudah bermain tebak angka";
    }
  } else {
    hasil = "Angka yang anda masukkan bukan nilai 1-10";
  }
  alert(hasil);
}
