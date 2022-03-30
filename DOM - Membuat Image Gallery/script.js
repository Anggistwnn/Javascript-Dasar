// menangkap containernya
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
// membuat variable untuk menggurangi opacity img ketika sudah di-klik
const thumbs = document.querySelectorAll('.thumb');
// memberikan aksi yang akan dilakukan
container.addEventListener('click', function (e) {

    // cek apakah yang akan di-klik adalah thumb 
    if (e.target.className == 'thumb') {
        // jika benar yang diklik adalah thumb makan akan melakukan funct dibawah ini yang artinya mengganti container jumbo menjadi thumb yang di klik
        jumbo.src = e.target.src;
        // membuat animasi fade pada saat gambar yang akan muncul di banner jumbo
        jumbo.classList.add('fade');
        // menghilangkan animasi fade agar hilang ketika sudah di-click
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);
        // membuat fungsi ketika gambar di-klik gambar akan memiliki efek opacity 0.5

        thumbs.forEach(function (thumb) {
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');

    }

});