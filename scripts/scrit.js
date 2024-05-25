const menu_button_element = document.getElementById("menu_button");
const menu_element = document.getElementById("menu");
menu_button_element.addEventListener("click", () => {
    if(!menuVisible){
        showMenu()
    } else{
        hideMenu()
    }
});

let menuVisible = false;

function hideMenu() {
  menu_element.classList.remove("slideMenuIn");
  menu_element.classList.add("slideMenuBack");
  menu_element.style.display = "block"

  menuVisible = false;

  return menuVisible;
}

function showMenu() {
  menu_element.classList.remove("slideMenuBack");
  menu_element.classList.add("slideMenuIn");
  menu_element.style.display = "block";

  menuVisible = true;

  return menuVisible;
}
