let openTopBarMenu = 0;
function slide(){
    let topbarmenu = document.getElementsByClassName("topbarmenu");
    let list = document.getElementsByClassName("list");
    for (let i = 0; i < topbarmenu.length; i++) {
        if (openTopBarMenu == 0) {
            if (screen.width <= 768) {
                topbarmenu[i].style.width = "60%";
            }
            else{
                topbarmenu[i].style.width = "30%";
            }
            list[i].style.display = "inline";
            openTopBarMenu = 1;
        }
        else{
            topbarmenu[i].style.width = "0%";
            list[i].style.display = "none";
            openTopBarMenu = 0;
        }
    }
}
