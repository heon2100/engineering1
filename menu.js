html {
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: 'NanumGothic';
    src: url('fonts/NanumGothic.eot');
    src: url('fonts/NanumGothic.eot?#iefix') format('embedded-opentype'), url('fonts/NanumGothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
    justify-content: center;
    align-items: center;
    margin: 0;
    background: #f8f7f5;
    font-family: 'NanumGothic', sans-serif;
    color: #888888;
    width: 100%;
}

#mobile {
    height: 100%;
    width: 100%;
    background: #c6c4c1;
    position: relative;
    margin: 0 auto;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    -khtml-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    min-width: 280px;
}


/*------ HEADER 스크롤 메뉴 시작 -------*/

.bottomNav {
    z-index: 30;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 46px;
    line-height: 52px;
    background: #eae8e5;
    ;
    color: rgb(114, 114, 114);
    text-align: center;
}

.bottomNav.noshow {
    top: -46px;
    transition: top .3s;
}

.bottomNav.show {
    top: 0;
    transition: top .3s;
}


/*------ HEADER 스크롤 메뉴 끝 -------*/


/*------------ 뒤로 가기 시작 --------------*/

#back {
    z-index: 30;
    height: 25px;
    width: 25px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translate(0, -50%);
    cursor: pointer;
    background: none;
    line-height: 25px;
    -webkit-tap-highlight-color: #ff191941;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -khtml-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

#back::before {
    content: "";
    display: block;
    position: absolute;
    height: 1.5px;
    background: #f85051;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -khtml-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: 18px;
    left: 3px;
    top: 6.25px;
}

#back::after {
    content: "";
    display: block;
    position: absolute;
    height: 1.5px;
    background: #f85051;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -khtml-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 18px;
    left: 3px;
    top: 18px;
}

.navigation #back {
    left: -35px;
}


/*------------ 뒤로 가기 끝 --------------*/


/*------------ 로고 박기 시작 --------------*/

#logo {
    /*border: 2px solid #f85051;*/
    height: 25px;
    width: 30px;
    z-index: 30;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 35px;
    transform: translate(0, -50%);
    line-height: 25px;
    background-image: url('img/lotte_logo.png');
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: center;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -khtml-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

.navigation #logo {
    left: -35px;
}


/*------------ 로고 박기 끝 --------------*/


/*------------ 헤더 타이틀 시작 --------------*/

#headertitle {
    /* border: 2px solid #f85051; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 220px;
    line-height: 25px;
    font-weight: bold;
    z-index: 30;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -khtml-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

.navigation #headertitle {
    left: -250px;
}


/*------------ 헤더 타이틀 끝 --------------*/


/* ----------------- 메뉴버튼 시작 ----------------*/

#burgerBtn {
    z-index: 30;
    border-top: 2px solid #f85051;
    height: 25px;
    width: 30px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    cursor: pointer;
    -webkit-tap-highlight-color: #ff191941;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -khtml-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

#burgerBtn::before {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 30px;
    right: 0;
    background: #f85051;
    top: 10px;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -khtml-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

#burgerBtn::after {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 30px;
    right: 0;
    background: #f85051;
    bottom: 0;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -khtml-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

.navigation #burgerBtn {
    border-color: transparent;
}

.navigation #burgerBtn::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -khtml-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 33px;
    left: -2px;
}

.navigation #burgerBtn::after {
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -khtml-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
    bottom: 11px;
    width: 33px;
    left: -2px;
}


/* ----------------- 메뉴버튼 끝 ------------------*/


/* ------------- 네비게이션 바 시작 ---------------*/

#nav {
    position: fixed;
    top: 60px;
    right: 0;
    z-index: 10;
    list-style-type: none;
    margin-right: 25px;
    padding: 0;
    display: hidden;
}

#nav li {
    display: block;
    height: 30px;
    line-height: 30px;
    width: 120px;
    margin-left: 80px;
    box-sizing: border-box;
    background: #eae8e5;
    display: block;
    text-align: center;
    cursor: pointer;
    letter-spacing: -10px;
    -webkit-tap-highlight-color: #ff19197e;
    -webkit-transition: all 0.4s ease-in;
    -moz-transition: all 0.4s ease-in;
    -khtml-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
    transition: all 0.4s ease-in;
}

#nav li+li {
    margin-top: 50px;
    width: 80px;
    margin-left: 120px;
}

#nav li+li+li {
    width: 60px;
    margin-left: 140px;
}

#nav li+li+li+li {
    width: 40px;
    margin-left: 160px;
}

.navigation #nav li {
    width: 200px;
    margin-left: 0px;
    letter-spacing: 0;
}

#nav li:hover {
    box-shadow: 2px 2px 4px #333;
}


/*마우스 올렸을 때 커지는거*/


/* -------------- 네비게이션 바 끝 ---------------*/


/* -------------- 네비게이션 여백 시작 ---------------*/

#navabove {
    z-index: 10;
    height: 46px;
    width: 50px;
    position: absolute;
    top: 0;
    right: 0;
    background: #eae8e5;
    padding: 0;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -khtml-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.navigation #navabove {
    background: #c6c4c1;
}

#navabove2 {
    z-index: 10;
    height: 100%;
    width: 100%;
    position: fixed;
    right: 0;
    margin-top: 46px;
    margin-right: 250px;
    padding: 0;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -khtml-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.navigation #navabove2 {
    z-index: 30;
    background: #c6c4c1;
    -webkit-opacity: 0.3;
    -moz-opacity: 0.3;
    -khtml-opacity: 0.3;
    -o-opacity: 0.3;
    opacity: 0.3;
}


/* --------------네비게이션 여백 끝 ---------------*/


/* -------------- 내용 몸통 시작 ---------------*/

#mobileMainContent {
    background: #f8f7f5;
    /*  #f8f7f5;  */
    margin-top: 46px;
    position: relative;
    z-index: 20;
    width: 100%;
    height: 100%;
    overflow: hidden;
    visibility: visible;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -khtml-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.navigation #mobileMainContent {
    margin-left: -250px;
    -webkit-opacity: 0.6;
    -moz-opacity: 0.6;
    -khtml-opacity: 0.6;
    -o-opacity: 0.6;
    opacity: 0.6;
}

#image {
    height: 280px;
    width: 100%;
    overflow: hidden;
    position: relative;
    margin: 0 0 0 0;
}

#image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

#bodytitle {
    height: 20px;
    width: 200px;
    margin: 40px auto;
    background: #eae8e5;
    text-align: center;
}

#text .item {
    height: 20px;
    width: calc(100% - 40px);
    margin: 20px auto;
    background: #eae8e5;
}


/* -------------- 내용 몸통 끝 ---------------*/
