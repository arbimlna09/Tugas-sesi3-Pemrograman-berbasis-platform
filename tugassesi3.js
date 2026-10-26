// 1. Tugas 1 - percabangan
let nilai = 20;
let ket  = "";
if(nilai >= 80 && nilai <100){
    ket = "A"
}else if(nilai >= 70){
    ket = "B"
}else if(nilai >= 60){
    ket = "C"
}else if(nilai >=50){
    ket = "D"
}else{
    ket = "E"
}

console.log(`Nilai ${nilai}, Keterangan ${ket}`)

//2. Tugas 2 - Perulangan
console.log("Perulangan for")
for(let i=1; i <= 20;i += 2){
    console.log(i)
}

console.log("Perulangan menggunakan while")

let i = 1;
while(i <= 20){
    console.log(i)
    i += 2;
}

//3.Tugas 3 - Array
let nama = ["arbi", "ipey", "rasya", "rizal", "amay"] 
//menampilkan semua nama
console.log("Menampilkan nama")
for(let i = 0;i <nama.length;i++){
    console.log(`${i + 1}. ${nama[i]}`)
}
//menambahkan sebuah nama
console.log("Menambahkan nama")
nama.push("juned");

//menghapus nama
console.log("Menghhapus nama")
nama.shift();

//nama setelah di modifikasi
console.log("data setelah di modifikasi")
for(let i = 0;i <nama.length;i++){
    console.log(`${i + 1}. ${nama[i]}`)
}