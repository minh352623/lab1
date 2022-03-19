window.addEventListener("load",function(){
    const form = document.querySelector(".registration");
    const checkEmail = document.querySelector(".check-email");
    const checkpassword = document.querySelector(".check-password");
    
    const inputemail = document.querySelector(".email");
    const inputpassword = document.querySelector(".password");
    const inputpasswordRepeat = document.querySelector("password-repeat");
    const inputRank = document.querySelectorAll("#capdo");
    
    let issubmit = 
    inputemail.addEventListener("input",function(e){
        const value = e.target.value;
        console.log(value);
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(regex.test(value.trim())){
            this.classList.add("valid");
            this.classList.remove("invalid");

        }else{
            this.classList.remove("valid");
            this.classList.add("invalid");
        }
        if(!value){
            this.classList.remove("invalid");

        }
    })
    form.addEventListener("submit",function(event){
        event.preventDefault();


    })
});