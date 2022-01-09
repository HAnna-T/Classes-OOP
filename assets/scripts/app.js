class Product {
  title = "DEFAULT";
  imageUrl;
  descirption;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.descirption = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  addToCard() {
    console.log("adding product to card");
    console.log(this.product);
  }
  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
    <div>
      <img src ='${this.product.imageUrl}' alt ='${this.product.title}' />
      <div class='product-item__content'>
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.descirption}</p>
          <button>Add to card </button>
      </div>
    </div>
    `;
    const addCardButton = prodEl.querySelector("button");
    addCardButton.addEventListener("click", this.addToCard.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://th.bing.com/th/id/OIP.KRhNEVgt1po5eCmJ1eF9CQHaHa?pid=ImgDet&rs=1",
      19.99,
      "A soft pillow"
    ),
    new Product(
      "A Carpet",
      "https://th.bing.com/th/id/OIP.SsHUyzs3tFarXdtN_zxDvwHaHa?pid=ImgDet&rs=1",
      89.99,
      " a carpet  which you might like  - or not"
    ),
  ];
  constructor() {}
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (let prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
