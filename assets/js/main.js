
  let data = product; 

  const itemsPerPage = 10; // Number of products per page
let currentPage = 1; // Start at page 1
const totalPages = Math.ceil(data.length / itemsPerPage); // Total number of pages

// Function to display products based on the current page
function displayProducts(page) {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = ""; // Clear previous products

  // Calculate the starting and ending index for the products to display
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = data.slice(startIndex, endIndex);

  // Render the products for the current page
  currentProducts.forEach((product) => {
      // Create the outer 'col' div
      const productElement = document.createElement("div");
      productElement.classList.add("col");

      // Create the article element with class 'product-card'
      const productCard = document.createElement("article");
      productCard.classList.add("product-card");

      // Create the img wrapper div
      const imgWrap = document.createElement("div");
      imgWrap.classList.add("product-card__img-wrap");

      // Create the anchor element for the img
      const imgLink = document.createElement("a");
      imgLink.href = "./product-detail.html"; // Link to product details
      imgLink.onclick = function() {
          localStorage.setItem("selectedProduct", JSON.stringify(product)); // Store product data
      };

      // Create the image element
      const imgElement = document.createElement("img");
      imgElement.src = product.cover; // Use product cover image
      imgElement.alt = product.name; // Use product name for alt text
      imgElement.classList.add("product-card__thumb");

      // Append image to the anchor and then to the imgWrap
      imgLink.appendChild(imgElement);
      imgWrap.appendChild(imgLink);

      // Append the imgWrap to the productCard
      productCard.appendChild(imgWrap);

      // Create the title h3 element
      const h3Element = document.createElement("h3");
      h3Element.classList.add("product-card__title");

      const titleLink = document.createElement("a");
      titleLink.href = "./product-detail.html"; // Link to product details
      titleLink.onclick = function() {
          localStorage.setItem("selectedProduct", JSON.stringify(product)); // Store product data
      };
      titleLink.textContent = product.name; // Product name from data

      h3Element.appendChild(titleLink);
      productCard.appendChild(h3Element);

      // Create the row div for price and rating
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("product-card__row");

      // Create the price span
      const priceSpan = document.createElement("span");
      priceSpan.classList.add("product-card__price");
      priceSpan.textContent = `${product.price}₫`; // Product price from data

      // Create the star icon for rating
      const starIcon = document.createElement("img");
      starIcon.src = "./assets/icons/star.svg"; // Replace with your icon path
      starIcon.alt = "Star Rating";
      starIcon.classList.add("product-card__star");

      // Create the score span for rating
      const scoreSpan = document.createElement("span");
      scoreSpan.classList.add("product-card__score");
      scoreSpan.textContent = product.score; // Product rating from data

      // Append price, star icon, and score to the row div
      rowDiv.appendChild(priceSpan);
      rowDiv.appendChild(starIcon);
      rowDiv.appendChild(scoreSpan);

      // Append the rowDiv to the productCard
      productCard.appendChild(rowDiv);

      // Finally, append the productCard to the outer col div
      productElement.appendChild(productCard);

      // Append the productElement to the productContainer
      productContainer.appendChild(productElement);
  });
}


// Function to display pagination controls
function displayPagination() {
  const pagination = document.getElementById("pagg");
  pagination.innerHTML = ""; // Clear previous pagination
  
  // Create page buttons dynamically
  for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("div");
      pageButton.className = "pag__button"; // Change class to match your styling
      
      // Highlight the current page button
      if (i === currentPage) {
          pageButton.classList.add("active");
      }
      
      // Add click event to update the page and display products
      pageButton.onclick = function() {
          currentPage = i;
          displayProducts(currentPage); // Display products for the selected page
          displayPagination(); // Re-render pagination to reflect the current page
      };
      
      pagination.appendChild(pageButton);
  }
}


// Initial load
displayProducts(currentPage);
displayPagination();

