// var binatang = binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'cicak', 'sapi', 'kambing']; {

// };
// console.log(typeof (binatang));

// // console.log(binatang.length); untuk menampilkan berapa elemen yang ada 
// // console.log(typeof(binatang)); untuk menampilkan apa tipe yang ada
// // console.log(binatang[4]); untuk menampilkan array pada index ke 4

// // elemen pada array boleh berbeda type
// var hari = ['senin', 'selasa']; //String
// var mhs = ['anggi', 'dany'];
// var angka = [1, 2, 3]; //integer
// var myArr = ['teks', 123, true]; //gabungan String, int, Boolean
var myFunc = function () {
    alert('Hello dude');
}
// var myArr2 = ['teks', 2, true, myFunc];
// array multidimensi dimana terdapat array didalam array
var myArr3 = ['teks', 2, false, myFunc, [1, 2, 3]];
console.log(myArr3[4][1]);