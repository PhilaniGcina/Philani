function toggleMenu(){
    const menu = document.querySelector(".Menu-links");    
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}