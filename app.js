const hamburgerEl = document.querySelector(".hamburger")
const navEl= document.querySelector(".nav")
const contentEl= document.querySelector(".content")
const hamburgerSpanEl= document.querySelectorAll("span")

function toggleNav(){
  hamburgerEl.addEventListener("click", function(){
    navEl.classList.toggle("open")
    contentEl.classList.toggle("shift")
    animate()
  })
}

function animate(){
  for(let i in hamburgerSpanEl){
    hamburgerSpanEl[i].classList.toggle("change")
  }
}

toggleNav()


