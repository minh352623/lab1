window.addEventListener("load",function(){
    const form = document.querySelector(".registration");
    
    const inputemail = document.querySelector(".email");
    const inputpassword = document.querySelector(".password");
    const inputs = document.querySelectorAll(".input");
    
    let isEmail = false;
    let isPassword = false;

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
            console.log(valuePass);
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
        
    }
    checkForm();
    form.addEventListener("submit",function(event){
        event.preventDefault();
        if(isEmail && isPassword && isPasswordRepeat){
            console.log("submit");
            // console.log(valuePass);
            this.submit();
            this.reset();
            inputs.forEach(icon => {
                icon.classList.remove("valid")
                icon.classList.remove("invalid");

            })
            
            alert("đã đăng kí thành công");

        }else{
            this.reset();
            inputs.forEach(icon => {
                icon.classList.remove("valid")
                icon.classList.remove("invalid");

            })
            alert("đã đăng kí thất bại");

        }

    })
});