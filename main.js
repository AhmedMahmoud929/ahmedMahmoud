// =====================  NAVBAR =====================
// for desktop
let allLinks = Array.from(
    document.querySelectorAll("#mainNav .container #menu a")
);
let allLinksPhone = Array.from(
    document.querySelectorAll("#navPhone #menu a")
);
resetBtns = (id) => {
    allLinks.forEach((e) => {
        e.classList.remove("active")
    });
    document.getElementById(id).classList.add("active");
    if (id == "link1") {
        window.scrollTo(0, 0);
    }
    if (id == "link2") {
        window.scrollTo(0, 662);
    }
    if (id == "link3") {
        window.scrollTo(0, 1273);
    }
    if (id == "link4") {
        window.scrollTo(0, 2805);
    }
    if (id == "cntct") {
        window.scrollTo(0, 4120);
    }
};
// for phone

function closeNavMenu() {
    menuIcon.style.transform = "scale(1)";
    document.querySelector("#menuIcon .up").style.transform = "rotate(0deg)";
    document.querySelector("#menuIcon .up").style.width = "40px";
    document.querySelector("#menuIcon .middle").style.opacity = "1";
    document.querySelector("#menuIcon .bottom").style.transform = "rotate(0deg)";
    document.querySelector("#menuIcon .bottom").style.width = "40px";
}

function openNavMenu() {
    menuIcon.style.transform = "scale(1.1)";
    document.querySelector("#menuIcon .up").style.transform = "rotate(45deg)";
    document.querySelector("#menuIcon .up").style.width = "32px";
    document.querySelector("#menuIcon .middle").style.opacity = "0";
    document.querySelector("#menuIcon .bottom").style.transform = "rotate(-45deg)";
    document.querySelector("#menuIcon .bottom").style.width = "32px";
}
// open navBar
let menuIcon = document.getElementById("menuIcon");
let navOpened = false;
menuIcon.onclick = () => {
        if (navOpened == false) {
            //icon
            openNavMenu();
            // nav
            navPhone.style.opacity = "1";
            navPhone.style.pointerEvents = "auto";
            navOpened = true;
        } else {
            //icon
            closeNavMenu();
            // nav
            navPhone.style.opacity = "0";
            navPhone.style.pointerEvents = "none";
            navOpened = false;
        }
    }
    // hide navBar
let navPhone = document.getElementById("navPhone")
phoneLinks = (id) => {
    navPhone.style.opacity = "0";
    navPhone.style.pointerEvents = "none";
    closeNavMenu();
    navOpened = false;
    // go
    if (id == "link1Phone") {
        window.scrollTo(0, 0);
    }
    if (id == "link2Phone") {
        window.scrollTo(0, 965);
    }
    if (id == "link3Phone") {
        window.scrollTo(0, 2088);
    }
    if (id == "link4Phone") {
        window.scrollTo(0, 3892);
    }

}

// =====================  PORTFLIO  =====================
let allBtn = document.getElementById("all");
let webBtn = document.getElementById("web");
let graphicBtn = document.getElementById("graphic");
let vectorBtn = document.getElementById("vector");
let allBtns = Array.from(document.querySelectorAll(".top .right a"));

let graphicSec = document.getElementById("DesSec");
let vectorSec = document.getElementById("VecSec");
let webSec = document.getElementById("WebSec");
let allSec = webSec.innerHTML + graphicSec.innerHTML + vectorSec.innerHTML;

// all function
allBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    webBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "block";
    webSec.style.display = "block";
    vectorSec.style.display = "block";
});
// vector function
vectorBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    webBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "none";
    webSec.style.display = "none";
    vectorSec.style.display = "block";

});
// graphic function
graphicBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    webBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "block";
    webSec.style.display = "none";
    vectorSec.style.display = "none";

});
// web function
webBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "none";
    webSec.style.display = "block";
    vectorSec.style.display = "none";

});

