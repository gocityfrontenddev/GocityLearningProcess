// Define initial product list with dummy data
const products = [
    { name: "Tomatoes", price: 2.5, image: "https://via.placeholder.com/200x150?text=Tomatoes" },
    { name: "Beef", price: 6.0, image: "https://via.placeholder.com/200x150?text=Beef" },
    { name: "Onions", price: 1.8, image: "https://via.placeholder.com/200x150?text=Onions" }
  ];
  
  // Cart will hold added items
  const cart = [];
  
  // Function to render product cards on the page
  function displayProducts() {
    const productList = document.getElementById("productList"); // Get container
    productList.innerHTML = "";  // Clear existing items
  
    // Loop through all products
    products.forEach((product, index) => {
      const div = document.createElement("div");  // Create product box
      div.className = "product";  // Add class for styling
  
      // Fill in product content
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
  
      productList.appendChild(div); // Add to grid
    });
  }
  
  // Add selected product to cart
  function addToCart(index) {
    cart.push(products[index]);  // Add to cart array
    updateCart();  // Update display
  }
  
  // Render cart contents and calculate total
  function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
  
    cartItems.innerHTML = "";  // Clear cart display
    let total = 0;
  
    // Display each item
    cart.forEach((item) => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(div);  // Add to display
      total += item.price;  // Add to total
    });
  
    // Update total
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
  
  // Handle admin form submission to add new products
  document.getElementById("addProductForm").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent page reload
  
    // Get input values
    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value);
    const image = document.getElementById("productImage").value;
  
    // Add to product list if all values are present
    if (name && price && image) {
      products.push({ name, price, image });
      displayProducts();  // Refresh product grid
      this.reset();  // Clear the form
    }
  });
  
  // Initial product render on page load
  displayProducts();
  