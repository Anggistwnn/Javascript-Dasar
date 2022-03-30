// DOM Traversal method
// parentNode = node
// parentElement = element
// nextSibling = node
// nextElementSibling = element
// previousSibling = node
// previousElementSibling = element

// event handling, menghapus card 
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function () {
//     card.style.display = 'none';
// })
// -----------------------------------------------------------------------
// DOM Traversal
// menangkap elementnya
// const close = document.querySelectorAll('.close');
// menggunakan looping [i] dalam menangkap semua card
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function () {
//         // dom traversal terdapat pada parentElement
//         // close[i].parentElement.style.display = 'none';

//     });
// }
// -----------------------------------------------------------------------------
// menggunakan forEach
// el berguna untuk mengambil 1 element sama dengan mengambil close[i];
// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
// menargetkan element yang akan di hapus yaitu semua yang ada pada cardnya
// jika tidak menggunakan parentElement hanya akan menghilangkan si tombol x nya saja 
// e.target.parentElement.style.display = 'none';
// Prevent Default adalah untunk menghentikan aksi default dari sebuah element. dalam praktek ini saya menghilangkan aksi default dari href yang ditempatkan pada button close
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });



// const nama = document.querySelector('.nama');
// mengambil parent(ibu) dari element nama yaitu card
// console.log(nama.parentElement);
// mengambil parent kakek dari element nama yaitu container
// console.log(nama.parentElement.parentElement);
// mencari sodara kandung dari parent(keluarga 'card') yang sama milik (nama)
// jika menggunakan .nextSibling yang diambil adalah nodenya (enter) pun akan dibaca olehnya oleh karna itu kita harus menggunakan .nextElementSibling yang pasti akan menggambil element bukan node
// console.log(nama.nextElementSibling);
// ----------------------------------------------------

// event bubbling sama dengan prevent tetapi jika bubbling berlaku untuk semua element pembungkusnya
// pada function dibawah adalah contohnya, dan akan terus berlaku sampai element pembungkusnya habis /body
// const card = document.querySelectorAll('.card');

// card.forEach(function (card) {
//     card.addEventListener('click', function (e) {
//         alert('Okee!')
//     });
// });
// membuat event bubbling ini tidak berfungsi guna untuk element closenya, menggunakan stoppropagation diletakan di akhir script

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style = 'none';
    }
})