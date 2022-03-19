window.addEventListener("load",function(){
    const form = document.querySelector(".registration");
    const checkEmail = document.querySelector(".check-email");
    const checkpassword = document.querySelector(".check-password");
    
    const inputemail = document.querySelector(".email");
    const inputpassword = document.querySelector(".password");
    const inputpasswordRepeat = document.querySelector("#password-repeat");
    const inputRank = document.querySelectorAll("#capdo");
    
    let issubmit = false;
    function checkForm(){

        inputemail.addEventListener("input",function(e){
            const value = e.target.value;
            // console.log(value);
            const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
            if(regex.test(value.trim())){
                this.classList.add("valid");
                this.classList.remove("invalid");
                return true
            }else{
                this.classList.remove("valid");
                this.classList.add("invalid");
                issubmit = false;
    
            }
            if(!value){
                issubmit = false;
    
                this.classList.remove("invalid");
    
            }
        })
        const valuePass ="";
        inputpassword.addEventListener("input",function(e){
            const valuePass = e.target.value;
            if(valuePass.length>7){
                this.classList.add("valid");
                this.classList.remove("invalid");
                issubmit = true;
            }else{
                this.classList.remove("valid");
                this.classList.add("invalid");
                issubmit = false;
            }
            if(!valuePass){
                issubmit = false;
    
                this.classList.remove("invalid");
    
            }
            
        })
        return true;
    }
    // checkForm();
    form.addEventListener("submit",function(event){
        event.preventDefault();
        console.log(checkForm());
        checkForm()
        if(checkForm()){
            console.log("submit");
            this.submit();
        }

    })
});