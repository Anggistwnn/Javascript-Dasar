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
// sama persis dengan yang ada pada for diatas
// forEach=pada setiap

// angka.forEach (untuk setiap elemen yang ada pada array angka)
//  (function (e) { (lakukan fungsi berikut ini)
//     console.log(e)
// }); 
// angka.forEach(function (e) {
//     console.log(e)
// });
// contoh lain
// nama.forEach(function (e, i) {
//     console.log('mahasiswa ke ' + (i + 1) + ' adalah : ' + e)
// })

// 8. Map (sama dengan foreach tetapi lebih baik karna map membalikan angka sedangkan foreach tdk)
// code dibawah jika diganti dengan angka.foreach itu tdk bisa
// var angka = [1, 2, 3, 4, 5, 6, 7];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join('-'));

// 8. sort (berguna untuk mengurutkan angka pada elemen yang ada)
// tanpa angka 10
// var angka = [1, 2, 5, 3, 4, 8, 7, 6, 9];
// angka.sort();
// console.log(angka);
// untuk mengatasi membaca perkarakter gunakan
// function (a, b) {
//     return a - b;
// })
// dengan angka 10
// var angka = [1, 2, 5, 3, 4, 8, 7, 6, 9, 10];
// angka.sort(function (a, b) {
//     return a - b;
// })
// console.log(angka);

// 9.Filter(berguna untuk mencari nilai array dan mengembalikannya menjadi array)
//   Find(hanya bisa menemukan 1 nilai saja)
// var angka = [1, 2, 5, 3, 4, 8, 7, 6, 9, 10];
// var angka2 = angka.filter(function (x) {
//     // var angka2 = angka.find(function (x) {
//     // befungsi untuk mencari nilai yang lebih dari 4
//     return x > (4);

//     // berfungsi untuk mencari nilai 5
//     // return x == (5);
// });
// // console.log(angka2);
// console.log(angka2.join('-'));

// membuat program sederhana pengelolaan angkot mengunakan array

// TambahPenumpang()
// 2 Parameter:
//  -namaPenumpang
//  -arrayPenumpang

// Rules :
//  -Jika angkot kosong, penumpang naik duduk dikursi pertama
//  -Penumpang berikutnya duduk dikursi selanjutnya secara berurutan
//  -jika ada kursi kosong(karena Penumpang turun), penumpang naik berikutnya duduk dikursi kosong yang bekas diisi penumpang turun
//  -asumsi kursi tidak akan penuh dan akan bertambah jika ada penumpang naik
//  -nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun

// var penumpang = [];

// var tambahPenumpang = function (namaPenumpang, penumpang) {
//     // jika angkot kosong
//     if (penumpang.length == 0) {
//         // tambah penumpang diawal array
//         penumpang.push(namaPenumpang);
//         // kembalikan isi array & keluar dari function
//         return penumpang;
//         // kalau penumpang nya ada
//     } else {
//         // telusuri seluruh kursi dari awal
//         for (var i = 0; i < penumpang.length; i++) {
//             // jika kursi kosong
//             if (penumpang[i] == undefined) {
//                 // tambah penumpang dikursi tersbut
//                 penumpang[i] = namaPenumpang;
//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
//             }
//             //  jika sudah ada nama yang sama 
//             else if (penumpang[i] == namaPenumpang) {
//                 // tampilkan pesan kesalahan
//                 console.log(namaPenumpang + ' sudah ada didalam angkot. ')
//                 // kembalikan isi array & keluar dari function
//                 // jika seluruh kursi terisi
//                 return penumpang;
//             } else if (i == penumpang.length - 1) {
//                 // tambah penumpang     diakhir array
//                 penumpang.push(namaPenumpang);
//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
//             }
//         }
//     }
// };

// var hapusPenumpang = function (namaPenumpang, penumpang) {
//     // jika angkot kosong
//     // tampilkan pesan bahwa angkot kosong dan tidak mungki ada penumpang turun
//     if (penumpang.length == 0) {
//         console.log('Angkot masih kosong.');
//         // kembalikan isi array & keluar  dari function
//         // else
//     } else {
//         // menelusuri seluruh kursi dari awal 
//         // jika nama penumpang sesuai
//         for (var i = 0; i < penumpang.length; i++) {
//             // hapus penumpang dengan mengubah namanya 
//             // menjadi undefined
//             if (penumpang[i] == namaPenumpang) {
//                 penumpang[i] = undefined;
//                 // kembalikan isi array & keluar  dari function

//             } else if (i == penumpang.length - 1) {
//                 //jika tidak ada nama yang sesuai
//                 // tampilkan pesan kesalahan nya 
//                 console.log(namaPenumpang + ' tidak ada didalam angkot. ');
//             }
//         }
//     }
//     // kembalikan isi array & keluar  dari function
//     return penumpang;
// }

// var namaMhs = 'Adewaliya';
// var umurMhs = '24';
// var lulus = true;
// var IPSemester = [2.90, 3.02, 3.22, 3.67, 3.08];

// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for (var i = 0; i < IPSemester, length; i++) {
//         total += IPSemester[i];
//     }
//     return total / IPSemester.length;
// }
// console.log(IPKumulatif);


// Membuat object pada JS

var mhs = {
    // dibawah ini merupakan variable yang terdapat didalam objek disebut properti yang diakhiri dengan tanda koma (,)
    nama: "Anggi Setiawan",
    umur: 24,
    ips: [3.67, 3.80, 3.80, 3.24],
    alamat: {
        jalan: "Jalur/Mujair, Bambu Apus, Pamulang",
        kota: "Tangerang Selatan",
        provinsi: "Banten",
    }
    // sedangkan function disebut dengan
    // menampilkan data pada console.log bisa menggunakan mhs.kota atau mhs["kota"]
}