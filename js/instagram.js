let sel = document.getElementById("sel")
let link = document.getElementById("link")
let img = document.getElementById("img")


sel.addEventListener("change", ()=>{
  
  if (sel.value == "Dark") {
    link.setAttribute("href", "/css/instagram/instagram-dark.css")
    img.setAttribute("src", "https://www.instagram.com/static/images/web/logged_out_wordmark-dark-2x.png/e56785a5ceab.png")
  } if (sel.value == "Light") {
    link.setAttribute("href", "/css/instagram/instagram.css")
    img.setAttribute("src", "https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png")
  }
})
