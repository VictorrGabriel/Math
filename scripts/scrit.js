const menu_button_element = document.getElementById("menu_button");

menu_button_element.addEventListener("click", () => {
    const menu_element = document.getElementById("menu");

    let menuVisibility = Boolean(menu_element.style.display === "none")

    if(menuVisibility){
        menu_element.style.display = "block"
    } else {
        menu_element.style.display = "none"
    }
})