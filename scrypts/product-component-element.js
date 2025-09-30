//  id: 35,
//     title: "T-SHIRT WITH TAPE DETAILS",
//     image: "/images/category/image-1.png",
//     rating: 4.5,
//     price: 120,

//product -section
class ProductComponentElement {
  constructor(wrapper, data) {
    this.wrapper = document.querySelector(wrapper)
    this.data = data
  }

  createContainer() {
    const container = document.createElement("div")
    container.classList.add("product__container")
    return container
  }
  createRow() {
    const row = document.createElement("div")
    row.classList.add("product__row")
    return row
  }
  createImageContainer(arrUrl = "/images/category/image-1.png") {
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
    mainImageWrapper.append(mainImageWrapper)

    imageWrapper.append(imageGrid)

    return imageWrapper
  }

  render() {
    // this.wrapper.children.remove()
    const container = this.createContainer()
    const row = this.createRow()
    container.append(row)
    row.append(this.createImageContainer())
    this.wrapper.append(container)
  }
}
const productElement = new ProductComponentElement(".product")
productElement.render()
//  <div class="product__container">
//         <div class="product__row">
//           <div class="product__images images-product">
//             <div class="images-product__grid">
//               <img src="./images/product/image1.png" alt="product-image" class="images-product__image">
//               <img src="./images/product/image2.png" alt="product-image" class="images-product__image">
//               <img src="./images/product/image3.png" alt="product-image" class="images-product__image">
//               <div class="images-product__main-image"><img src="./images/product/image3.png" alt="product-image"
//                   class="images-product__image"></div>
//             </div>
//           </div>
//           <div class="product__info info-product">
//             <h6 class="info-product__title">One Life Graphic T-shirt</h6>
//             <div class="info-product__scores scores-info-product">
//               <div class="scores-info-product__stars">
//                 <div class="scores-info-product__star _icon-star"></div>
//                 <div class="scores-info-product__star _icon-star"></div>
//                 <div class="scores-info-product__star _icon-star"></div>
//                 <div class="scores-info-product__star _icon-star"></div>
//                 <div class="scores-info-product__star _icon-star-half"></div>
//               </div>
//               <div class="scores-info-product__scores">
//                 <div class="scores-info-product__score">4.5/</div>
//                 <div class="scores-info-product__score">5</div>
//               </div>
//             </div>
//             <div class="info-product__price price-info-product">
//               <div class="price-info-product__price">$260</div>
//               <div class="price-info-product__price-half">$300</div>
//               <div class="price-info-product__sale-percent">-40%</div>
//             </div>
//             <div class="info-product__info-text">This graphic t-shirt which is perfect for any occasion. Crafted from a
//               soft and breathable fabric, it offers superior comfort and style.</div>
//             <div class="info-product__border"></div>
//             <div class="info-product__colors colors-info-product">
//               <div class="colors-info-product__title">Select Colors</div>
//               <div class="colors-info-product__colors">
//                 <div class="colors-info-product__color _icon-checkbox"></div>
//                 <div class="colors-info-product__color"></div>
//                 <div class="colors-info-product__color"></div>
//               </div>
//             </div>
//             <div class="info-product__border"></div>
//             <div class="info-product__size size-info-product">
//               <div class="size-info-product__title">Choose Size</div>
//               <div class="size-info-product__buttons">
//                 <button class="size-info-product__button">Small</button>
//                 <button class="size-info-product__button">Medium</button>
//                 <button class="size-info-product__button">Large</button>
//                 <button class="size-info-product__button">X-Large</button>
//               </div>
//             </div>
//             <div class="info-product__border"></div>
//             <div class="info-product__add add-info-product">
//               <div class="add-info-product__row">
//                 <div class="add-info-product__count count-add-info-product">
//                   <button class="count-add-info-product__minus">-</button>
//                   <div class="count-add-info-product__count">1</div>
//                   <button class="count-add-info-product__plus">+</button>
//                 </div>
//                 <button class="add-info-product__button-add">Add to Cart</button>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
