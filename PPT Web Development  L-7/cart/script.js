const productContainer = document.getElementById("productContainer");
const cartContainer = document.getElementById("cartContainer");
const cartModal = document.getElementById("cartModal");
const checkoutBtn = document.getElementById("checkoutBtn");
const closeBtn = document.getElementsByClassName("close")[0];

let cartItems = [];

// Fetch products from API
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            const productCard = createProductCard(product);
            productContainer.appendChild(productCard);
        });
    })
    .catch(error => {
        console.log("An error occurred while fetching products:", error);
    });

// Create product card
function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.className = "productCard";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    productCard.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = product.title;
    productCard.appendChild(title);

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
    productCard.appendChild(price);

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", () => {
        addToCart(product);
    });
    productCard.appendChild(addToCartBtn);

    return productCard;
}

// Add product to cart
function addToCart(product) {
    cartItems.push(product);
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    cartContainer.innerHTML = "";
    cartItems.forEach(item => {
        const cartItem = createCartItem(item);
        cartContainer.appendChild(cartItem);
    });
    openCartModal();
}

// Create cart item
function createCartItem(item) {
    const cartItem = document.createElement("div");
    cartItem.className = "cartItem";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;
    cartItem.appendChild(image);

    const title = document.createElement("h4");
    title.textContent = item.title;
    cartItem.appendChild(title);

    const price = document.createElement("p");
    price.textContent = `$${item.price}`;
    cartItem.appendChild(price);

    return cartItem;
}

// Open cart modal
function openCartModal() {
    cartModal.style.display = "block";
}

// Close cart modal
function closeCartModal() {
    cartModal.style.display = "none";
}

// Event listeners
checkoutBtn.addEventListener("click", () => {
    alert("Buy This Product.....");
});

closeBtn.addEventListener("click", () => {
    closeCartModal();
});

window.addEventListener("click", (event) => {
    if (event.target == cartModal) {
        closeCartModal();
    }
});

