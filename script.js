//for menubar/navbar, making responsive
let menu_icon = document.getElementById("menu_icon");
let navlist = document.getElementById("navlist"); 
menu_icon.onclick = () => {
    navlist.classList.toggle("linkclose");
    navlist.classList.toggle("linkopen");
    if(navlist.className == "linkopen"){
        menu_icon.innerHTML = "\u00d7";
    }
    else{
        menu_icon.innerHTML = "☰";
    }
}
