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

// menampilkan array multi dimensi dengan fuc myarr3
// var myFunc = function () {
//     alert('Hello dude');
// }
// var myArr2 = ['teks', 2,  true, myFunc];
// array multidimensi dimana terdapat array didalam array
// var myArr3 = ['teks', 2, false, myFunc, [1, 2, 3]];
// console.log(myArr3[4][1]);

// cara menambahkan array
// var mhs = ['anggi'];
// mhs[1] = 'dany';
// mhs[2] = 'bambang';
// console.log(mhs);

// cara menghapus array
// var mhs = ['anggi', 'dany'];
// mhs[1] = undefined;
// console.log(mhs);

//menampilkan array menggunakan logic
// var mhs = ['anggi', 'dany', 'bambang', ];

// for (var i = 0; i < mhs.length; i++) {
//     console.log('mahasiswa ke-' + i + ':' + mhs[i]);
// };

// method pada Array //
//1.length untuk menghitung ada berapa parameter yang ada
// var mhs = ['anggi', 'dany'];
// console.log(mhs.length);

//2.join untuk merapihkan hasil dari soure pada console log 
// var mhs = ['anggi', 'dany'];
// console.log(mhs.join(' - '));

// 3. push untuk menambahkan elemen array diakhir array.
// mhs.push('bambang');
// console.log(mhs.join(' - '));

// 4. pop untuk menghilangkan elemen terakhir pada console
// mhs.pop();
// console.log(mhs.join(' - '));

//5. unshift(berfungi untuk menambahkan parameter dan ditempatkan di parameter pertama) & shift(berfungsi untuk menghilangkan parameter pertama)
// mhs.shift();
// mhs.unshift("ade");
// console.log(mhs.join(' - '));

// 6. Splice berfungsi untuk menmbahkan elemen baru diatara elemen yang lain.
// variable.splie(indexAwal, MauDihapusBerapaParameter, ElemenBaru1, Elemenbaru2 .....)
// var mhs = ['anggi', 'dany', 'adewaliya'];
// mhs.splice(1, 0, "roudoh");
// console.log(mhs.join('-'));

// Slice berfungsi untuk menampilkan parameter yang diinginkan saja.
// slice(indexAwal, indexAkhir);
// index awal diambil index akhir dikurangi 1


// var mhs = ['anggi', 'dany', 'adewaliya', 'arisa', 'raihany'];
// var mhs2 = mhs.slice(2, 5);
// console.log(mhs2.join('-'));
// array lama
// console.log(mhs.join('-'));

// 7. foreach 
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["anggi", "dany", "bambang"]
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

var mhs = ['anggi', 'dany', 'adewaliya', 'arisa', 'raihany'];
var mhs2 = mhs.slice(2, 5);
console.log(mhs2.join('-'));
// array lama
console.log(mhs.join('-'));

// 7. foreach 
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ["anggi", "dany", "bambang"]
for (var i = 0; i < angka.length; i++) {
    console.log(angka[i]);
}

// sama persis dengan yang ada pada for diatas
// forEach=pada setiap

// angka.forEach (untuk setiap elemen yang ada pada array angka)
(function (e) {
    ('lakukan fungsi berikut ini')
    console.log(e)
});
angka.forEach(function (e) {
    console.log(e)
    // });
    // contoh lain
    nama.forEach(function (e, i) {
        console.log('mahasiswa ke ' + (i + 1) + ' adalah : ' + e)
    })
})