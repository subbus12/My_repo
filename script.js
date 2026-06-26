// Correct password
const correctPassword = "loveyousweetheart";

function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === correctPassword) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainPage").style.display = "block";

        // Play background music
        const music = document.getElementById("bgmusic");
        if (music) {
            music.play().catch(() => {});
        }

        startHearts();
    } else {
        document.getElementById("error").innerHTML =
        "❌ Oops! This surprise is only for Satheesh ❤️";
    }
}

function showSurprise() {
    document.getElementById("surprise").style.display = "block";
    alert("🎉 Happy Birthday Satheesh! ❤️");
}

// Floating hearts
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.transition = "transform 6s linear, opacity 6s";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(-120vh)";
            heart.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 500);
}
const letter = `To My Love, Satheesh ❤️

En life-la naan nenachae paakkadha nerathula nadandha romba azhagana blessing nee en life-la vandhadhu dha. 💋💎

Un sirippu, un care, nee en mela vachirukka love... idhellam dhaan en life-ah complete pannudhu. 🥹❤️‍🩹

Nee eppovum santhoshama, healthy-ah, success-oda irukkanum. 💋🥰

Un dreams ellam seekirame nijamaaganum, un mugathula irukkura smile oru naalum marakkoodadhu. 😌💌

Enakku nee eppovum en favourite person, en safe place, en happiness. 🤌🏻💗

My all-time wish namma rendu peroda love ippadiye lifetime strong-ah irukkanum. 🫂💯

Un kooda innum neraya birthdays celebrate pannanum. 🫳🏻🧿

Thank you for coming into my life.

By being with me, you've made the dreams I once longed for come true. 🖖🏻🥹

Once again...

Happy Birthday, My Boy, My Man, My Everything. 👑❤️

I love you so much, and I'll always be by your side. 🌎🫀

Forever Yours,

Suba ❤️`;

let index = 0;

function typeLetter(){

const area = document.getElementById("typing");

if(!area) return;

if(index < letter.length){

area.innerHTML += letter.charAt(index);

index++;

setTimeout(typeLetter,45);

}

}

window.onload = () =>{

typeLetter();

};