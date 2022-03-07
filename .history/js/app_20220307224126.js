window.addEventListener("DOMContentLoaded",function() {
    const header = document.querySelector(".header");
    const headerHeight = header && header.offsetHeight;
    window.addEventListener("scroll",function(e){
        const scrollY = window.pageXOffset;
        if(scrollY >= headerHeight){
            header && header.classList.add("is-fixed")
            document.body.style.paddingTop = `${headerHeight}px`;
        }else{
            document.body.style.paddingTop =0;


            header && header.classList.remove("is-fixed");
        }
    });
});