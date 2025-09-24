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
      const productArrivals = new ProductsCard(
        productsArrivals,
        ".card-arrivals"
      )
      productArrivals.render()

      productArrivals.render(4, Infinity)
      document.querySelector(".arrivals__button-oll").remove()
    }

    //==========selling-show-more-products========================

    if (el.closest(".selling__button-oll")) {
      const productSelling = new ProductsCard(productsSelling, ".card-selling")
      productSelling.render()

      productSelling.render(4, Infinity)
      document.querySelector(".selling__button-oll").remove()
    }

    //==========product-image-change========================

    if (el.closest(".images-product__image")) {
      const elements = document
        .querySelectorAll(".images-product__image")
        .forEach((el) => {
          el.style.border = "none"
        })
      const imageBlock = el.closest(".images-product__image")
      imageBlock.style.borderWidth = "1px"
      imageBlock.style.borderStyle = "solid"
      imageBlock.style.borderColor = "#000"

      const element = el.closest(".images-product__image").cloneNode(false)

      const containerImage = document.querySelector(
        ".images-product__main-image"
      )
      containerImage.innerHTML = ""
      element.style.border = "none"
      containerImage.append(element)
    }
    //=================product-select-colors===================

    if (el.closest(".colors-info-product__color")) {
      document.querySelectorAll(".colors-info-product__color").forEach((el) => {
        el.classList.remove("active")
      })
      const element = el.closest(".colors-info-product__color")
      element.classList.add("active")
    }
    //=================product-select-size===================

    if (el.closest(".size-info-product__button")) {
      document.querySelectorAll(".size-info-product__button").forEach((el) => {
        el.classList.remove("active")
      })
      const element = el.closest(".size-info-product__button")
      element.classList.add("active")
    }

    //=================product-count===================

    if (
      el.closest(".count-add-info-product__minus") ||
      el.closest(".count-add-info-product__plus")
    ) {
      let countElement = document.querySelector(
        ".count-add-info-product__count"
      )
      let numberCount = parseInt(countElement.textContent)
      if (el.closest(".count-add-info-product__minus") && numberCount > 1) {
        numberCount -= 1
      } else if (el.closest(".count-add-info-product__plus")) {
        numberCount += 1
      }
      countElement.textContent = numberCount
    }

    //=================aside show hidden sub-menu===================

    if (!el.closest(".aside__filters-title") && el.closest(".aside-title")) {
      const currentElement = el.closest(".aside-title")
      const nextElement = currentElement.nextElementSibling
      currentElement.classList.toggle("active")
      if (currentElement.classList.contains("active")) {
        nextElement.style.transform = "translateY(-30%)"
        nextElement.style.transitionDuration = "0.4s"
        nextElement.style.opacity = "0"
        nextElement.style.visibility = "hidden"
        nextElement.style.position = "relative"
        nextElement.style.zIndex = "-1"

        setTimeout(() => {
          nextElement.style.display = "none"
        }, 300)
      } else {
        nextElement.style.display = "block"
        setTimeout(() => {
          nextElement.style.transform = "translateY(0)"
          nextElement.style.transitionDuration = "0.3s"
          nextElement.style.opacity = "1"
          nextElement.style.visibility = "visible"
        }, 10)
      }
    }

    if (el.closest(".top-category__icon-filter")) {
      const wrapperAside = document.querySelector(".aside__wrapper")
      wrapperAside.classList.toggle("active")
      document.body.style.overflow = "hidden"
    }

    if (window.innerWidth <= 767.98 && el.closest(".aside__filters-title")) {
      const wrapperAside = document.querySelector(".aside__wrapper")
      wrapperAside.classList.toggle("active")
      document.body.style.overflow = "auto"
    }
    //======================================================================
  }
  //================page loads=============================================
  if (document.querySelector(".colors-info-product__color")) {
    document
      .querySelector(".colors-info-product__color")
      .classList.add("active")
  }
  //============================
  if (document.querySelectorAll(".size-info-product__button")) {
    document
      .querySelectorAll(".size-info-product__button")
      .forEach((el, index) => {
        index === 2 ? el.classList.add("active") : null
      })
  }
  //=================arrivals show product===========

  if (document.querySelector(".card-arrivals")) {
    const productArrivals = new ProductsCard(productsArrivals, ".card-arrivals")
    productArrivals.render()
  }

  //=====================selling show product=======
  if (document.querySelector(".card-selling")) {
    const productSelling = new ProductsCard(productsSelling, ".card-selling")
    productSelling.render()
  }
  //=====================likes show product========
  if (document.querySelector(".likes__products")) {
    const productLikes = new ProductsCard(productslikes, ".likes__products")
    productLikes.render()
  }
  //=====================category show product========
  if (document.querySelector(".products-category")) {
    const productCategory = new ProductsCard(
      productsArrivals,
      ".products-category"
    )
    productCategory.render(0, 9)
  }
  //===============================================

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

    function footerContainerMarginTop() {
      const subscribeFooter = document.querySelector(
        ".subscribe-footer__wrapper"
      ).offsetHeight
      const footerContainer = document.querySelector(
        ".subscribe-footer__wrapper"
      )
      footerContainer.style.margin = `${subscribeFooter / 2}px 0 0 0`
    }
    footerContainerMarginTop()
    //========================================
  }

  //========================
  handleScreenChange()
  window.addEventListener("resize", handleScreenChange)

  //====================================================================

  if (document.querySelector(".clients__swiper")) {
    const swiper = new Swiper(".clients__swiper", {
      loop: true,
      initialSlide: 1,
      navigation: {
        nextEl: ".clients__swiper-button-next",
        prevEl: ".clients__swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
          centeredSlides: false,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 15,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: true,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: true,
        },
        1270: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      },
    })
  }

  if (document.getElementById("slider-range")) {
    var slider = document.getElementById("slider-range")

    noUiSlider.create(slider, {
      start: [50, 200],
      connect: true,
      margin: 50,
      range: {
        min: 0,
        max: 250,
      },
      tooltips: true,
      decimals: 0,
      format: {
        to: function (value) {
          return `$${parseInt(value)}`
        },
        from: function (value) {
          return Number(value.replace("$", ""))
        },
      },
    })
  }
  //===============================================
}
