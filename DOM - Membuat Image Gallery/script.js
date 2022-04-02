// menangkap containernya
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
// memberikan aksi yang akan dilakukan
container.addEventListener('click', function (e) {

    // cek apakah yang akan di-klik adalah thumb 
    if (e.target.className == 'thumb') {
        // jika benar yang diklik adalah thumb makan akan melakukan funct dibawah ini yang artinya mengganti container jumbo menjadi thumb yang di klik
        jumbo.src = e.target.src;

    }

});