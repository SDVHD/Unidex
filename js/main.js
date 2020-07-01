

function changebuttonstyle() {
    if (document.getElementsByClassName("nav_button").value = "home") {
        document.getElementById("btn_nav_home").style.color = 'lightskyblue';
    }
    else if (document.getElementsByClassName("nav_button").value = "features") {
        document.getElementById("btn_nav_features").style.color = 'lightskyblue';
    }
    else if (document.getElementsByClassName("nav_button").value = "price") {
        document.getElementById("btn_nav_price").style.color = 'lightskyblue';
    }
    else if (document.getElementsByClassName("nav_button").value = "docu") {
        document.getElementById("btn_nav_Docu").style.color = 'lightskyblue';
    }
    else if (document.getElementsByClassName("nav_button").value = "contact") {
        document.getElementById("btn_nav_contact").style.color = 'lightskyblue';
    }
}