window.addEventListener("load",function(){
    const form = document.querySelector(".registration");
    const checkEmail = document.querySelector(".check-email");
    const checkpassword = document.querySelector(".check-password");
    
    
    
    form.addEventListener("submit",function(event){
        event.preventDefault();
        console.log(e.target);
        const inputemail = e.target.querySelector(".email");
        input.addEventListener("input",function(e){
            const value = e.target.value;
            const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
            if(regex.test(value.trim())){
                this.classList.add("valid");
                this.classList.remove("invalid");
    
            }else{
                this.classList.remove("valid");
                this.classList.add("invalid");
            }
        })
        const inputpassword = this.querySelector(".password").value;
        const inputpasswordRepeat = this.querySelector("password-repeat").value;
        const inputRank = this.querySelectorAll("#capdo");


    })
});