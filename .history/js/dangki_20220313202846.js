window.addEventListener("load",function(){
    const form = document.querySelector(".registration");
    
    
    
    
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const inputemail = this.querySelector("#email").value;
        const inputpassword = this.querySelector("#password").value;
        const inputpasswordRepeat = this.querySelector("password-repeat").value;
        const inputRank = this.querySelectorAll("#capdo");

        

    })
});