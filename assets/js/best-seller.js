function generateRandomScore() {
  return (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1);
}
function setDescription(subcategory) {
  let desc;

  switch(subcategory) {
      case "Móc khoá":
          desc = "Móc khoá hoa len thủ công tinh xảo, thích hợp để trang trí hoặc làm quà.";
          break;
      case "Lược cài":
          desc = "Lược cài hoa len độc đáo, mang lại vẻ đẹp nhẹ nhàng và thanh lịch.";
          break;
      case "Kẹp":
          desc = "Kẹp hoa len dễ thương, giúp làm nổi bật mái tóc của bạn.";
          break;
      default:
          desc = "Sản phẩm hoa len tinh tế, phù hợp với nhiều không gian và mục đích trang trí.";
          break;
  }

  return desc;
}
  const product = [

          {
            id: 1,
            name: "Hoa dã quỳnh",
            price: "25.000",
            desc:setDescription("subcategory"),
            cover: "./assets/img/product/full/Đồng giá 25K/Hoa dã quỳ.jpg",
            score: generateRandomScore(),             
            category: "Hoa chậu",
            subcategory: "Đồng giá 25k"
          },
          {
              id: 2,
              name: "Hoa thạch thảo hồng",
              price: "25.000",
              desc:setDescription("Đồng giá 25k"),
              cover: "./assets/img/product/full/Đồng giá 25K/Hoa thạch thảo hồng.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 25k"
            },
            {
              id: 3,
              name: "Hoa thạch thảo 2",
              price: "25.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 25K/Hoa thạch thảo(1).jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 25k"
            },
            {
              id: 4,
              name: "Hoa thạch thảo ",
              price: "25.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 25K/Hoa thạch thảo.jpg",
              score: generateRandomScore(),                
              category: "Hoa chậu",
              subcategory: "Đồng giá 25k"
            },
            {
              id: 5,
              name: "Hoa tulip",
              price: "25.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 25K/Hoa tulip.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 25k"
            },
            {
              id: 6,
              name: "Xương rồng",
              price: "25.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 25K/Xương rồng.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 25k"
            },
            {
              id: 7,
              name: "Cúc hồng",
              price: "30.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 30k/Cúc hồng.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 30k"
            },
            {
              id: 8,
              name: "Cúc xanh",
              price: "30.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 30k/Cúc xanh.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 30k"
            },{
              id: 9,
              name: "Hoa bánh kem",
              price: "30.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 30k/Hoa bánh kem.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 30k"
            },{
              id: 10,
              name: "Hoa cúc họa mi trắng",
              price: "30.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 30k/Hoa cúc họa mi trắng.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 30k"
            },{
              id: 11,
              name: "Hoa cúc trắng nhuỵ cam",
              price: "30.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 30k/Hoa cúc trắng nhuỵ cam.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 30k"
            },
             {
              id: 12,
              name: "Hoa hồng đỏ",
              price: "30.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 30k/Hoa hồng đỏ.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 30k"
            },{
              id: 13,
              name: "Hoa hướng dương 1 bông",
              price: "30.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 30k/Hoa hướng dương 1 bông.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 30k"
            },{
              id: 14,
              name: "Hoa tuyết cầu xanh",
              price: "30.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 30k/Hoa tuyết cầu xanh.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 30k"
            }
            ,{
              id: 15,
              name: "Hướng dương 2 hoa nhỏ",
              price: "30.000",
              desc:setDescription("subcategory"),
              cover: "./assets/img/product/full/Đồng giá 30k/Hướng dương 2 hoa nhỏ.jpg",
              score: generateRandomScore(),
              category: "Hoa chậu",
              subcategory: "Đồng giá 30k"
            }, {
              id: 72,
              name: "Kẹp ếch xanh",
              price: "Liên hệ - ?",
              desc:setDescription("Kẹp"),
              cover: "./assets/img/product/full/Phụ kiện nhỏ/Kẹp ếch xanh.jpg",
              score: generateRandomScore(),
              category: "Phụ kiện nhỏ",
              subcategory: "Kẹp"
            },
            {
              id: 73,
              name: "Kẹp hoa nhỏ",
              price: "Liên hệ - ?",
              desc:setDescription("Kẹp"),
              cover: "./assets/img/product/full/Phụ kiện nhỏ/Kẹp hoa nhỏ.jpg",
              score: generateRandomScore(),
              category: "Phụ kiện nhỏ",
              subcategory: "Kẹp"
            },
            {
              id: 74,
              name: "Kẹp kẹo ngọt",
              price: "Liên hệ - ?",
              desc:setDescription("Kẹp"),
              cover: "./assets/img/product/full/Phụ kiện nhỏ/Kẹp kẹo ngọt.jpg",
              score: generateRandomScore(),
              category: "Phụ kiện nhỏ",
              subcategory: "Kẹp"
            },
            {
              id: 75,
              name: "Kẹp mầm non",
              price: "Liên hệ - ?",
              desc:setDescription("Kẹp"),
              cover: "./assets/img/product/full/Phụ kiện nhỏ/Kẹp mầm non.jpg",
              score: generateRandomScore(),
              category: "Phụ kiện nhỏ",
              subcategory: "Kẹp"
            },
            {
              id: 76,
              name: "Kẹp ông già noel",
              price: "Liên hệ - ?",
              desc:setDescription("Kẹp"),
              cover: "./assets/img/product/full/Phụ kiện nhỏ/Kẹp ông già noel.jpg",
              score: generateRandomScore(),
              category: "Phụ kiện nhỏ",
              subcategory: "Kẹp"
            },
            {
              id: 77,
              name: "Kẹp ong vàng",
              price: "Liên hệ - ?",
              desc:setDescription("Kẹp"),
              cover: "./assets/img/product/full/Phụ kiện nhỏ/Kẹp ong vàng.jpg",
              score: generateRandomScore(),
              category: "Phụ kiện nhỏ",
              subcategory: "Kẹp"
            },
            {
              id: 78,
              name: "Kẹp tai thỏ cà rốt",
              price: "Liên hệ - ?",
              desc:setDescription("Kẹp"),
              cover: "./assets/img/product/full/Phụ kiện nhỏ/Kẹp tai thỏ cà rốt.jpg",
              score: generateRandomScore(),
              category: "Phụ kiện nhỏ",
              subcategory: "Kẹp"
            },{
              id: 81,
              name: "Lược cài mèo đen",
              price: "Liên hệ - ?",
              desc:setDescription("Lược cài"),
              cover: "./assets/img/product/full/Phụ kiện nhỏ/Lược cài mèo đen.jpg",
              score: generateRandomScore(),
              category: "Phụ kiện nhỏ",
              subcategory: "Lược cài"
            },
            {
              id: 82,
              name: "Móc khóa bắp cải nhiều màu",
              price: "Liên hệ - ?",
              desc:setDescription("Móc khoá"),
              cover: "./assets/img/product/full/Phụ kiện nhỏ/Móc khóa bắp cải nhiều màu.jpg",
              score: generateRandomScore(),
              category: "Phụ kiện nhỏ",
              subcategory: "Móc khoá"
            },
            {
              id: 83,
              name: "Móc khóa dâu xanh",
              price: "Liên hệ - ?",
              desc:setDescription("Móc khoá"),
              cover: "./assets/img/product/full/Phụ kiện nhỏ/Móc khóa dâu xanh.jpg",
              score: generateRandomScore(),
              category: "Phụ kiện nhỏ",
              subcategory: "Móc khoá"
            },];