class ProductsCard {
  #cardWrapper

  constructor(data, containerClass) {
    this.data = data
    this.container = document.querySelector(containerClass)
  }

  createCard(id) {
    this.#cardWrapper = document.createElement("a")
    this.#cardWrapper.setAttribute("href", "#")
    this.#cardWrapper.setAttribute("id", id)

    this.#cardWrapper.classList.add("card__card")
    return this.#cardWrapper
  }
  createImage(imageSrc) {
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("card__image")
    const img = document.createElement("img")
    img.src = imageSrc
    img.alt = "product-image"
    imageWrapper.append(img)
    return imageWrapper
  }
  createTitle(titleText) {
    const titleEl = document.createElement("div")
    titleEl.classList.add("card__title")
    titleEl.textContent = titleText
    return titleEl
  }
  createRates(numberStar) {
    const rateWrapper = document.createElement("div")
    rateWrapper.classList.add("card__rate")
    rateWrapper.classList.add("rate-card")

    const starsWrapperEl = document.createElement("div")
    starsWrapperEl.classList.add("rate-card__stars")
    for (let star = 1; star <= numberStar; star++) {
      const star = document.createElement("span")
      star.classList.add("rate-card__star")
      star.classList.add("_icon-star")
      starsWrapperEl.append(star)
    }
    if (numberStar % 1 !== 0) {
      const starHalf = document.createElement("span")
      starHalf.classList.add("rate-card__star")
      starHalf.classList.add("_icon-star-half")
      starsWrapperEl.append(starHalf)
    }

    rateWrapper.append(starsWrapperEl)

    const numbersWrapperEl = document.createElement("div")
    numbersWrapperEl.classList.add("rate-card__numbers")
    const rating = document.createElement("div")
    rating.classList.add("rate-card__number")
    rating.textContent = numberStar
    numbersWrapperEl.append(rating)
    const ratingMax = document.createElement("div")
    ratingMax.classList.add("rate-card__number-max")
    ratingMax.textContent = "/5"
    numbersWrapperEl.append(ratingMax)
    rateWrapper.append(numbersWrapperEl)

    return rateWrapper
  }

  createPrice(price, oldPrice, salePercent) {
    const wrapperPrice = document.createElement("div")
    wrapperPrice.classList.add("card__price")
    wrapperPrice.classList.add("price-card")

    const priceEl = document.createElement("div")
    priceEl.classList.add("price-card__price")
    priceEl.textContent = `$${price}`
    wrapperPrice.append(priceEl)

    if (oldPrice) {
      const priceOldEl = document.createElement("div")
      priceOldEl.classList.add("price-card__old-price")
      priceOldEl.textContent = `$${oldPrice}`
      wrapperPrice.append(priceOldEl)

      const saleEl = document.createElement("div")
      saleEl.classList.add("price-card__sale-percent")
      saleEl.textContent = salePercent
      wrapperPrice.append(saleEl)
    }

    return wrapperPrice
  }

  render(startShow = 0, showElements = 4) {
    for (let i = startShow; i < showElements && i < this.data.length; i++) {
      this.container.append(this.createCard(this.data[i].id))
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
