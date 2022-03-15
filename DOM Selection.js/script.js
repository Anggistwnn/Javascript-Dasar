// DOM Selection
// mencari elemen html berdasarkan id

// document.getElementById()

// menggunakan variable judul dan menggunakan parameter apa saja bisa(disini menggunakan judul)
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Anggi Setiawan';
// judul.style.backgroundColor = 'lightgreen';
// const judul = document.getElementById('judul');
// mengganti warna pada font judul
// judul.style.color = 'pink';
// mengubah warna pada background judul
// judul.style.backgroundColor = 'grey';
// mengganti judul dengan nama 
// judul.innerHTML = 'Anggi Setiawan';

// document.getElementsByTagName()
//  -> HTMLCollection

// const p = document.getElementsByTagName('p');
// tanpa menggunakan looping dapat mengganti warna tapi harus disertakan p[0] p dan indexnya seperti dibawah
// const p = document.getElementsByTagName('p');
// p4[1].style.backgroundColor = 'lightgrey';
// menggunakan looping untuk membuat semua paragraf berwarna
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'grey';
// }
// mengganti ukuran dari font h1 menjadi lebih besar
// const h1 = document.getElementsByTagName('h1')[0]
// h1.style.fontSize = '50px';

// document.getElementsByClassName()
//  -> HTMLCollection

// const p = document.getElementsByClassName('p1');

// for (i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'pink'
// }


// mengubah nama dari paragraf menggunakan js
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari javascript';

// terdapat 2 cara menggunakan yang atas atau yang bawah

// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'ini diubah dari javascript';

// document.querySelector() -> Element / jika menggunakan code pada line 49 itu hanya mengganti dari paragraf yang paling atas saja.

// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'lightgreen';


// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// // pada code diatas child(2) dimana ia menggunakan index dalam selectornya namun indexnya dimulai dari 1 bukan 0.

// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'ini diubah menggunakan JS';

const p = document.querySelectorAll('p');
// dibawah menggunakan looping 
for (i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}
// tanpa looping selector paragraf mana yang akan di ubah warna nya menggunakan index 
// p[2].style.backgroundColor = 'lightblue';