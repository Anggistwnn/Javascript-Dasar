// DOM Selection (Manipulasi Element)
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

// const p = document.querySelectorAll('p');
// // dibawah menggunakan looping 
// for (i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }
// tanpa looping selector paragraf mana yang akan di ubah warna nya menggunakan index 
// p[2].style.backgroundColor = 'lightblue';

// ATTRIBUTE
// menambahkan attribute pada tag dan selector
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'anggi');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// menghapus attribute yang sudah digunakan menggunakan remove.Attribute('..');
// CLASSLIST
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');

// p2.classList.toggle('label');
// menambahkan juga, namun dapat mengetahui apakah class yang ditambahkan sudah ada atau belum, jika sudah'false' jika belum 'true'
// code dibawah bisa digunakan untuk tombol tema dark and light. dengan catatan sudah memiliki class pada style.css('biru-muda');
// document.body.classList.toggle('biru-muda');

// p2.classList.add('label');
// p2.classList.remove('label');
// digunakan untuk mencari class yang ada yang dihitung dengan index
// p2.classList.item(1);
// digunakan untuk menanyakan apakah ada class dengan nama class (true or false)
// p2.classList.contains(1); 

// DOM Manipulation Part 2
// membuat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// menyimpan yang diatas kedalam element baru, karna mereka belum terimplementasi pada tampilan hanya ada pada memory saja
pBaru.appendChild(teksPBaru);
// simpan PBaru di akhir section A, menggunakan code diatas

// code dibawah menambahkan item diatara item pada section B, mengguanakan insert before yang juga menggunakan pseudo class css nth-child 
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// menghilangkan element menggunakan removeChild
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//code dibawah mengganti p4 menjadi element baru menggunakan replaceChild
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksh2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksh2Baru);

sectionB.replaceChild(h2Baru, p4);