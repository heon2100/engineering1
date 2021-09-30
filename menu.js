window.onload = function() {
    var burgerBtn = document.getElementById("burgerBtn");
    var mobile = document.getElementById("mobile");
    var demo2 = document.getElementById("demo2");


    burgerBtn.addEventListener(
        "click",
        function() {
            mobile.classList.toggle("navigation");
        },
        false
    );




}
