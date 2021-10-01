window.onload = function() {
    var burgerBtn = document.getElementById("burgerBtn");
    var mobile = document.getElementById("mobile");


    burgerBtn.addEventListener(
        "click",
        function() {
            mobile.classList.toggle("navigation");
        },
        false
    );




}
