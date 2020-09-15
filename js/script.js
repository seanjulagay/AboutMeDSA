var myPicture = document.getElementById("my-picture");
var aboutContent = document.getElementById("about-content");
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");
var currentPage = 0;
var lastPage = 6;
var loadImage = new Array(lastPage);
var i = 0;

while(i < lastPage) {
    loadImage[i] = new Image();
    loadImage[i].src = images[i];
    i++;
}

leftArrow.addEventListener("click", scrollLeft);
rightArrow.addEventListener("click", scrollRight);

function scrollLeft() {
    if(currentPage === 0) {
        currentPage = lastPage;
    } else {
        currentPage--;
    }
    changePage();
}

function scrollRight() {
    if(currentPage === lastPage) {
        currentPage = 0;
    } else {
        currentPage++;
    }
    changePage();
}

function changePage() {
    fadeOut();
    setTimeout(changeContent, 500);
    setTimeout(fadeIn, 500);
    myPicture.style.backgroundSize = "cover";
}

function fadeOut() {
    aboutContent.style.opacity = 0;
    myPicture.style.background = "url(" + images[currentPage] + ")";
}

function changeContent() {
    aboutContent.textContent = aboutMe[currentPage]
}

function fadeIn() {
    aboutContent.style.opacity = 1;
}