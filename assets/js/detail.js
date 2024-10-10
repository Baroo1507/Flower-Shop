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
           // Define links for categories and subcategories
           const categoryLinks = {
            "Hoa chậu": "./hoachau.html",
            "Hoa bó, hoa lẻ": "./hoabohoale.html",
            "Phụ kiện nhỏ": "./phukien.html"
        };

        const subcategoryLinks = {
            "Đồng giá 25k": "./donggia25k.html",
            "Đồng giá 30k": "./donggia30k.html",
            "Đồng giá 35k": "./donggia35k.html",
            "Đồng giá 40k": "./donggia40k.html",
            "Đồng giá 45k": "./donggia45k.html",
            "Hoa bó": "./hoabo.html",
            "Hoa lẻ": "./hoale.html",
            "Kẹp": "./kep.html",
            "Lược cài": "./luoc.html",
            "Móc": "./moc.html"
        };

        const categories = [
            { name: "Trang chủ", link: "./indexd.html" }, // Home
            { name: "Sản phẩm", link: "./product.html" },
            { name: selectedProduct.category, link: categoryLinks[selectedProduct.category] || "#!" }, // Product category
            { name: selectedProduct.subcategory, link: subcategoryLinks[selectedProduct.subcategory] || "#!" }, // Subcategory
            { name: selectedProduct.name, link: "#!", current: true } // Current product name
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
