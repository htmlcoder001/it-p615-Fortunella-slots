let count = 0;

const fadeOut = (el, timeout, direction = 'top') => {
  el.style.transformOrigin = direction;
  el.style.transform = "scaley(1)";
  el.style.transition = `transform ${timeout}ms`;
  el.style.transform = "scaley(0)";

  setTimeout(() => {
    el.style.display = "none";
  }, timeout);
};

const fadeIn = (el, timeout, delay, display, direction = 'top') => {
  setTimeout(() => {
    el.style.transformOrigin = direction;
    el.style.transform = "scaley(0)";
    el.style.display = display || "block";
    el.style.transition = `transform ${timeout}ms`;
    setTimeout(() => {
      el.style.transform = "scaley(1)";
    }, timeout);
  }, delay);
};

document.addEventListener("DOMContentLoaded", () => {
  const swiperParams = {
    loop: true,
    autoplay: {
      delay: 1,
      enabled: true
    },
    freeMode: false,
    allowTouchMove: false,
    speed: 2500,
    slidesPerView: "auto",
    centeredSlides: true
  };

  const btn = document.querySelector(".js-gift-btn");
  const spinner = document.querySelector('#carousel-loader');
  const formBlock = document.querySelector(".product-block");
  const giftBlock = document.getElementById('gift-block');
  const arrow = giftBlock.querySelector(".js-arrow");
  const swiper = new Swiper(".swiper", swiperParams);

  swiper.on("resize", () => {
    if (!count) {
      swiper.autoplay.start();
    }
  });

  btn.addEventListener("click", () => {
    function decrNum(i, endNumber) {
      let timer;
      arrow.classList.add("anim--arrow-bounce");
      swiper.autoplay.start();
      spinner.style.display = '';
      btn.setAttribute("disabled", true);
      if (i >= endNumber) {
        swiper.params.speed = i;
        timer = setTimeout(function () {
          decrNum(i - 10, endNumber);
          clearTimeout(timer);
        }, i);
      } else {
        const timerID = setTimeout(function () {
          swiper.slideToLoop(5, 400, false);
          spinner.style.display = 'none';
          btn.textContent = btn.dataset.winText;
          btn.classList.add("p-gift__btn--win");
          const winTimer = setTimeout(function () {
            fadeOut(giftBlock, 700);
            start_timer && start_timer();
            fadeIn(formBlock, 500, 700);
            formBlock.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            // document.getElementById('countdownText').textContent = "Your 50% Discount"
            clearTimeout(winTimer);
          }, 1000);
          swiper.autoplay.stop();
          clearTimeout(timerID);
        }, 2000);

      }
    }
    decrNum(350, 100);
  });
});
