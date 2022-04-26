// =====================  PORTFLIO  =====================
let allBtn = document.getElementById("all");
let webBtn = document.getElementById("web");
let graphicBtn = document.getElementById("graphic");
let vectorBtn = document.getElementById("vector");
let allBtns = Array.from(document.querySelectorAll(".top a"));

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

// loading page
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
    // arrow
window.onscroll = () => {
    if (this.scrollY >= 500) {
        document.querySelector("#arrowHome i").style.right = "10px";
    } else {
        document.querySelector("#arrowHome i").style.right = "-40px";
    }
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