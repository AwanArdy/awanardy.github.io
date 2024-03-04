// Memanggil emailjs
// (function () {
//   emailjs.init({
//     publicKey: "sFe0hKh4R5aEoM3O0",
//   });
// })();

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Dark mode menyesuaikan sistem bawaan
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.addEventListener(
    "contextmenu",
    function (e) {
      if (e.target.nodeName === "IMG") {
        e.preventDefault();
      }
    },
    false
  );
});

// mengirim email
function sendMail() {
  emailjs.sendForm("service_96crtzn", "template_s6k4uyd", "#sendMessage").then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Pesan terkirim!");
    },
    (error) => {
      console.log("FAILED...", error);
      alert("Pesan tidak terkirim!");
    }
  );
}
