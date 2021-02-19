//burgermenu_esv2 by EMpty SOul [V 2.2 hardcode-version]




function bmenu_esv2_click()
{
//get all id's//
// bml = burger menu line //
let bml0 = document.getElementById("bml_0");


let bm_button = document.getElementById("bmesv2_button");
//OPEN THE MENU UI-> let mmenu = document.getElementById("main_menu");


if (bm_button.classList.contains("bmactive")) {
/*--close--*/
bm_button.classList.remove("bmactive");
bm_button.classList.add("bmactive_re");
$( ".burgermenu_line" ).removeClass( "bml_color_open" );

}else{
/*--open--*/
bm_button.classList.add("bmactive");
bm_button.classList.remove("bmactive_re");
$('html').css("overflow","hidden");
$( ".burgermenu_line" ).addClass( "bml_color_open" );
}
}





