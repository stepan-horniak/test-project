"use strict"

window.addEventListener("load", windowLoaded)

function windowLoaded() {
  function documentActions(e) {
    const el = e.target
    //=======================
    // if (el.closest(".header-main-tell__icon")) {
    //   window.location.href = "tel:+380931234567"
    // }
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
  }
  document.addEventListener("click", (e) => documentActions(e))

  //======================================================================

  function handleScreenChange(e) {
    const screenWidth = window.innerWidth
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

    if (headerRowContainer || headerFavoriteContainer || headerSearchContainer)
      if (screenWidth <= 767.98) {
        headerFavoriteContainer.prepend(headerSearchContainer)
      } else {
        headerRowContainer.append(headerSearchContainer)
        headerRowContainer.append(headerFavoriteContainer)
      }
  }
  //=============menu-header============

  //========================
  handleScreenChange()
  window.addEventListener("resize", handleScreenChange)
}
