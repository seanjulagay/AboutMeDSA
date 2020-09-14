var myPicture = document.getElementById("my-picture");
var aboutContent = document.getElementById("about-content");
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");
var currentPage = 0;
var lastPage = 6;

// leftArrow.addEventListener("click", scrollLeft);
// rightArrow.addEventListener("click", scrollRight);

// myPicture.addEventListener("mouseover", function() {
//     myPicture.src = "../images/burger moi.png";
// })

// myPicture.addEventListener("mouseleave", function() {
//     myPicture.src = "../images/moi.png";
// })

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
}

function fadeOut() {
    aboutContent.style.opacity = 0;
}

function changeContent() {
    aboutContent.textContent = aboutMe[currentPage]
}

function fadeIn() {
    aboutContent.style.opacity = 1;
}