// jQuery for button behavior
$(function () {
    var buttons = $(".pag__button");

    function switchToNext() {
        var _this = $(this);

        if (_this.hasClass("active")) return false;
        else {
            $(".pag__button.active").removeClass("active");
            _this.addClass("active");
        }
    }

    buttons.on("click", switchToNext);
});


  function renderProducts(data) {
    // Xóa tất cả các sản phẩm hiện có trong container
    productContainer.innerHTML = "";
  
    // Duyệt qua mảng dữ liệu và tạo các sản phẩm
    data.forEach((product) => {
        // Create the outer 'col' div
        const productElement = document.createElement("div");
        productElement.classList.add("col");
      
        // Create the article with class 'product-card'
        const productCard = document.createElement("article");
        productCard.classList.add("product-card");
      
        // Create the image wrapper div
        const imgWrap = document.createElement("div");
        imgWrap.classList.add("product-card__img-wrap");
      
        // Create the anchor element wrapping the image
        const imgLink = document.createElement("a");
        imgLink.href = "./product-detail.html";
      
        // Create the image element
        const imgElement = document.createElement("img");
        imgElement.src = product.cover;  // Replace with product.cover from data
        imgElement.alt = product.name;
        imgElement.classList.add("product-card__thumb");
      
        // Append the image to the anchor and then to the wrapper
        imgLink.appendChild(imgElement);
        imgWrap.appendChild(imgLink);
      
        // Create the like button
        const likeButton = document.createElement("button");
        likeButton.classList.add("like-btn", "product-card__like-btn");
      
        const likeIcon = document.createElement("img");
        likeIcon.src = "./assets/icons/heart.svg";
        likeIcon.alt = "Like";
        likeIcon.classList.add("like-btn__icon", "icon");
      
        const likedIcon = document.createElement("img");
        likedIcon.src = "./assets/icons/heart-red.svg";
        likedIcon.alt = "Liked";
        likedIcon.classList.add("like-btn__icon--liked");
      
        // Append icons to the button
        likeButton.appendChild(likeIcon);
        likeButton.appendChild(likedIcon);
      
        // Append the like button to the image wrapper
        imgWrap.appendChild(likeButton);
      
        // Create the title h3 element
        const h3Element = document.createElement("h3");
        h3Element.classList.add("product-card__title");
      
        const titleLink = document.createElement("a");
        titleLink.href = "./product-detail.html";
        titleLink.textContent = product.name; // Replace with product.name from data
      
        h3Element.appendChild(titleLink);
      
        // Create the brand paragraph element
        const brandElement = document.createElement("p");
        brandElement.classList.add("product-card__brand");
        brandElement.textContent = product.brand; // Assuming 'product.brand' exists
      
        // Create the row div for price and rating
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("product-card__row");
      
        // Create the price span
        const priceSpan = document.createElement("span");
        priceSpan.classList.add("product-card__price");
        priceSpan.textContent = `${product.price}₫`; // Replace with product.price
      
        // Create the star icon for rating
        const starIcon = document.createElement("img");
        starIcon.src = "./assets/icons/star.svg";
        starIcon.alt = "Star Rating";
        starIcon.classList.add("product-card__star");
      
        // Create the score span
        const scoreSpan = document.createElement("span");
        scoreSpan.classList.add("product-card__score");
        scoreSpan.textContent = product.rating; // Assuming 'product.rating' exists
      
        // // Append price, star icon, and score to the row div
        rowDiv.appendChild(priceSpan);
        // rowDiv.appendChild(starIcon);
        // rowDiv.appendChild(scoreSpan);
      
        // Append all elements to the product card
        productCard.appendChild(imgWrap);
        productCard.appendChild(h3Element);
        productCard.appendChild(brandElement);
        productCard.appendChild(rowDiv);
      
        // Finally, append the product card to the productElement
        productElement.appendChild(productCard);
      
        // Append the productElement to the container
        productContainer.appendChild(productElement);
      });
      
  
    addClickEventToProducts();
  }
  
