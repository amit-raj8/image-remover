var ImgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");


if (ImgBox && imgWrap && originalImg) {
   
    originalImg.style.width = ImgBox.offsetWidth + "px";

    
    var leftSpace = ImgBox.getBoundingClientRect().left + window.scrollX;

   
    ImgBox.onmousemove = function (e) {
      
        var boxWidth = Math.max(0, Math.min(e.pageX - leftSpace, ImgBox.offsetWidth)) + "px";
        imgWrap.style.width = boxWidth;
    };
} else {
    console.error("One or more required elements (ImgBox, imgWrap, originalImg) are missing.");
}
