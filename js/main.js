function openSite(btn_num) {
    switch(btn_num) {
        case 1: {
            window.open("index.html");
            document.getElementById("btn_nav_home").style.color = 'lightskyblue';
            changebuttonstyle(1);
        }
        case 2: {
            window.open("features.html");
            document.getElementById("btn_nav_home").style.color = 'lightskyblue';
            changebuttonstyle(2);
        }
        case 3: {
            window.open("price.html");
            document.getElementById("btn_nav_home").style.color = 'lightskyblue';
            changebuttonstyle(3);
        }
        case 4: {
            window.open("docu.html");
            document.getElementById("btn_nav_home").style.color = 'lightskyblue';
            changebuttonstyle(4);
        }
        case 5: {
            window.open("contact.html");
            document.getElementById("btn_nav_home").style.color = 'lightskyblue';
            changebuttonstyle(5);
        }
    }
}

function changebuttonstyle(btn_style) {
}