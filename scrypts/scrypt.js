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

    if (el.closest(".favorite-header__basket")) {
      window.location.href = "./cart.html"
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

    if (
      !el.closest(".images-product__main-image") &&
      el.closest(".images-product__image")
    ) {
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
        el.classList.remove("_icon-checkbox")
      })
      const element = el.closest(".colors-info-product__color")
      element.classList.add("_icon-checkbox")
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
    //===============button add product in cart=====
    if (el.closest(".add-info-product__button-add")) {
      const productEl = el.closest(".product__container")
      if (productEl) {
        const idEl = productEl.getAttribute("id")
        const savedIds = JSON.parse(localStorage.getItem("cartIds")) || []
        const buttonEl = productEl.querySelector(
          ".add-info-product__button-add"
        )

        const elMessage = document.createElement("div")
        elMessage.classList.add("add-info-product__button-add-message")
        elMessage.textContent = "Товар вже в корзині"

        const exists = savedIds.some((el) => el[0] === idEl)

        if (exists) {
          if (
            !buttonEl.querySelector(".add-info-product__button-add-message")
          ) {
            buttonEl.append(elMessage)
            setTimeout(() => elMessage.remove(), 2000)
          }
          return
        }

        const countEl = document.querySelector(".count-add-info-product__count")
        const arrWrapper = [idEl, countEl.textContent]
        savedIds.push(arrWrapper)
        localStorage.setItem("cartIds", JSON.stringify(savedIds))

        const basketHeaderIcon = document.querySelector(
          ".favorite-header__basket"
        )
        basketHeaderIcon.innerHTML = `<div><span>${savedIds.length}</span></div>`
      }
    }

    //======================ASIDE===========================
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
          nextElement.style.zIndex = "1"
        }, 10)
      }
    }

    if (el.closest(".top-category__icon-filter")) {
      const wrapperAside = document.querySelector(".aside__wrapper")
      const aside = document.querySelector(".aside")

      wrapperAside.classList.toggle("active")
      aside.classList.toggle("active")

      document.body.style.overflow = "hidden"
    }

    if (window.innerWidth <= 767.98 && el.closest(".aside__filters-title")) {
      const wrapperAside = document.querySelector(".aside__wrapper")
      const aside = document.querySelector(".aside")
      document.body.style.overflow = "auto"

      wrapperAside.classList.remove("active")
      aside.classList.remove("active")
    }

    if (el.closest(".colors-aside__color")) {
      const currentElementColor = el.closest(".colors-aside__color")
      const allColors = document.querySelectorAll(".colors-aside__color")
      allColors.forEach((el) => el.classList.remove("_icon-checkbox"))
      currentElementColor.classList.add("_icon-checkbox")
    }

    if (el.closest(".size-aside__item")) {
      const currentElementColor = el.closest(".size-aside__item")
      const allColors = document.querySelectorAll(".size-aside__item")
      allColors.forEach((el) => el.classList.remove("active"))
      currentElementColor.classList.add("active")
    }
    //================category pagination next prev========================

    if (
      el.closest(".pagination-category__button--prev") ||
      el.closest(".pagination-category__button--next")
    ) {
      const numbersPagination = document.querySelectorAll(
        ".numbers-pagination-category__number"
      )

      // Масив для зручності роботи
      const pages = Array.from(numbersPagination)

      // Знаходимо індекс активного елемента
      let indexElement = pages.findIndex((item) =>
        item.classList.contains("active")
      )

      // ====== ФУНКЦІЯ ДЛЯ ВСТАНОВЛЕННЯ АКТИВНОГО ЕЛЕМЕНТА ======
      function setActive(newIndex) {
        pages.forEach((item) => item.classList.remove("active"))
        pages[newIndex].classList.add("active")
      }

      // ====== КНОПКА PREV ======
      if (
        el.closest(".pagination-category__button--prev") &&
        indexElement > 0
      ) {
        let newIndex = indexElement - 1

        // Пропускаємо елементи з "..."
        while (newIndex > 0 && pages[newIndex].textContent.trim() === "...") {
          newIndex--
        }

        setActive(newIndex)
      }

      // ====== КНОПКА NEXT ======
      if (
        el.closest(".pagination-category__button--next") &&
        indexElement < pages.length - 1
      ) {
        let newIndex = indexElement + 1

        // Пропускаємо елементи з "..."
        while (
          newIndex < pages.length - 1 &&
          pages[newIndex].textContent.trim() === "..."
        ) {
          newIndex++
        }

        setActive(newIndex)
      }
    }
    if (
      el.closest(".numbers-pagination-category__number") &&
      !el.closest(".numbers-pagination-category__number-ellipsis")
    ) {
      const currentEl = el.closest(".numbers-pagination-category__number")
      const ollButtons = document.querySelectorAll(
        ".numbers-pagination-category__number"
      )
      ollButtons.forEach((el) => el.classList.remove("active"))
      currentEl.classList.add("active")
    }
    //=======================CART===================================
    //=======================cart-count=================
    if (
      el.closest(".add-block-cart__minus") ||
      el.closest(".add-block-cart__plus")
    ) {
      const currentEl = el.closest(".add-block-cart__count")
      let countElement = currentEl.querySelector(".add-block-cart__span")
      let numberCount = parseInt(countElement.textContent)
      if (el.closest(".add-block-cart__minus") && numberCount > 1) {
        numberCount -= 1
      } else if (el.closest(".add-block-cart__plus")) {
        numberCount += 1
      }
      countElement.textContent = numberCount
      calculateSumCard()
    }
    //=======================cart delete element=================

    if (el.closest(".add-block-cart__icon-delete")) {
      const parrentElement = el.closest(".block-cart")
      const nextEl = parrentElement.nextElementSibling

      if (nextEl && nextEl.classList.contains("cart__products-border")) {
        nextEl.remove()
      }

      parrentElement.remove()

      const arrIds = JSON.parse(localStorage.getItem("cartIds"))

      const idElement = parrentElement.getAttribute("id")

      const newArr = arrIds.filter((el) => {
        return el[0] != idElement
      })

      localStorage.setItem("cartIds", JSON.stringify(newArr))

      const elCount = document.querySelector(".favorite-header__basket-count")
      elCount.textContent = newArr.length
      calculateSumCard()
    }
    //======================= CLICK PRODUCT CARD =======================
    if (el.closest(".card__card")) {
      const idElement = el.closest(".card__card").getAttribute("id")
      window.location.href = `./product.html?id=${idElement}`
      
    }

    //======================================================================
  }
  document.addEventListener("click", (e) => documentActions(e))

  //================ PAGE LOADED =============================================
  function calculateSumCard() {
    const totalSumEl = document.querySelector(".summary-cart__sum-price")
    const discountSumEl = document.querySelector(
      ".summary-cart__discount-price"
    )
    const discountPercentEl = document.querySelector(
      ".summary-cart__discount-text-span"
    )
    const totalPriceEl = document.querySelector(".summary-cart__total-price")

    const productsOnPage = document.querySelectorAll(".block-cart")
    const deliveryEl = document.querySelector(".summary-cart__delivery-price")


    
    let totalSum = 0
    let discountSum = 0 // 🔹 додав окрему змінну для реально нарахованої знижки
    let percent = 0
    let percenCount = 0

    let delivery = 15

    if (productsOnPage.length === 0) {
      delivery = 0
    }
    deliveryEl.textContent = `$${delivery.toFixed(2)}`

    productsOnPage.forEach((block) => {
      const priceEl = block.querySelector(
        ".info-block-cart__price-price"
      ).textContent


       const countElement = block.querySelector(".add-block-cart__span")
  const numberCount = parseInt(countElement.textContent)
      const price = parseFloat(priceEl.replace(/[^\d.]/g, "")) || 0 // 🔹 додаємо || 0 на випадок порожнього тексту
      totalSum += price * numberCount

      const priceOldEl = block.querySelector(".info-block-cart__price-old")
      if (priceOldEl) {
        const oldPrice =
          parseFloat(priceOldEl.textContent.replace(/[^\d.]/g, "")) || 0 // 🔹 теж || 0
        discountSum += (oldPrice - price)  * numberCount// 🔹 рахуємо реальну знижку
      }

      const percentEl = block.querySelector(
        ".info-block-cart__price-sale-percent"
      )
      if (percentEl) {
        percent += parseFloat(percentEl.textContent.replace(/[^\d.]/g, "")) || 0 // 🔹 || 0 щоб не було NaN
        percenCount++
      }
    })

    totalSumEl.textContent = `$${totalSum.toFixed(2)}`

    // 🔹 виводимо реальну суму знижки
    discountSumEl.textContent = `-$${discountSum.toFixed(2)}`

    // 🔹 перевірка на нуль, щоб не було NaN при відсутності відсотків
    discountPercentEl.textContent =
      percenCount > 0 ? `(-${Math.round(percent / percenCount)}%)` : "(-0%)"

    totalPriceEl.textContent = `$${(totalSum + delivery).toFixed(2)}`
  }

  if (window.location.pathname.endsWith("/cart.html")) {
    calculateSumCard()
  }
  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get("id")
  if (productId) {
    const ollArr = [
      productsArrivals,
      productsSelling,
      productsLikes,
      productsCategory,
    ].flat()
    const element = ollArr.find((el) => {
      return el.id === parseInt(productId)
    })

    const productElement = new ProductComponentElement(".product", element)
    productElement.render()
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
    const productLikes = new ProductsCard(productsLikes, ".likes__products")
    productLikes.render()
  }

  //=====================category show product========
  if (document.querySelector(".products-category")) {
    const productCategory = new ProductsCard(
      productsCategory,
      ".products-category"
    )
    productCategory.render(0, 9)
  }
  //======================add icon number product in cart===============
const basketHeaderIcon = document.querySelector(".favorite-header__basket")

if (localStorage.getItem("cartIds")) {
  const savedIds = JSON.parse(localStorage.getItem("cartIds"))

  const htmlCode = `
    <div class='favorite-header__basket-count-wrapper'>
      <span class='favorite-header__basket-count'>${savedIds.length}</span>
    </div>
  `

  // Спершу очистимо, щоб не дублювалось
  basketHeaderIcon.innerHTML = ""
  basketHeaderIcon.insertAdjacentHTML("beforeend", htmlCode)
} else {
  // Якщо немає даних — просто очищаємо вміст
  basketHeaderIcon.innerHTML = ""
}
  //==================delete icon number product in cart=======
if (
  localStorage.getItem("cartIds") &&
  JSON.parse(localStorage.getItem("cartIds")).length === 0
) {
  const basketHeaderIconWrapper = document.querySelector(
    ".favorite-header__basket-count-wrapper"
  )
  if (basketHeaderIconWrapper) basketHeaderIconWrapper.remove()
}

  
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
