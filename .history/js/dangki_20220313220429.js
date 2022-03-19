window.addEventListener("load",function(){
    const form = document.querySelector(".registration");
    const checkEmail = document.querySelector(".check-email");
    
    const inputemail = document.querySelector(".email");
    const inputpassword = document.querySelector(".password");
    const inputpasswordRepeat = document.querySelector(".password-repeat-c");

    const icons = document.querySelectorAll(".input-icons i")
    
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
                isEmail = true;
            }else {
                this.classList.remove("valid");
                this.classList.add("invalid");
                isEmail = false;

    
            }
            if(!value){
                this.classList.remove("invalid");
                isEmail =  false;
    
    
            }
                
            
        })
        inputpassword.addEventListener("change",function(e){
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
            if(!isPassword){
                alert("mật khẩu ít nhất 8 kí tự")

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
            if(!value){
                this.classList.remove("invalid");
                isPassword =  false;
    
    
            }
            
        })
    }
    checkForm();
    form.addEventListener("submit",function(event){
        event.preventDefault();
        if(isEmail && isPassword && isPasswordRepeat){
            console.log("submit");
            // console.log(valuePass);
            this.submit();
            this.reset();
            icons.forEach(icon => icon.style.display  ="none")
            
            alert("đã đăng kí thành công");

        }else{
            this.reset();
            icons.forEach(icon => icon.style.display  ="none")
            alert("đã đăng kí thất bại");

        }

    })
});