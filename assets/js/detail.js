document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the selected product from local storage
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  if (selectedProduct) {
      // Update the product details in the HTML
      document.querySelector(".prod-preview__img").src = selectedProduct.cover;
      document.querySelector(".prod-info__heading").textContent = selectedProduct.name;
      document.querySelector(".prod-info__total-price").textContent = `${selectedProduct.price}₫`;
      document.querySelector(".product__desc").textContent = selectedProduct.desc;
      document.querySelector(".prod-prop__title").textContent = `(${selectedProduct.score})`;

      // Update the breadcrumbs
      const breadcrumbsContainer = document.querySelector(".breadcrumbs");
      breadcrumbsContainer.innerHTML = ""; // Clear existing breadcrumbs

      const categories = [
          { name: "Sản phẩm", link: "#!" },
          { name: selectedProduct.category, link: "#!" },
          { name: selectedProduct.subcategory, link: "#!" },
          { name: selectedProduct.name, link: "#!", current: true }
      ];

      categories.forEach((item, index) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.classList.add("breadcrumbs__link");
          a.textContent = item.name;

          if (item.current) {
              a.classList.add("breadcrumbs__link--current");
          } else {
              a.href = item.link; // Set the link for non-current items
          }

          // Append the anchor to the list item
          li.appendChild(a);

          // Append arrow image inside the anchor if it's not the last item
          if (index < categories.length - 1) {
              const arrow = document.createElement("img");
              arrow.src = "./assets/icons/arrow-right.svg";
              arrow.alt = "Arrow icon";
              arrow.classList.add("arrow-icon"); // Optional: add a class for styling
              a.appendChild(arrow); // Add the arrow to the anchor
          }

          breadcrumbsContainer.appendChild(li);
      });
  } else {
      // Handle case where no product is selected (e.g., show a message)
      console.error("No product data found in local storage.");
  }
});
