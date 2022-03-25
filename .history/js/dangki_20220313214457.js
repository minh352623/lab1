window.addEventListener("load",function(){
    const form = document.querySelector(".registration");
    const checkEmail = document.querySelector(".check-email");
    const checkpassword = document.querySelector(".check-password");
    
    const inputemail = document.querySelector(".email");
    const inputpassword = document.querySelector(".password");
    const inputpasswordRepeat = document.querySelector(".password-repeat");
    const inputRank = document.querySelectorAll("#capdo");
    
    let isEmail = false;
    let isPassword = false;
    let isPasswordRepeat = false;

    let valuePass ;

    function checkForm(){

        inputemail.addEventListener("input",function(e){
            const value = e.target.value;
            // console.log(value);
            const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
            
            if(regex.test(value.trim())){
                this.classList.add("valid");
                this.classList.remove("invalid");
                return isEmail = true;
            }else {
                this.classList.remove("valid");
                this.classList.add("invalid");
                risEmail = false;

    
            }
            if(!value){
                this.classList.remove("invalid");
                isPassword =  false;
    
    
            }
                
            
        })
        inputpassword.addEventListener("input",function(e){
            valuePass = e.target.value;
            // console.log(valuePass);
            if(valuePass.length>7){
                this.classList.add("valid");
                this.classList.remove("invalid");
                isPassword = true;
            }else{
                this.classList.remove("valid");
                this.classList.add("invalid");
                isPassword = false;
            }
            if(!valuePass){
                this.classList.remove("invalid");
                isPassword =  false;
    
    
            }
            
        })
        inputpasswordRepeat.addEventListener("input",function(e){
            const value  = e.target.value;
            // console.log(valuePass);
            
            if(value === valuePass){
                this.classList.add("valid");
                this.classList.remove("invalid");
                isPasswordRepeat = true;
            }else{
                this.classList.remove("valid");
                this.classList.add("invalid");
                isPasswordRepeat = false;
            }
            
        })
    }
    checkForm();
    form.addEventListener("submit",function(event){
        event.preventDefault();
        if(isEmail && isPassword && isPasswordRepeat){
            console.log("submit");
            console.log(valuePass);
            this.submit();

        }

    })
});