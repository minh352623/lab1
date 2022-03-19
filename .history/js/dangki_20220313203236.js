window.addEventListener("load",function(){
    const form = document.querySelector(".registration");
    const checkEmail = 
    
    
    
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const inputemail = this.querySelector("#email").value;
        const inputpassword = this.querySelector("#password").value;
        const inputpasswordRepeat = this.querySelector("password-repeat").value;
        const inputRank = this.querySelectorAll("#capdo");

        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(regex.test(inputemail.trim())){

        }

    })
});