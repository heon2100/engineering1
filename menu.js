
//버거메뉴 눌를 시 생기는 효과아들
var burgerBtn = document.getElementById("burgerBtn");
var mobile = document.getElementById("mobile");
var nav = document.getElementById("nav");
var navabove2 = document.getElementById("navabove2");

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

    navabove2.addEventListener(
        "click",
        function() {
            mobile.classList.toggle("navigation");
        },
        false
    );




//스크롤 이벤트 

var lastScrollTop = 0;
var delta = 5;
var fixBox = document.querySelector('.bottomNav');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;

window.onscroll = function(e) {
    didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled(){
    var nowScrollTop = window.scrollY;
    if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }
    if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
        //Scroll down
        fixBox.classList.add('noshow');
        fixBox.classList.remove('show');
    }else{
        if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
            //Scroll up
            fixBox.classList.add('show');
            fixBox.classList.remove('noshow');
        }
    }
    lastScrollTop = nowScrollTop;
}