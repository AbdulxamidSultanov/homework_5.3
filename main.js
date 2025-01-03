// ============
// 1-masala:
/*
1. Tugma bosilganda rangni o'zgartirish

    Vazifa: HTML sahifasida bir nechta matn yozilgan bo‘lsin. "Matn rangini o'zgartirish" tugmasi bosilganda, barcha matnning rangi tasodifiy rangga o  ‘zgartirilsin.

        Ko‘rsatma:
        1. getElementById yoki querySelectorAll yordamida matnni olish.
        2. Tugma bosilganda rangni o‘zgartirish uchun style.colordan foydalanish.
        3. Rangni tasodifiy olish uchun Math.random()ni ishlatish.
*/
const firstWords = document.getElementById("1vazifa");
const btn = document.querySelector(".btn");

btn &&
  btn.addEventListener("click", function () {
    let x = Math.trunc(Math.random() * 256);
    let y = Math.trunc(Math.random() * 256);
    let z = Math.trunc(Math.random() * 256);
    const color = "rgb(" + x + ", " + y + ", " + z + ")";
    firstWords.style.color = color;
  });
// ============
// 2-masala:
/*
Inputdagi qiymatni clipboardga nusxalash

    Vazifa: Foydalanuvchi input maydoniga matn yozadi. "Nusxa olish" tugmasi bosilganda, inputdagi qiymat clipboardga nusxalanadi va sahifada xabar ("Matn nusxalandi!") chiqariladi.

        Ko‘rsatma:
        1. querySelector orqali input va tugmani olish.
        2. Tugma bosilganda navigator.clipboard.writeText yordamida clipboardga yozib olish.
        3. Xabar chiqarish uchun DOM element yaratish va qo‘shish.

*/
const input = document.getElementById("input");
const btn2 = document.querySelector(".btn2");
const createElement = document.querySelector(".newElement");

btn2 &&
  btn2.addEventListener("click", function () {
    const text = input.value;
    navigator.clipboard.writeText(text);
    alert("Nusxa olindi");
    createElement.textContent = text;
  });

// ============
// 3-masala:
/* Qidiruv natijasini belgilash

    Vazifa: Sahifada matn yozilgan bo‘lsin. Foydalanuvchi qidiruv maydoniga so‘z kiritadi va "Qidirish" tugmasini bosadi. Sahifada shu so‘z bo‘lsa, uning orqa foni sariq rangga bo‘yaladi.

    Ko‘rsatma:
    1. querySelector orqali matn va input maydonini olish.
    2. Tugma bosilganda innerHTML orqali matnni bo‘yalgan elementlarga ajratish (masalan, <span style="background-color: yellow">).
    3. replace() funksiyasidan foydalanish.
*/

const text2 = document.getElementById("text")
const findPlace = document.querySelector("input2")
const btn3 = document.querySelector("btn3")

btn3 && btn3.addEventListener("click", function() {
  const strToArr = text2.split(" ")
  strToArr.forEach(arr => {
    if(findPlace == arr){
      console.log(arr)
    }else{
      console.log(arr)
    }
  })
  strToArr.join('')
})


// ============
// 4-masala:
//

// ============
// 5-masala:
//

// ============
// 6-masala:
//

// ============
// 7-masala:
//

// ============
// 8-masala:
//

// ============
// 9-masala:
//

// ============
// 10-masala:
//

// ============
// 11-masala:
//

// ============
// 12-masala:
//

// ============
// 13-masala:
//

// ============
// 14-masala:
//

// ============
// 15-masala:
//

// ============
// 16-masala:
//

// ============
// 17-masala:
//

// ============
// 18-masala:
//

// ============
// 19-masala:
//

// ============
// 20-masala:
//

// ============
// 21-masala:
//

// ============
// 22-masala:
//

// ============
// 23-masala:
//

// ============
// 24-masala:
//

// ============
// 25-masala:
//

// ============
// 26-masala:
//

// ============
// 27-masala:
//

// ============
// 28-masala:
//

// ============
// 29-masala:
//

// ============
// 30-masala:
//

// ============
// 31-masala:
//

// ============
// 32-masala:
//

// ============
// 33-masala:
//

// ============
// 34-masala:
//

// ============
// 35-masala:
//

// ============
// 36-masala:
//

// ============
// 37-masala:
//

// ============
// 38-masala:
//

// ============
// 39-masala:
//

// ============
// 40-masala:
//

// ============
// 41-masala:
//

// ============
// 42-masala:
//

// ============
// 43-masala:
//

// ============
// 44-masala:
//

// ============
// 45-masala:
//

// ============
// 46-masala:
//

// ============
// 47-masala:
//

// ============
// 48-masala:
//

// ============
// 49-masala:
//

// ============
// 50-masala:
//

// ============
// 51-masala:
//

// ============
// 52-masala:
//

// ============
// 53-masala:
//

// ============
// 54-masala:
//

// ============
// 55-masala:
//

// ============
// 56-masala:
//

// ============
// 57-masala:
//

// ============
// 58-masala:
//

// ============
// 59-masala:
//

// ============
// 60-masala:
//
