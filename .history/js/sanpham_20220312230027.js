window.addEventListener("load",function(){

    const col = document.querySelectorAll(".col.l-4");



    const items =
    [
        {
            name:"Sữa Chua Vị Kiwi",
            title:"Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng", 
            price:21000, 
            photo:"./assets/images/sanpham/kiwi.jpg", 
        },
        {
            name:"Sữa Chua Vị Kiwi",
            title:"Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng", 
            price:21000, 
            photo:"./assets/images/sanpham/kiwi.jpg", 
        },
        {
            name:"Sữa Chua Vị Kiwi",
            title:"Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng", 
            price:21000, 
            photo:"./assets/images/sanpham/kiwi.jpg", 
        },
        {
            name:"Sữa Chua Vị Kiwi",
            title:"Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng", 
            price:21000, 
            photo:"./assets/images/sanpham/kiwi.jpg", 
        },
        {
            name:"Sữa Chua Vị Kiwi",
            title:"Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng", 
            price:21000, 
            photo:"./assets/images/sanpham/kiwi.jpg", 
        },
        {
            name:"Sữa Chua Vị Kiwi",
            title:"Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng", 
            price:21000, 
            photo:"./assets/images/sanpham/kiwi.jpg", 
        },
        {
            name:"Sữa Chua Vị Kiwi",
            title:"Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng", 
            price:21000, 
            photo:"./assets/images/sanpham/kiwi.jpg", 
        },
        {
            name:"Sữa Chua Vị Kiwi",
            title:"Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng", 
            price:21000, 
            photo:"./assets/images/sanpham/kiwi.jpg", 
        },
        {
            name:"Sữa Chua Vị Kiwi",
            title:"Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng", 
            price:21000, 
            photo:"./assets/images/sanpham/kiwi.jpg", 
        },
    ]
    function renderItem(item){
        const template = `
        <form class="product-child">

        <div class="product__img">
            <img src="${item.photo}" controls=""></video>
        </div>

        <div class="product__header">
            <h2 class="product__header-center">
                ${item.name}
            </h2>
        </div>


        <div class="product__info">
            <p>
                ${item.title}
                <a href="#">Xem chi tiết</a>
            </p>
            <span>${item.price}</span>
            <div class="product__info-oder">
                <span>Số Lượng:</span>
                <input type="text">
                <button type="submit">Đặt hàng</button>

            </div>

        </div>


    </form>
        
        `;
        for(let i = 0; i<col.length;i++){
            item[]
        }

    }
    // console.log(items[0]);
    

});