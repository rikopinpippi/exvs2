'use strict';
{


    window.addEventListener("DOMContentLoaded", function() {
        window.onscroll = function (){
          var myFade = document.getElementsByClassName("fade");
          for(var i = 0; i < myFade.length; i++){
            var targetElement = myFade[i].getBoundingClientRect(); //ターゲット要素の高さ
            var scroll = document.documentElement.scrollTop || document.body.scrollTop;  //スクロール
            var windowHeight = window.innerHeight;  //ウィンドウの高さ
            if (scroll > scroll + targetElement.top - windowHeight + 200){
              myFade[i].style.opacity = "1";
              myFade[i].style.transform = "translateY(0)";
            }
          }
        }
    }, false);


































}