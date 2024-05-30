const menu_button_element = document.getElementById("menu_button");
const menu_element = document.getElementById("menu");
const main_element = document.getElementById("main");

menu_button_element.addEventListener("click", () => {
  if (!menuVisible) {

    showMenu();
    
    
  } else {
    hideMenu();
   
  }
});

let menuVisible = false;

function waitingAnimationEnd(windowWidth) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if(windowWidth > 500){
        resolve("none");

      }else{
        
        resolve("block");
      }

    }, 400);

  })
}

async function resultFunction() {
  const result = await waitingAnimationEnd(window.innerWidth);
  menu_element.style.display = result;
}



function hideMenu() {
  menu_element.classList.remove("slideMenuIn");
  menu_element.classList.add("slideMenuBack");
  
  resultFunction();
  
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

function showHeaderBox(scrollPos) {
  const header_box_element = document.getElementById("conteiner-header");
  const menu_icon_element = document.getElementById("menu_button")
  if (scrollPos > 199) {
    header_box_element.style.opacity = "1";
  } else {
    header_box_element.style.opacity = "0";
  }

  if (scrollPos < 190) {
    menu_icon_element.display = "none";
    return;
  }

  menu_icon_element.display = "block";
}

let lastPos = 0;
let ticking = false;

document.addEventListener("scroll", () => {
  lastPos = window.scrollY;
  console.log(lastPos);

  if (!ticking) {
    window.requestAnimationFrame(() => {
      showHeaderBox(lastPos);
      ticking = false;
    });
  }
  ticking = true;
});

/* else {
  menu_button_element.addEventListener("click", () => {
    if (menu_element.style.display === "block") {
      menu_element.classList.remove("slideMenuIn");
      menu_element.classList.add("slideMenuBack");
      menu_element.style.display = "block";
    } else {
      menu_element.classList.remove("slideMenuBack");
      menu_element.classList.add("slideMenuIn");
      menu_element.style.display = "block";
    }
  }); */
