// menangkap element yang akan diubah
const tUbahWarna = document.getElementById('tUbahWarna');
// const body = document.getElementsByTagName('body')[0];
// mengubah warna background ketika diclick
tUbahWarna.onclick = function () {
    // document.body.setAttribute('class', 'hijau-muda');
    // menghilangkan warna ketika diclick lagi button nya menggunakan classList.toggle
    document.body.classList.toggle('hijau-muda');
}

//Membuat button acak warna 
const tAcakWarna = document.createElement('button');
// membuat nama pada button
const teksTombol = document.createTextNode('Acak Warna');
// menggabungkan nya menjadi tombol yang memiliki tulisan
tAcakWarna.appendChild(teksTombol);
// membuat button memiliki attribut type
tAcakWarna.setAttribute('type', 'button');
// simpan ditempat yang kita diinginkan 
tUbahWarna.after(tAcakWarna);
// membuat event menggunakan addEventListener
tAcakWarna.addEventListener('click', function () {
    // membuat 3 variable baru dan menggunakan math.random dan membuat nilai randomnya tidak lebih dari 255 dan tidak kurang dari 1 dengan fungsi pembulatan (round), floor, ceil  
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    // menentukan warna yang akan diganti menggunakan code dibawah ini, dapat menggunakan hexadesimal, nama warna, kadar rgb dan menangkap variable diatas menggunakan concatinasi
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ', ' + b + ')';
});

// menangkap slidernya  
const sMerah = document.querySelector('input[name=sMerah]');