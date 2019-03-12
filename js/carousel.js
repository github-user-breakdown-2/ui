class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftButton = carousel.querySelector(".left-button");
    this.rightButton = carousel.querySelector(".right-button");
    this.carouselItems = carousel.querySelectorAll(".card");
    this.carouselItems[0].style.display = "block";
    this.currentItem = 0;
    this.timer = null;

    this.leftButton.addEventListener("click", _ => this.changeItem(false));
    this.rightButton.addEventListener("click", _ => this.changeItem(true));

    this.resetTimer();
  }

  changeItem(goRight) {
    this.carouselItems[this.currentItem].style.display = "none";

    if (goRight) {
      if (this.currentItem + 1 > this.carouselItems.length - 1) {
        this.currentItem = 0;
      } else {
        this.currentItem++;
      }
    } else {
      if (this.currentItem - 1 < 0) {
        this.currentItem = this.carouselItems.length - 1;
      } else {
        this.currentItem--;
      }
    }

    this.carouselItems[this.currentItem].style.display = "block";

    this.resetTimer();
  }

  resetTimer() {
    clearInterval(this.timer);

    this.timer = setInterval(() => {
      this.changeItem(true);
    }, 3000);
  }
}

document.querySelectorAll(".features").forEach(function(carousel) {
  return new Carousel(carousel);
});
