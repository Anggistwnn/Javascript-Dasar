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

var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang diawal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
        // kalau penumpang nya ada
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang dikursi tersbut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            //  jika sudah ada nama yang sama 
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' sudah ada didalam angkot. ')
                // kembalikan isi array & keluar dari function
                // jika seluruh kursi terisi
                return penumpang;
            } else if (i == penumpang.length - 1) {
                // tambah penumpang     diakhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    // tampilkan pesan bahwa angkot kosong dan tidak mungki ada penumpang turun
    if (penumpang.length == 0) {
        console.log('Angkot masih kosong.');
        // kembalikan isi array & keluar  dari function
        // else
    } else {
        // menelusuri seluruh kursi dari awal 
        // jika nama penumpang sesuai
        for (var i = 0; i < penumpang.length; i++) {
            // hapus penumpang dengan mengubah namanya 
            // menjadi undefined
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                // kembalikan isi array & keluar  dari function

            } else if (i == penumpang.length - 1) {
                //jika tidak ada nama yang sesuai
                // tampilkan pesan kesalahan nya 
                console.log(namaPenumpang + ' tidak ada didalam angkot. ');
            }
        }
    }
    // kembalikan isi array & keluar  dari function
    return penumpang;
}
