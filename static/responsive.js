let navLogo = document.querySelector(".hamburger-icon")
let backImg = document.querySelector(".sideBar-back-img")
let sideBar = document.querySelector(".side-bar")
let body = document.body



navLogo.addEventListener("click", () => {
    if (window.innerWidth <= 796) {
        sideBar.style.left = "0",
            body.style.overflowY = "hidden"
    }

})

backImg.addEventListener("click", () => {
    sideBar.style.left = "-60vw",
        body.style.overflowY = "auto"

})

