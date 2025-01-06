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

const text2 = document.getElementById("text");
const btn3 = document.querySelector(".btn3");

btn3 &&
  btn3.addEventListener("click", function () {
    const findPlace = document.querySelector("#input2").value;
    if (findPlace === "" || findPlace === " " || findPlace.length <= 3) {
    } else if (text2.textContent.includes(findPlace)) {
      const res = text2.innerHTML.replaceAll(
        findPlace,
        `<span style = "background-color: yellow">${findPlace}</span>`
      );
      text2.innerHTML = res; // Update the DOM with the new content
    }
  });
// ============
// 4-masala:
/*Elementni yashirish va ko‘rsatish
  Vazifa: Sahifada bir nechta paragraflar bo‘lsin. "Yashirish" tugmasi bosilganda, barcha paragraflar yashiriladi. "Ko‘rsatish" tugmasi bosilganda, ular qayta ko‘rinadigan bo‘lsin.
    Ko‘rsatma:
      1. querySelectorAll yordamida barcha paragraflarni olish.
      2. style.displayni "none" yoki "block" qilib o‘zgartirish.
      3. Turli tugmalar uchun alohida click hodisalarini ishlatish.
 */
const allText = document.querySelectorAll(".text1");
const hideBtn = document.querySelector(".hide");
const showBtn = document.querySelector(".show");
hideBtn &&
  hideBtn.addEventListener("click", function () {
    allText.forEach((element) => {
      element.style.display = "none";
    });
  });

showBtn &&
  showBtn.addEventListener("click", function () {
    allText.forEach((element) => {
      element.style.display = "block";
    });
  });
// ============
// 5-masala:
/* Tugma bosilganda fon rangini o'zgartirish
    Vazifa: Sahifada bir nechta tugma joylashtirilgan bo‘lsin. Har bir tugma bosilganda butun sahifaning fon rangi o‘zgaradi. Tugmalar har xil ranglar uchun javob beradi (masalan: qizil, yashil, ko‘k).
      Ko‘rsatma:
        1. querySelectorAll orqali barcha tugmalarni olish.
        2. Tugmalarga click hodisasini ulash.
        3. Tugma bosilganda document.body.style.backgroundColor orqali rangni o‘zgartirish.
*/
const body = document.getElementById("body");
const btnRed = document.querySelector(".colorChangerRed");
const btnGreen = document.querySelector(".colorChangerGreen");
const btnBlue = document.querySelector(".colorChangerBlue");

btnRed &&
  btnRed.addEventListener("click", function () {
    body.style.backgroundColor = "red";
  });
btnGreen &&
  btnGreen.addEventListener("click", function () {
    body.style.backgroundColor = "green";
  });
btnBlue &&
  btnBlue.addEventListener("click", function () {
    body.style.backgroundColor = "blue";
  });
// ============
// 6-masala:
/* Belgilangan matnni kattalashtirish
    Vazifa: Sahifada matnlar yozilgan bo‘lsin. Foydalanuvchi matn ustiga bosganda uning shrift o‘lchami kattalashadi.
      Ko‘rsatma:
        1. querySelectorAll orqali barcha matnlarni olish.
        2. Har bir elementga click hodisasini ulash.
        3. style.fontSizeni o‘zgartirib, matnni kattalashtirish.
 */
const tittles = document.querySelectorAll(".tittles");
let fontSize = 24;
let secondFontSize = fontSize;
tittles.forEach((tittle) => {
  tittle.style.fontSize = 24 + "px";
  tittle.dataset.action = "+";
  tittle.addEventListener("click", function ({ target }) {
    const result = target.style.fontSize.split("");
    result.pop();
    result.pop();

    const r = Number(result.join(""));

    if (target.dataset.action === "+") {
      target.style.fontSize = r * 2 + "px";
      if (target.style.fontSize === "96px") {
        target.dataset.action = "-";
      }
    } else if ((target.dataset.action = "-")) {
      target.style.fontSize = r / 2 + "px";
      if (target.style.fontSize === "24px") {
        target.dataset.action = "+";
      }
    }
  });
});
// ============
// 7-masala:
/*  Ko‘zgu (mirror) effekti
  Vazifa: Sahifada bir input maydoni va bir matn ko‘rsatiladigan bo‘sh joy bo‘lsin. Foydalanuvchi inputga nimadir yozganda, yozilgan matn real vaqt rejimida bo‘sh joyga ko‘chib ko‘rsatiladi.
    Ko‘rsatma:
      1. Input maydonini querySelector orqali olish.
      2. input hodisasini ulash.
      3. textContent yoki innerText yordamida inputdagi qiymatni boshqa elementga yozib borish.
*/
const input1 = document.querySelector("#input3");
const placeToPrintText = document.querySelector("#placeHol");

