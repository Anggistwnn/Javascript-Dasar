// DOM Selection
// mencari elemen html berdasarkan id

// document.getElementById()

// menggunakan variable judul dan menggunakan parameter apa saja bisa(disini menggunakan judul)
const judul = document.getElementById('judul');
// mengganti warna pada font judul
judul.style.color = 'pink';
// mengubah warna pada background judul
judul.style.backgroundColor = 'grey';
// mengganti judul dengan nama 
judul.innerHTML = 'Anggi Setiawan';

// document.getElementsByTagName()
//  -> HTMLCollection

const p = document.getElementsByTagName('p');
// tanpa menggunakan looping dapat mengganti warna tapi harus disertakan p[0] p dan indexnya seperti dibawah
// p[0].style.backgroundColor = 'lightgrey';
// menggunakan looping untuk membuat semua paragraf berwarna
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'grey';
}
// mengganti ukuran dari font h1 menjadi lebih besar
const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px';

// document.getElementsByClassName()
//  -> HTMLCollection
// mengubah nama dari paragraf menggunakan js
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dari javascript';

// terdapat 2 cara menggunakan yang atas atau yang bawah

// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'ini diubah dari javascript';