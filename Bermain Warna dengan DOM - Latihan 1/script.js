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

// menangkap slidernya  merah
const sMerah = document.querySelector('input[name=sMerah]');
// menangkap slider hijau
const sHijau = document.querySelector('input[name=sHijau]');
// menangkap slider biru
const sBiru = document.querySelector('input[name=sBiru]');
// membuat event listener slider merahnya 
sMerah.addEventListener('input', function () {
    // membuat variable 3 variablenya.value untuk mengaktifkan slidernya
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    // memilih bagian mana yang akan diwarnai
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
// membuat event listener slider hijau
sHijau.addEventListener('input', function () {
    // membuat 3 variablenya.value untuk mengaktifkan slidernya
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    // memilih bagian mana yang akan diwarnai
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

})
sBiru.addEventListener('input', function () {
    // membuat 3 variablenya.value untuk mengaktifkan slidernya
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    // memilih bagian mana yang akan diwarnai
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

})

// menangkap element body dna menggunakan mousemove
document.body.addEventListener('mousemove', function (event) {
    // event berguna sebagai untuk mengetahui kordinat sumbu x nya dan itu garus menempel disuatu objek yang akan di taro di function
    // POSISI MOUSE X
    // console.log(event.clientX);
    // mengetahui ukuran dari browser
    // console.log(window.innerWidth);
    // membuat variable untuk mengetahui posisi kursor yang / lebar dari browsernya dan di * 255 yang berfungsi untuk menggenerate kadar rgb nya tidak lebih dari 255
    // math.round berguna sebagai menjadikan bilangan bulat yang defaultnya menjadi bilangan desimal
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    // POSISI MOUSE Y
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    //  memilih bagian mana yang akan diwarnai 
    document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)';
});