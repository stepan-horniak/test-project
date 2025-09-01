"use strict"

window.addEventListener("load", windowLoaded)

function windowLoaded() {
  function documentActions(e) {
    const el = e.target
    //=======================
    // if (el.closest(".header-main-tell__icon")) {
    //   window.location.href = "tel:+380931234567"
    // }

    if (el.closest(".header__burger")) {
      document.querySelector(".header__burger").classList.toggle("active")
      document.querySelector(".header__nav").classList.toggle("active")
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

    if (
      !headerRowContainer ||
      !headerFavoriteContainer ||
      !headerSearchContainer
    )
      return

    if (screenWidth <= 767.98) {
      if (!headerFavoriteContainer.contains(headerSearchContainer)) {
        headerFavoriteContainer.prepend(headerSearchContainer)
      }
    } else {
      if (!headerRowContainer.contains(headerSearchContainer)) {
        headerRowContainer.append(headerSearchContainer)
      }
    }
  }
  //=============menu-header============

  //========================
}
handleScreenChange()
window.addEventListener("resize", handleScreenChange)
