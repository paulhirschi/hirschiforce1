/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
"use strict";


const callback = function(){
  const img = document.querySelector(".whakakoi-login-img")
  const imgShow = document.querySelector(".show-image")
  const imgHide = document.querySelector(".close-image")
  const darkBackground = document.querySelector(".dark-background")
  const body = document.body 

  const showTheImage = function() {
    img.style.visibility = "visible"
    img.style.opacity = 1
    darkBackground.style.visibility = "visible"
    darkBackground.style.opacity = 1
  }

  const hideTheImage = function() {
    img.style.opacity = 0
    darkBackground.style.opacity = 0
    setTimeout(function() {
      img.style.visibility = "hidden"
      darkBackground.style.visibility = "hidden"
    }, 500);
  }

  imgShow.addEventListener("click", showTheImage)
  imgHide.addEventListener("click", hideTheImage)

};

if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
