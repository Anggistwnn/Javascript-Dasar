var a = 1
// talk about variable scope 

// Variable lokal
function tes(a) {
    console.log(a);
}

// variable global dengan var a diline 1
tes(a);
console.log(a);