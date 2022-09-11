// NAV TOGGLE

const menuBtn = document.querySelector(".bars");
const navShow = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navShow.classList.toggle("show");
});


window.addEventListener('scroll', () => {
  menuBtn.classList.remove("active");
  navShow.classList.remove("show");
})

//TRADE SECURELY ACTIVE CARD

const tradeCard = document.querySelectorAll(".trade-card");

tradeCard.forEach((tc) => {
  tc.addEventListener("click", () => {
    removeActiveClass();
    tc.classList.add("active");
  });
});

function removeActiveClass() {
    tradeCard.forEach((tc) => {
        tc.classList.remove('active')
    })
}



// AOS ANIMATION
AOS.init({
  offset : 200,
  duration : 1500
});