input1 &&
  input1.addEventListener("input", function () {
    placeToPrintText.textContent = this.value;
  });
// ============
// 8-masala:
/*  Parolni ko‘rsatish/yashirish
      Vazifa: Foydalanuvchiga parol maydoni va "Ko‘rsatish/Yashirish" tugmasi ko‘rsatiladi. Tugma bosilganda parol ko‘rinadigan yoki yashirin holatga o‘tadi.
        Ko‘rsatma:
        1. querySelector orqali input va tugmani olish.
        2. Tugma bosilganda inputning type xususiyatini text yoki passwordga o‘zgartirish
*/
const openPass = document.getElementById("openPass");
const closePass = document.getElementById("closePass");
const input2 = document.getElementById("input4");

openPass &&
  openPass.addEventListener("click", function () {
    openPass.style.display = "none";
    closePass.style.display = "inline-block";
    input2.type = "text";
  });

closePass &&
  closePass.addEventListener("click", function () {
    closePass.style.display = "none";
    openPass.style.display = "inline-block";
    input2.type = "password";
  });

// ============
// 9-masala:
/*  Elementni boshqarish
      Vazifa: Sahifada bitta kvadrat shakl bo‘lsin. Foydalanuvchi kvadratni yuqoriga, pastga, chapga yoki o‘ngga ko‘chirish uchun tugmalardan foydalanadi.
        Ko‘rsatma:
        1. Kvadratni olish uchun querySelectordan foydalanish.
        2. Har bir yo‘nalish tugmasi uchun click hodisasini ulash.
        3. Kvadratning joylashuvini style.marginLeft, style.marginTop . yordamida o‘zgartirish. */
const square = document.querySelector(".square");
const arrows = document.querySelector(".arrows");

arrows &&
  arrows.addEventListener("click", function ({ target }) {
    square.style.display = "flex";
    square.style.justifyContent = "center";
    square.style.alignItems = "center";
    if (target.textContent === "left") {
      square.style.justifyContent = "flex-start";
    } else if (target.textContent === "up") {
      square.style.alignItems = "flex-start";
    } else if (target.textContent === "down") {
      square.style.alignItems = "flex-end";
    } else if (target.textContent === "right") {
      square.style.justifyContent = "flex-end";
    }
  });
// ============
// 10-masala:
/*  Tasodifiy rasm ko'rsatish
      Vazifa: Sahifada "Tasodifiy rasm ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda tasodifiy rasm (oldindan berilgan URL ro‘yxatidan) sahifada ko‘rsatiladi.
        Ko‘rsatma:
        1. Rasm URL’larini massivda saqlash.
        2. Math.random yordamida tasodifiy rasmni tanlash.
        3. Rasm elementini yaratish yoki mavjud elementga src o‘zgartirish orqali tasvirni yangilash. */
const refreshBtn = document.querySelector("#refreshBtn");
const img = document.querySelector("#img");
const stuckImg = [
  "https://icons.iconarchive.com/icons/faychen521/kitchen/128/filetype-image-png-icon.png",
  "https://icons.iconarchive.com/icons/hopstarter/scrap/128/Picture-PNG-icon.png",
  "https://icons.iconarchive.com/icons/george-ui/ancient-legend/128/Filetype-PNG-icon.png",
  "https://icons.iconarchive.com/icons/franksouza183/fs/128/Mimetypes-png-icon.png",
  "https://icons.iconarchive.com/icons/ampeross/qetto/128/png-icon.png",
  "https://icons.iconarchive.com/icons/graphicloads/folded/128/png-page-folded-icon.png",
  "https://icons.iconarchive.com/icons/treetog/junior/128/document-picture-png-icon.png",
  "https://icons.iconarchive.com/icons/graphicloads/folded/128/png-page-folded-icon.png",
  "https://icons.iconarchive.com/icons/gakuseisean/aire/128/PNG-File-icon.png",
  "https://icons.iconarchive.com/icons/robsonbillponte/sinem/128/File-PNG-icon.png",
];

refreshBtn &&
  refreshBtn.addEventListener("click", function () {
    let randomImg = Math.trunc(Math.random() * 10);
    img.src = `${stuckImg[randomImg]}`;
    console.log(randomImg);
  });
// ============
// 11-masala:
/* Paragraflarni yashirish va ko‘rsatish
Vazifa: Sahifada bir nechta paragraflar bo‘lsin. Har bir paragraf yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda faqat o‘sha paragraf yashiriladi.
Ko‘rsatma:
querySelectorAll orqali barcha paragraflarni olish.
Har bir paragraf uchun "Yashirish" tugmasi yaratib, ulash.
Tugma bosilganda tegishli paragrafni style.display = "none" qilish.
 */

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
