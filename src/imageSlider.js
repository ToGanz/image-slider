const imageSlider = () => {
  let slideIndex = 0;
 
  carousel();

  function carousel() {
    let x = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("badge");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" white", "");
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1;
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " white";
    setTimeout(carousel, 5000); // Change image every 5 seconds
  }

  function showDivs(n) {
    let x = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("badge");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " white";
  }

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function currentDiv(n) {
    console.log(n);
    showDivs((slideIndex = n));
  }

  function slideLeft() {
    plusDivs(-1);
  }

  function slideRight() {
    plusDivs(1);
  }

  let left = document.querySelector(".left");
  left.addEventListener("click", slideLeft);

  let right = document.querySelector(".right");
  right.addEventListener("click", slideRight);

  let badges = document.querySelectorAll(".badge");
  badges.forEach((badge, index) => {
    badge.addEventListener("click", function () {
      currentDiv(index + 1);
    });
  });
};

export default imageSlider;
