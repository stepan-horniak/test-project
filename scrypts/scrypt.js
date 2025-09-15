"use strict"

window.addEventListener("load", windowLoaded)

function windowLoaded() {
  function documentActions(e) {
    const el = e.target
    //=======================
    //===========header-burger============
    if (el.closest(".header__burger")) {
      document.querySelector(".header__burger").classList.toggle("active")
      document.querySelector(".header__nav").classList.toggle("active")
    } else if (!el.closest(".nav-header")) {
      document.querySelector(".header__burger").classList.remove("active")
      document.querySelector(".header__nav").classList.remove("active")
    }
    //===========header-search============

    if (el.closest(".search-header__button")) {
      if (
        document
          .querySelector(".search-header__button")
          .classList.contains("active")
      )
        return
      document.querySelector(".search-header__input").classList.toggle("active")
      document.querySelector(".search-header").classList.toggle("active")
      document
        .querySelector(".search-header__button")
        .classList.toggle("active")
    } else if (!el.closest(".search-header")) {
      document.querySelector(".search-header__input").classList.remove("active")
      document.querySelector(".search-header").classList.remove("active")
      document
        .querySelector(".search-header__button")
        .classList.remove("active")
    }
    //===========header-top-bar-close============
    if (el.closest(".top-bar__cross")) {
      document.querySelector(".top-bar").style.display = "none"
    }
    //==========arrivals-show-more-products========================

    if (el.closest(".arrivals__button-oll")) {
      productArrivals.render(4, Infinity)
      document.querySelector(".arrivals__button-oll").remove()
    }
    //==========selling-show-more-products========================

    if (el.closest(".selling__button-oll")) {
      productSelling.render(4, Infinity)
      document.querySelector(".selling__button-oll").remove()
    }
    //====================================
  }
  document.addEventListener("click", (e) => documentActions(e))

  //======================================================================

  function handleScreenChange(e) {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    //=========================
    // if (screenWidth > 767.98)
    //   if (screenWidth < 991.98)

    // const topContainer = document.querySelector(".header-top__container")
    // const parrentTopContainer = document.querySelector(".header-top")

    // const bottomContainer = document.querySelector(".header-bottom__container")
    // const parrentBottomContainer = document.querySelector(".header-bottom")

    // const burgerMenu = document.querySelector(".header-main__menu-burger")
    // if (burgerMenu) {
    //   if (screenWidth <= 991.98) {
    //     burgerMenu.append(bottomContainer)
    //     burgerMenu.append(topContainer)
    //   } else {
    //     parrentTopContainer.append(topContainer)
    //     parrentBottomContainer.append(bottomContainer)
    //   }
    // }
    //=============search-header============

    const headerRowContainer = document.querySelector(".header__row")
    const headerFavoriteContainer = document.querySelector(".favorite-header")
    const headerSearchContainer = document.querySelector(".search-header")

    if (headerRowContainer && headerFavoriteContainer && headerSearchContainer)
      if (screenWidth <= 767.98) {
        headerFavoriteContainer.prepend(headerSearchContainer)
      } else {
        headerRowContainer.append(headerSearchContainer)
        headerRowContainer.append(headerFavoriteContainer)
      }
    //========================================
  }

  //========================
  handleScreenChange()
  window.addEventListener("resize", handleScreenChange)

  //====================================================================
  // const swiper = new Swiper(".clients__swiper", {
  //   loop: true,
  //   slidesPerView: 3,
  //   spaceBetween: 20,
  //   centeredSlides: true,
  //   initialSlide: 1,
  //   navigation: {
  //     nextEl: ".clients__swiper-button-next",
  //     prevEl: ".clients__swiper-button-prev",
  //   },
  //   on: {
  //     init: function () {
  //       updateBlur(this)
  //     },
  //     slideChange: function () {
  //       updateBlur(this)
  //     },
  //   },
  // })

  // function updateBlur(swiper) {
  //   swiper.slides.forEach((slide) => slide.classList.add("blur")) // всі спочатку розмиті

  //   // робимо чіткими тільки центральний та сусідні слайди
  //   const visibleSlides = swiper.slides.filter(
  //     (slide) =>
  //       slide.classList.contains("swiper-slide-active") ||
  //       slide.classList.contains("swiper-slide-prev") ||
  //       slide.classList.contains("swiper-slide-next")
  //   )

  //   visibleSlides.forEach((slide) => slide.classList.remove("blur"))
  // }
  const swiper = new Swiper(".clients__swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 2,
    navigation: {
      nextEl: ".clients__swiper-button-next",
      prevEl: ".clients__swiper-button-prev",
    },
  })
}
//
//===============================================
