window.addEventListener("DOMContentLoaded",function() {

    //fixed header
    const header = document.querySelector(".header");
    const cartHeader = document.querySelector(".header-icon__cart");
    const headerHeight = header && header.offsetHeight;
    window.addEventListener("scroll",function(e){
        const scrollY = window.pageYOffset;
        // console.log(scrollY);
        if(scrollY >= headerHeight){
            header && header.classList.add("is-fixed")
            document.body.style.paddingTop = `${headerHeight}px`;
        }else{
            document.body.style.paddingTop =0;


            header && header.classList.remove("is-fixed");
        }
    });


    //tìm kiếm
    const fromSearch =document.querySelector(".form-search");
    const inputSearch = document.querySelector(".input-search");
    const iconSearch = document.querySelector(".header-icon__search");
    fromSearch.addEventListener("submit",handleSearch);
    iconSearch.addEventListener("click",handleSearch);
    function handleSearch(e){
        if(inputSearch.value === ""){
            e.preventDefault();
            alert("bạn chưa nhập gì!!");
        }
    };
    //chưa hoàn thành




    //form đăng kí


    //form đăng nhập




    //add sản phầm vào giỏ hàng


    //chuyển trang giỏ Hàng
    cartHeader.addEventListener("ci")


});