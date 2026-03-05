function toggleMenu (){
    const menu=document.querySelector (".menu-links");
    const icon=document.querySelector (".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
}