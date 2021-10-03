window.onload = function() {
    var burgerBtn = document.getElementById("burgerBtn");
    var mobile = document.getElementById("mobile");
    var nav = document.getElementById("nav");
    burgerBtn.addEventListener(
        "click",
        function() {
            mobile.classList.toggle("navigation");
        },
        false
    );

    nav.addEventListener(
        "click",
        function() {
            mobile.classList.toggle("navigation");
        },
        false
    );

function upnav () { document.addEventListener('scroll', onScroll, { passive: true }); let last = 0; const gap = 1; const nav = document.querySelector('nav'); const headerheight = document.querySelector('header').clientHeight; function onScroll() { const scrollposition = pageYOffset; if (Math.abs(last - scrollposition) <= gap) return; else if (scrollposition > last || scrollposition<= headerheight) { nav.classList.remove("downdown"); } else if (scrollposition<last) { nav.classList.add("downdown"); } last = scrollposition; } } upnav(); 


}