// =====================  Scrolling =====================
window.onscroll = () => {

    if (this.scrollY >= 590 && this.scrollY <= 1310) {
        document.getElementById("evo1").style.width = "305px";
        // progress of skills function
        setTimeout(() => {
            document.getElementById("evo2").style.width = "245px";
            setTimeout(() => {
                document.getElementById("evo3").style.width = "215px";
            }, 200);
        }, 200);
    } else {
        document.getElementById("evo1").style.width = "0";
        // progress of skills function
        setTimeout(() => {
            document.getElementById("evo2").style.width = "0";
            setTimeout(() => {
                document.getElementById("evo3").style.width = "0";
            }, 1);
        }, 1);
    }
    // [PC] // 
    // navbar
    if (this.scrollY < 350) {
        allLinks.forEach((e) => {
            e.classList.remove("active")
        });
        document.getElementById("link1").classList.add("active");
        // shadow
        document.getElementById("mainNav").style.boxShadow = "0px 0px 0px 0px #0007";

    }
    // for about section
    if (this.scrollY > 300) {
        allLinks.forEach((e) => {
            e.classList.remove("active")
        });
        document.getElementById("link2").classList.add("active");
        // shadow
        document.getElementById("mainNav").style.boxShadow = "0px 0px 20px 0px #0009"
    }
    // for services section
    if (this.scrollY > 1100) {
        allLinks.forEach((e) => {
            e.classList.remove("active")
        });
        document.getElementById("link3").classList.add("active");
    }
    // for portflio section
    if (this.scrollY > 2600) {
        allLinks.forEach((e) => {
            e.classList.remove("active")
        });
        document.getElementById("link4").classList.add("active");
    }
    // else
    if (this.scrollY > 3850) {
        allLinks.forEach((e) => {
            e.classList.remove("active")
        });
    }
    // [Phone] //
    if (this.scrollY < 460) {
        allLinksPhone.forEach((e) => {
            e.classList.remove("active")
        });
        document.getElementById("link1Phone").classList.add("active");
        // shadow
        document.getElementById("mainNav").style.boxShadow = "0px 0px 20px 0px #0002";

    }
    // for about section
    if (this.scrollY > 385) {
        allLinksPhone.forEach((e) => {
            e.classList.remove("active")
        });
        document.getElementById("link2Phone").classList.add("active");
        // shadow
        document.getElementById("mainNav").style.boxShadow = "0px 0px 20px 0px #0009"
    }
    // for services section
    if (this.scrollY > 1785) {
        allLinksPhone.forEach((e) => {
            e.classList.remove("active")
        });
        document.getElementById("link3Phone").classList.add("active");
    }
    // for portflio section
    if (this.scrollY > 3585) {
        allLinksPhone.forEach((e) => {
            e.classList.remove("active")
        });
        document.getElementById("link4Phone").classList.add("active");
    }
    // else
    if (this.scrollY > 5385) {
        allLinksPhone.forEach((e) => {
            e.classList.remove("active")
        });
    }
    // arow
    if (this.scrollY >= 900) {
        document.querySelector("#arrowHome i").style.right = "10px";
    } else {
        document.querySelector("#arrowHome i").style.right = "-40px";
    }
};

// ===================    Type Writing   ======================

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-End Developer", "Graphic Designer", "Vector Artist", "2D Animator"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// 
// 
// 
// 
//

let bgLoading = document.getElementById("bgLoading")
let bgLoadingCont = document.querySelector("#bgLoading .loading-container")
window.onload = () => {
    setTimeout(function() {
        bgLoadingCont.style.opacity = "0";
        bgLoading.style.pointerEvents = "none";
        bgLoading.style.backdropFilter = "blur(0px)";
        setTimeout(function() {
            bgLoadingCont.style.display = "none";
            bgLoading.style.display = "none";
        }, 1000)
    }, 1000)
}

//
let activeimgpop = document.querySelector(".active-img-pop");
let imgcontntjs = document.querySelectorAll(".row .box");
let divimg = document.querySelector(".div-img");



imgcontntjs.forEach((element) => {
    element.addEventListener("click", function(eo) {
        showactiveimg();
        let getsrc = element.getElementsByTagName("img")[0].src;
        let srcimg = divimg.getElementsByTagName("img")[0];
        srcimg.src = getsrc;
        console.log(element)
    });
});

activeimgpop.addEventListener("click", function() {
    removeshowactiveimg();
});

function removeshowactiveimg() {
    activeimgpop.classList.remove("active");
}

function showactiveimg() {
    activeimgpop.classList.add("active");
}