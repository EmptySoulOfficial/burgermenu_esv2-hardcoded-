//burgermenu_esv2 by Steve - Empty Soul [V 2.3 hardcode-version]

function bmenu_esv2_click() {
  //get all id's//
  // bml = burger menu line //
  let bml0 = document.getElementById("bml_0");

  let bm_button = document.getElementById("bmesv2_button");
  //OPEN THE MENU UI-> let mmenu = document.getElementById("main_menu");

  if (bm_button.classList.contains("bmactive")) {
    /*--close--*/
    bm_button.classList.remove("bmactive");
    bm_button.classList.add("bmactive_re");
    bml0.classList.remove("bml_color_open");
  } else {
    /*--open--*/
    bm_button.classList.add("bmactive");
    bm_button.classList.remove("bmactive_re");
    bml0.classList.add("bml_color_open");
  }
}
