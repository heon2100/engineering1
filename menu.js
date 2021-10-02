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
}
