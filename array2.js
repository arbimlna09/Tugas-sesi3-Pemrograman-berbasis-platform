//array multidimensi

let fruits = [
    ["Apple", 10000],
    ["Watermelon", 15000],
    ["Banana", 7000],
    ["Orange", 10000],
];
console.log(`${fruits[2][1]}`)
for(let data of fruits){
    console.log(`Nama : ${data[0]}, Harga ${data[1]}`)
}
