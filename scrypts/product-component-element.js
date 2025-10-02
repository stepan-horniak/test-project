const prod = [
  {
    id: 35,
    title: "T-SHIRT WITH TAPE DETAILS",
    image: [
      "/images/category/image-1.png",
      // "/images/category/image-2.png",
      // "/images/category/image-3.png",
      // "/images/category/image-4.png",
    ],
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas ad accusantium optio, quis expedita consequuntur enim in voluptates laborum. Quos exercitationem aliquid delectus aperiam fuga ",
    rating: 4.5,
    price: 120,
    oldPrice: 160,
    salePercent: "-19%",
  },
]

class ProductComponentElement {
  constructor(wrapper, data) {
    this.wrapper = document.querySelector(wrapper)
    this.data = data
  }

  createElement(tad, classNameArr) {
    const element = document.createElement(tad)
    classNameArr.forEach((className) => {
      element.classList.add(className)
    })
    return element
  }
  createImageContainer(arrUrl) {
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("product__images", "images-product")

    const imageGrid = document.createElement("div")
    imageGrid.classList.add("images-product__grid")

    arrUrl.forEach((el, index) => {
      const image = document.createElement("img")
      image.setAttribute("src", el)
      image.setAttribute("alt", "product-image")
      image.classList.add("images-product__image")
      imageGrid.append(image)
    })

    const mainImageWrapper = document.createElement("div")
    mainImageWrapper.classList.add("images-product__main-image")
    const mainImage = document.createElement("img")
    mainImage.setAttribute("src", arrUrl[arrUrl.length - 1])
    mainImage.setAttribute("alt", "product-image")
    mainImage.classList.add("images-product__image")
    mainImageWrapper.append(mainImage)

    imageGrid.append(mainImageWrapper)
    imageWrapper.append(imageGrid)

    return imageWrapper
  }

  createScoresContainer(rating) {
    const scoresContainer = this.createElement("div", [
      "info-product__scores",
      "scores-info-product",
    ])

    const starsEl = this.createElement("div", ["scores-info-product__stars"])

    for (let i = 1; i < rating; i++) {
      const star = this.createElement("div", [
        "scores-info-product__star",
        "_icon-star",
      ])
      starsEl.append(star)
    }
    if (rating % 1 !== 0) {
      const starHalf = this.createElement("div", [
        "scores-info-product__star",
        "_icon-star-half",
      ])
      starsEl.append(starHalf)
    }

    scoresContainer.append(starsEl)

    const scoresEl = this.createElement("div", ["scores-info-product__scores"])
    const scoresText = this.createElement("div", ["scores-info-product__score"])
    scoresText.textContent = `${rating}/`
    const scoresTextMax = this.createElement("div", [
      "scores-info-product__score",
    ])
    scoresTextMax.textContent = 5
    scoresEl.append(scoresText)
    scoresEl.append(scoresTextMax)

    scoresContainer.append(scoresEl)

    return scoresContainer
  }

  createPriceContainer(price, oldPrice, salePercent) {
    const priceContainer = this.createElement("div", [
      "info-product__price",
      "price-info-product",
    ])

    const priceEl = this.createElement("div", ["price-info-product__price"])
    priceEl.textContent = `$${price}`
    priceContainer.append(priceEl)

    if (oldPrice) {
      const oldPriceEl = this.createElement("div", [
        "price-info-product__price-half",
      ])
      oldPriceEl.textContent = `$${oldPrice}`
      priceContainer.append(oldPriceEl)
    }

    if (salePercent) {
      const salePercentEl = this.createElement("div", [
        "price-info-product__sale-percent",
      ])
      salePercentEl.textContent = `${salePercent}`
      priceContainer.append(salePercentEl)
    }

    return priceContainer
  }

  createInfoContainer(
    title,
    price,
    oldPrice,
    salePercent,
    rating,
    infoProductText = ""
  ) {
    const infoEl = this.createElement("div", ["product__info", "info-product"])
    const titleEl = this.createElement("h6", ["info-product__title"])
    titleEl.textContent = title
    infoEl.append(titleEl)

    infoEl.append(this.createScoresContainer(rating))
    infoEl.append(this.createPriceContainer(price, oldPrice, salePercent))

    const infoTextEl = this.createElement("div", ["info-product__info-text"])
    infoTextEl.textContent = infoProductText
    infoEl.append(infoTextEl)

    const borderEl = this.createElement("div", ["info-product__border"])
    infoEl.append(borderEl)

    const infoHtml = `<div class="info-product__colors colors-info-product">
              <div class="colors-info-product__title">Select Colors</div>
              <div class="colors-info-product__colors">
                <div class="colors-info-product__color _icon-checkbox"></div>
                <div class="colors-info-product__color"></div>
                <div class="colors-info-product__color"></div>
              </div>
            </div>
              <div class="info-product__border"></div>
            <div class="info-product__size size-info-product">
              <div class="size-info-product__title">Choose Size</div>
              <div class="size-info-product__buttons">
                <button class="size-info-product__button">Small</button>
                <button class="size-info-product__button">Medium</button>
                <button class="size-info-product__button">Large</button>
                <button class="size-info-product__button">X-Large</button>
              </div>
            </div>
              <div class="info-product__border"></div>
            <div class="info-product__add add-info-product">
              <div class="add-info-product__row">
                <div class="add-info-product__count count-add-info-product">
                  <button class="count-add-info-product__minus">-</button>
                  <div class="count-add-info-product__count">1</div>
                  <button class="count-add-info-product__plus">+</button>
                </div>
                <button class="add-info-product__button-add">Add to Cart</button>

              </div>
            </div>`

    infoEl.insertAdjacentHTML("beforeend", infoHtml)
    return infoEl
  }

  render() {
    const container = this.createElement("div", ["product__container"])
    container.setAttribute("id", this.data.id)
    const row = this.createElement("div", ["product__row"])
    container.append(row)

    row.append(this.createImageContainer(this.data.images))

    row.append(
      this.createInfoContainer(
        this.data.title,
        this.data.price,
        this.data.oldPrice,
        this.data.salePercent,
        this.data.rating,
        this.data.text
      )
    )

    this.wrapper.append(container)
  }
}

// const productElement = new ProductComponentElement(".product", prod)
// productElement.render()
