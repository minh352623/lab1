window.addEventListener("DOMContentLoaded",function() {

    //fixed header
    const header = document.querySelector(".header");
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
    fromSearch.addEventListener("submit",handleSearch);
    function handleSearch(e){
        e.preventDefault();
        if(inputSearch.value === ""){
            alert("bạn chưa nhập gì!!");
            console.log("ac")
        }
    };
});