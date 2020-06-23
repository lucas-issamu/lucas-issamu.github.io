let checkin = 0;

function dark_theme(){
    let change = document.getElementById("dark_mode");
    change.classList.toggle('dark_style');
    checkin++;
    sessionStorage.setItem("darktheme", "true");
    if(checkin > 1){ //0 = light, 1 = dark
        checkin = 0;
        sessionStorage.setItem("darktheme", "false");
    }
    //console.log(sessionStorage.getItem("dark_theme"));
    //console.log(checkin);
}

function check_theme(){
   if(sessionStorage.getItem("darktheme") == "true")
    dark_theme();
}
