//Latihan #1
alert('halo world')

let fullName = "Aan"
fullName = "Fian"
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br> <br>')

console.log('statement')

//Latihan #2
let x = 10
if (true) {
    let x = 20
    console.log("Nilai x didalam blok: ", x)
}
console.log("Nilai x diluar blok: ", x)

//Latihan #3
let desimal = 20.5
let bulat = 20


document.writeln(desimal)
document.writeln('<br>')
document.writeln(bulat)
document.writeln('<br>')
document.writeln('20.5 + 20 = ', desimal+bulat)
document.writeln('<br> <br>')

//Latihan #4
let bilangan = 9
let  string = 'a'

document.writeln(bulat/0)
document.writeln('<br>')
document.writeln(string/5)
document.writeln('<br> <br>')

//Latihan #5
let bigint = 198238172398129412849186249612n
document.writeln(bigint)
document.writeln('<br> <br>')

//Latihan #5
let admin = true
let perbandingan = 15>15
document.writeln(perbandingan)
document.writeln('<br> <br>')

//Latihan #6
let bocil
document.writeln(bocil)
document.writeln('<br> <br>')

//Latihan #7
let a = null
document.writeln(a)
document.writeln('<br> <br>')

//Latihan #8
let employee = Symbol('Joko')
console.log(employee)
console.log(employee.description)

//Latihan #9
let karyawan = {
    nama: "john",
    umur: 30,
    pekerjaan: "web developer",
    statusPernikahan: false,
}
document.writeln('Namaku ', karyawan.nama,' dan saya ', karyawan.pekerjaan)
document.writeln('<br> <br>')

//Latihan #10
let v = false
let strings = String(v)
alert(typeof strings)

//Latihan #11
let str = "123"
let nbr = Number(str)
alert(typeof nbr)

//Latihan #12
alert(Boolean(0))
alert(Boolean(1))

//Latihan #13
let c = 5
let d = 7

console.log(c+d)
console.log(c-d)
console.log(c/d)
console.log(c*d)
console.log(c**d)
console.log(c%d)

console.log(c>d)
console.log(c<d)
console.log(c==d)
console.log(c!=d)

console.log(c&&d)
console.log(c||d)
console.log(!c)

console.log(c == d ? 'Sama' : 'Tidak Sama')

//Latihan #14
let strg = prompt("hai")
alert('Jawaban Anda: ' + strg)

//Latihan #15
let tring = confirm("Apakah kamu mau dengaku??")
tring ? alert("jawaban anda mau") : alert("Jawaban anda tidak mau")

//Latihan #16
let g = confirm("Apakah kamu mau??")
if (g) {
    alert("Iya")
}else{
    alert("Tidak")
}

//Latihan #17
let n = prompt("1+1 = ??")
if (n == 2) {
    alert("Betul")
}else if (n==1){
    alert("salah")
}else{
    alert("salah")
}

//Latihan #18
let l = prompt("warna yg kamu sukai?")
switch (l) {
    case "Blue":
        alert("I Love Blue")
        break;

    case "Red" :
        alert("I Love Red")
        break

    default:
        alert("YNTKTS")
        break;
}

//Latihan #18
for (let i = 1; i < 5; i++) {
    document.writeln(i)
    document.write('<br>')
}

//Latihan #19
let e = 1

while (e<5) {
    document.writeln(e)
    document.writeln("<br>")
    e++
}

//Latihan #20
let y = 1
do {
    document.writeln(y)
    document.writeln('<br>')
    y++
} while (y<5);

//Latihan #21
for (let z = 0; z < 5; z++) {
    if (z == 3) {
        break
    }
    document.writeln(z)
    document.writeln('<br>')
}

//Latihan #22
for (let z = 0; z < 5; z++) {
    if (z == 3) {
        continue
    }
    document.writeln(z)
    document.writeln('<br>')
}