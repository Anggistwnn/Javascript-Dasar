// document.writeln("Hello World!");
// document.writeln("<textarea cols='100' rows='10'");

// Mengakses Nama variable
// jangan lagi menggunakan var karna sudah diperbaharui di ES6
//

// let mahasiswa1 = "Roudohh"
// let mahasiswa2 = "Anggi Setiawan"


// document.writeln(mahasiswa1);
// document.writeln("</br>");
// document.writeln(mahasiswa2);
// document.writeln("</br>");
// document.writeln(mahasiswa1);
// document.writeln("</br>");
// document.writeln(mahasiswa2);
// document.writeln("</br>");
// document.writeln(mahasiswa1);
// document.writeln("</br>");
// document.writeln(mahasiswa2);
// document.writeln("</textarea>")


// const merupakan deklarasi variable yang tidak dapat diganti2, yang memiliki arti juga constant
// const belajar = "Belajar Adalah cara saya untuk bertahan hidup";
// belajar = "malas belajar";

// operasi aritmatika pada JS

// let result = 1 + 2;
// document.writeln(`<p> 1 + 2 = ` + result + ` </p>`)
// let originalResult = result;

// result = result - 1;
// document.writeln(`<h1>` + originalResult + ` - 1 = ` + result + `</h1>`);
// originalResult = result;

// result = result + 3;
// document.writeln(`<h2>` + originalResult + ` + 3 = ` + result + `</h2>`)

// TANPA MENGUNAKAN VARIABLE ORIGINAL RESULT YANG DIGUNAKAN UNTUK MENAMPUNG HASIL DARI PROSES ARITMATIKA SEBELUMNYA
// let result = 1 + 2; //3
// document.writeln(`<h1>` + `1 + 2 = ` + result + ` </h1> `)
// // let originalResult = result;

// //menggunakan augmented assignment
// result -= 1; //2
// document.writeln(`<h2>` + `3 - 1 = ` + result + `</h2>`);

// result = result + 2 //4
// document.writeln(`<h1>` + `2 + 2 =` + result + `</h1>`);
// originalResult = result;

// result = result + 2 //6
// document.writeln(`<h1>` + originalResult + `+ 2 =  ` + result + `</h1>`);
// originalResult = result;

// result = result + 2 //8
// document.writeln(`<h1>` + originalResult + `+ 2 =  ` + result + `</h1>`);
// originalResult = result;

// result = result * 2 //16
// document.writeln(`<h1>` + originalResult + ` x 2 =  ` + result + `</h1>`);
// originalResult = result;


// Operasi Unary
// let result = 1;

// result = 1;
// document.writeln(`<p>` + result + `</p>`);

// result--; //result - result = 1; result -= 1; 0
// document.writeln(`<p>` + result + `</p>`);

// result++; //result + result = 1; result += 1; 1
// document.writeln(`<p>` + result + `</p>`);

// result = -result; // -1
// document.writeln(`<p>` + result + `</p>`)

// result++; //+1
// document.writeln(`<p>` + result + `</p>`)

// KODE OPERASI PERBANDINGAN
// let result = 5 == "5";
// document.writeln(`<p>  result  </p>`)

// result = 5 === "5";
// document.writeln(`<p>` + result + `</P>`)

// result = 5 < 10;
// document.writeln(`<p>` + result + `</p>`)

// result = 5 > 10;
// document.writeln(`<p>` + result + `</p>`)

// OPERATOR LOGIKA
// const nilaiUjian = 70;
// const nilaiAbsensi = 90;

// const lulusUjian = nilaiUjian > 75;

// const lulusAbsensi = nilaiAbsensi > 75;

// const lulus = lulusUjian || lulusAbsensi;
// document.writeln(lulus);

// // consol
// console.debug(lulus);
// console.info(lulus);
// console.warn(lulus);
// console.error(lulus);

// STRING TEMPLATE 1

const name = 'Anggi Setiawan';
const firstName = "Anggi";
const lastName = "Setiawan"

const template = `name: ${name}`;
console.log(template);

// STRING TEMPLATE 2

const nilai = 70;

const template2 = `name: ${firstName}, lulus: ${nilai > 75}`
console.log(template2);

// STRING TEMPLATE 3



