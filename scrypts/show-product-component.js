class productsCard {
  #cardWrapper

  constructor(data, containerClass) {
    this.data = data
    this.container = document.querySelector(containerClass)
  }

  createCard() {
    this.#cardWrapper = document.createElement("div")
    this.#cardWrapper.classList.add("card-arrivals__card")
    return this.#cardWrapper
  }
  createImage(imageSrc) {
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("card-arrivals__image")
    const img = document.createElement("img")
    img.src = imageSrc
    img.alt = "product-image"
    imageWrapper.append(img)
    return imageWrapper
  }
  createTitle(titleText) {
    const titleEl = document.createElement("div")
    titleEl.classList.add("card-arrivals__title")
    titleEl.textContent = titleText
    return titleEl
  }
  createRates(numberStar) {
    const rateWrapper = document.createElement("div")
    rateWrapper.classList.add("card-arrivals__rate")
    rateWrapper.classList.add("rate-card-arrivals")

    const starsWrapperEl = document.createElement("div")
    starsWrapperEl.classList.add("rate-card-arrivals__stars")
    for (let star = 1; star <= numberStar; star++) {
      const star = document.createElement("span")
      star.classList.add("rate-card-arrivals__star")
      star.classList.add("_icon-star")
      starsWrapperEl.append(star)
    }
    if (numberStar % 1 !== 0) {
      const starHalf = document.createElement("span")
      starHalf.classList.add("rate-card-arrivals__star")
      starHalf.classList.add("_icon-star-half")
      starsWrapperEl.append(starHalf)
    }

    rateWrapper.append(starsWrapperEl)

    const numbersWrapperEl = document.createElement("div")
    numbersWrapperEl.classList.add("rate-card-arrivals__numbers")
    const rating = document.createElement("div")
    rating.classList.add("rate-card-arrivals__number")
    rating.textContent = numberStar
    numbersWrapperEl.append(rating)
    const ratingMax = document.createElement("div")
    ratingMax.classList.add("rate-card-arrivals__number-max")
    ratingMax.textContent = "/5"
    numbersWrapperEl.append(ratingMax)
    rateWrapper.append(numbersWrapperEl)

    return rateWrapper
  }

  createPrice(price, oldPrice, salePercent) {
    const wrapperPrice = document.createElement("div")
    wrapperPrice.classList.add("card-arrivals__price")
    wrapperPrice.classList.add("price-card-arrivals")

    const priceEl = document.createElement("div")
    priceEl.classList.add("price-card-arrivals__price")
    priceEl.textContent = `$${price}`
    wrapperPrice.append(priceEl)

    if (oldPrice) {
      const priceOldEl = document.createElement("div")
      priceOldEl.classList.add("price-card-arrivals__old-price")
      priceOldEl.textContent = `$${oldPrice}`
      wrapperPrice.append(priceOldEl)

      const saleEl = document.createElement("div")
      saleEl.classList.add("price-card-arrivals__sale-percent")
      saleEl.textContent = salePercent
      wrapperPrice.append(saleEl)
    }

    return wrapperPrice
  }

  render(startShow = 0, showElements = 4) {
    for (let i = startShow; i < showElements && i < this.data.length; i++) {
      this.container.append(this.createCard())
      this.#cardWrapper.append(this.createImage(this.data[i].image))
      this.#cardWrapper.append(this.createTitle(this.data[i].title))
      this.#cardWrapper.append(this.createRates(this.data[i].rating))
      this.#cardWrapper.append(
        this.createPrice(
          this.data[i].price,
          this.data[i].oldPrice,
          this.data[i].salePercent
        )
      )
    }
  }
}
if (document.querySelector(".card-arrivals")) {
  const productArrivals = new productsCard(productsArrivals, ".card-arrivals")
  productArrivals.render()
}

//================================================
if (document.querySelector(".card-selling")) {
  const productSelling = new productsCard(productsSelling, ".card-selling")
  productSelling.render()
}
//=========================================
if (document.querySelector(".likes__products")) {
  const productLikes = new productsCard(productslikes, ".likes__products")
  productLikes.render()
}
