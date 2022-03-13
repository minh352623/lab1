window.addEventListener("load", function () {
  const product = document.querySelectorAll(".product-child");

  const items = [
    {
      id: 1,
      name: "Sữa Chua Vị Kiwi",
      title:
        "Hương vị thơm ngon của trái Kiwi xanh, nổi tiếng của đất nước New ZeaLand có trong Sữa chua vị Kiwi xanh đem đến một món ăn nhẹ Siêu ngon và tốt cho hệ tiêu hóa.",
      price: 21000,
      photo: "./assets/images/sanpham/kiwi.jpg",
    },
    {
      id: 2,

      name: "Sữa Chua Vị Xoài",
      title:
        "Sữa chua xoài thích hợp cho mọi lứa tuổi, vì vậy hãy để cả gia đình quây quần bên nhau cùng thưởng thức món ăn thơm ngon, bổ dưỡng này.",
      price: 22000,
      photo: "./assets/images/sanpham/mango.jpg",
    },
    {
      id: 3,

      name: "Sữa Chua Vị Dưa Lưới",
      title:
        "Trong dưa lưới chứa rất nhiều vitamin C có tác dụng làm đẹp da hiệu quả. Phụ nữ ăn sinh tố dưa lưới thường xuyên sẽ có làn da mịn màng.",
      price: 23000,
      photo: "./assets/images/sanpham/cantaloupe.jpg",
    },
    {
      id: 4,

      name: "Sữa Chua Vị Mâm Xôi",
      title:
        "Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng",
      price: 24000,
      photo: "./assets/images/sanpham/blackberry.jpg",
    },
    {
      id: 5,

      name: "Sữa Chua Vị Dâu Tây",
      title:
        "Dâu tây là một loại cây thân thảo có thân ngắn và các chiếc lá mọc gần với nhau. Lá có nhiều gai, bề mặt lá có nhiều lông tơ và kích thước lá có thể khác nhau ở từng giống.",
      price: 25000,
      photo: "./assets/images/sanpham/strawberry.jpg",
    },
    {
      id: 6,

      name: "Sữa Chua Vị Việt Quất",
      title:
        "Quả việt quất chứa các dưỡng chất tốt cho sức khỏe như chất xơ, kali, folate, vitamin C và vitamin B6 (những chất hỗ trợ rất tốt cho sức khỏe của tim).",
      price: 26000,
      photo: "./assets/images/sanpham/blueberry.jpg",
    },
    {
      id: 7,

      name: "Sữa Chua Vị Bưởi",
      title:
        "Bưởi là một loại quả thuộc chi Cam chanh có nguồn gốc từ Đông Nam Á. Bưởi tiếng Anh gọi là Pomelo, tuy nhiên nhiều từ điển ở Việt Nam lại dịch thành grapefruit.",
      price: 27000,
      photo: "./assets/images/sanpham/grapes.jpg",
    },
    {
      id: 8,

      name: "Sữa Chua Vị Táo Xanh",
      title:
        "Táo xanh có hàm lượng chất xơ cao giúp tăng cường quá trình trao đổi chất của cơ thể. Bên cạnh đó chất xơ còn giúp quá trình giải độc gan và hệ tiêu hóa.",
      price: 28000,
      photo: "./assets/images/sanpham/strawberry.jpg",
    },
    {
      id: 9,

      name: "Sữa Chua Vị Dứa",
      title:
        "Dứa có tên gọi khác như là khóm, thơm, khớm, gai hoặc huyền nương. Đây là một loại quả nhiệt đới. Dứa là cây bản địa của các nước Nam Mỹ.",
      price: 29000,
      photo: "./assets/images/sanpham/kiwi.jpg",
    },
  ];
  function renderItem(item) {
    const template = `

            <div class="product__img" data-id=${item.id}>
                <img src="${item.photo}" name="img"></img>
            </div>

            <div class="product__header">
                <h2 class="product__header-center" name="nameSp">${item.name}</h2>
            </div>


            <div class="product__info">
                <p>
                    <span name="title">${item.title}</span> 
                    <a href="#">Xem chi tiết</a>
                </p>
                <span>Giá:</span>
                <span class="price" name="price">${item.price}</span>
                <div class="product__info-oder">
                    <span>Số Lượng:</span>
                    <input type="text" name="soluong" min="1" max="100" class="number">
                    <button type="submit" class="submit">Đặt hàng</button>

                </div>

            </div>


        
        `;
    return template;
  }
  
  // console.log(items[0]);
  for (let i = 0; i < product.length; i++) {
    const item = items[i];
    product[i].insertAdjacentHTML("beforeend", renderItem(item));
  }
  let itemsCart =localStorage.length > 0 ?JSON.parse(localStorage.getItem("Listitem")): [];
  //đăt Hàng
  function cart(){
    window.onstorage = () => {
      itemsCart =localStorage.length > 0 ?JSON.parse(localStorage.getItem("Listitem")): [];
  
    };

    let isSubmit =false;
    for (let i = 0; i < product.length; i++) {
      product[i].addEventListener("click", function (e) {

        if (e.target.matches(".submit")) {
          e.preventDefault();

          // console.log(e.target);
          const number = this.querySelector(".number").value;
          if(!isNaN(+number)){

            if ((+number > 100 || +number<1) || number === "") {
              alert("Số lượng phải nhỏ hơn 100 và lớn hơn 0");
              //  isSubmit = false;
            } else {
              const list = {
                  id : +this.querySelector(".product__img").dataset.id,
                 img : this.querySelector(".product__img img").src,
                 name : this.querySelector(".product__header-center").textContent,
                 number : +this.querySelector(".number").value,
                 price : (this.querySelector(".price").textContent).trim(),
              }
                let index =-1;
                console.log(itemsCart);
                if([...itemsCart].length>0){

                  index = [...itemsCart].findIndex((item) => item.id === list.id);
                  console.log(index);
                }
                
                if(index > -1){
                  let newnumber = [itemsCart][index].number + list.number;
                  itemsCart[index].number = newnumber;
  
                  // window.localStorage.setItem("Listitem",JSON.stringify(itemsCart));
  
                  alert("đã có trong giỏ hàng!");
                  this.querySelector(".number").value = "";
                  
                  isSubmit = true;
                  
                }else if(index <= -1 || itemsCart.length <1){

                  itemsCart.push(list);
                }
                window.localStorage.setItem("Listitem",JSON.stringify(itemsCart));
                this.querySelector(".number").value= "";
                alert("đã thêm vào giỏ hàng!");
              // }
  
              //thêm sản phẩm vào giỏ hàng nếu chưa có trong giỏ hàng
              // console.log(list);
           
              
  
              isSubmit =true;
            }

          }else{
            alert("so lương don hang phải là số");
          }
        }
       
      })
      // product[i].addEventListener("submit", function (ev) {
      //   ev.preventDefault();
      //   if(isSubmit){
      //     this.submit();
      //   }
        
      // });
    }
  }
  cart();
  console.log(itemsCart);


});
