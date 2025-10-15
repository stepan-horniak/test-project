class cartProduct {
  constructor(container, ...dataArr) {
    this.container = document.querySelector(container)
    this.data = dataArr.flat()
  }

  getProductFromlocalStorageData() {
    const savedIds = JSON.parse(localStorage.getItem("cartIds"))
    let arrElements = []

    for (let i = 0; i < savedIds.length; i++) {
      let foundElement = this.data.find(
        (product) => product.id === parseInt(savedIds[i][0])
      )
      if (foundElement) {
        foundElement.number = savedIds[i][1]
        arrElements.push(foundElement)
      }
    }

    return arrElements
  }

  createElement(tad, classNameArr) {
    const element = document.createElement(tad)
    if (classNameArr) {
      classNameArr.forEach((className) => {
        element.classList.add(className)
      })
    }
    return element
  }

  createImageContainer(data) {
    const wrapperImg = this.createElement("div", ["block-cart__image"])

    const img = this.createElement("img")
    img.setAttribute("src", data.images[0])

    wrapperImg.append(img)
    return wrapperImg
  }
  createInfoContainer(data) {
    const wrapperInfo = this.createElement("div", [
      "block-cart__info",
      "info-block-cart",
    ])

    const titleEl = this.createElement("div", ["info-block-cart__title"])
    titleEl.textContent = data.title
    wrapperInfo.append(titleEl)

    const sizeEl = this.createElement("div", ["info-block-cart__size"])
    sizeEl.textContent = "Size: "
    const sizeSpan = this.createElement("span")
    sizeSpan.textContent = "Large"
    sizeEl.append(sizeSpan)
    wrapperInfo.append(sizeEl)

    const colorEl = this.createElement("div", ["info-block-cart__color"])
    colorEl.textContent = "Color: "
    const colorSpan = this.createElement("span")
    colorSpan.textContent = "White"
    colorEl.append(colorSpan)
    wrapperInfo.append(colorEl)

    const wrapperPrice = this.createElement("div", ["info-block-cart__price"])

    const price = this.createElement("div", ["info-block-cart__price-price"])
    price.textContent = `$${data.price}`
    wrapperPrice.append(price)

    if (data.oldPrice) {
      const oldPrice = this.createElement("div", ["info-block-cart__price-old"])
      oldPrice.textContent = `$${data.oldPrice}`
      wrapperPrice.append(oldPrice)
    }

    if ("salePercent" in data) {
      const salePercent = this.createElement("div", [
        "info-block-cart__price-sale-percent",
      ])
      salePercent.textContent = `${data.salePercent}`
      wrapperPrice.append(salePercent)
    }
    wrapperInfo.append(wrapperPrice)
    return wrapperInfo
  }
  createAddRemoveContainer(data) {
    const wrapper = this.createElement("div", [
      "block-cart__add",
      "add-block-cart",
    ])

    const iconCart = this.createElement("div", [
      "add-block-cart__icon-delete",
      "_icon-dump",
    ])
    wrapper.append(iconCart)

    const countWrapper = this.createElement("div", ["add-block-cart__count"])
    const countMinus = this.createElement("button", ["add-block-cart__minus"])
    countMinus.textContent = "-"
    countWrapper.append(countMinus)
    const countSpan = this.createElement("span", ["add-block-cart__span"])
    countSpan.textContent = data.number

    countWrapper.append(countSpan)
    const countPlus = this.createElement("button", ["add-block-cart__plus"])
    countPlus.textContent = "+"
    countWrapper.append(countPlus)

    wrapper.append(countWrapper)

    return wrapper
  }
  render() {
    let elementData = this.getProductFromlocalStorageData() //for

    for (let i = 0; i < elementData.length; i++) {
      const block = this.createElement("div", ["block-cart"])
      block.setAttribute("id", elementData[i].id)
      block.append(this.createImageContainer(elementData[i]))
      block.append(this.createInfoContainer(elementData[i]))
      block.append(this.createAddRemoveContainer(elementData[i]))

      this.container.append(block)
      if (i < elementData.length - 1) {
        const border = this.createElement("div", ["cart__products-border"])
        this.container.append(border)
      }
    }

    //==========================
  }
}

const test = new cartProduct(
  ".cart__products",
  productsArrivals,
  productsSelling,
  productsLikes,
  productsCategory
)
test.render()
