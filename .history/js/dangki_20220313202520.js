window.addEventListener("load",function(){
    const form = document.querySelector(".registration");
    
    
    
    
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const inputemail = this.querySelector("#email");
        const inputpassword = this.querySelector("#password");
        const inputpasswordRepeat = this.querySelector("password-repeat");
        const inputRank = this.querySelectorAll("#capdo");

    })
});