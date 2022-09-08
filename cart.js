const getInputValueById = (id) => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  return inputValue;
};
const addProduct = () => {
  const product = getInputValueById("prodcut-name-field");
  const quantity = getInputValueById("product-quantity-field");
  console.log(product, quantity);
  //   Display Product On Ui
  diaplayProduct(product, quantity);
  //   Set Local Storage
  // Simple Way
  //   localStorage.setItem(product, quantity);
  saveItemToLocalStorage(product, quantity);
};

const getShopingCartFromLocalStorage = () => {
  let savedCart = localStorage.getItem("cart");
  let cart = {};
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  return cart;
};

const saveItemToLocalStorage = (product, quantity) => {
  const cart = getShopingCartFromLocalStorage();
  //   Add Product to the object as property
  cart[product] = quantity;
  const cartStringify = JSON.stringify(cart);
  //   Save TO Local Storage
  localStorage.setItem("cart", cartStringify);
};

const diaplayProduct = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}  : ${quantity}`;
  productContainer.appendChild(li);
};
