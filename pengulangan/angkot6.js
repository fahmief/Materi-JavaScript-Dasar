var jmlAngkot = 10;
for (var angkot = 1; angkot <= jmlAngkot; angkot++) {
  if (angkot <= 6 && angkot !== 5) {
    console.log("Angkot no. " + angkot + " beroperasi dengan baik");
  } else if (angkot === 8 || angkot === 10 || angkot === 5) {
    console.log("Angkot no. " + angkot + " Sedang lembur");
  } else {
    console.log("Angkot no. " + angkot + " tidak beroperasi dengan baik");
  }
}
