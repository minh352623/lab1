window.addEventListener("load",function() {
                            // <tr rowspan="3">
                            //     <td class="col-1">
                            //         <img src="./assets/images/logo.png" alt="">
                            //     </td>
                            //     <td class="col-2">ten</td>
                            //     <td class="col-2">so luong</td>
                            //     <td class="col-2">gia</td>
                            //     <td class="col-2">thanh tien</td>
                            //     <td class="col-2">xoa</td>
                            // </tr>
    const tbody = document.querySelector(".tbody")
    let Listitem = localStorage.length > 0 ?JSON.parse(localStorage.getItem("Listitem")): [];
    function renderItem(item){
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.className = "col-1";
        const img = document.createElement("img");
        img.setAttribute("src", item.img);
        td1.appendChild(img);
        const td2 = document.createElement("td");
        td2.textContent = item.name;
        const td3 = document.createElement("td");
        td3.textContent = item.number;

        const td4 = document.createElement("td");
        td4.textContent = item.price;

        const td5 = document.createElement("td");
        td5.textContent = +item.number * item.price;

        const td6 = document.createElement("td");
        const icon = document.createElement("i");
        icon.className = "icon fas fa-trash-alt";
        td6.append(icon);



        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);
    }
    window.addEventListener("storage",renderCart);
    function renderCart(){
        tbody.innerHTML = "";
        if(Array.isArray(Listitem) && Listitem.length > 0){
            [...Listitem].forEach(item => renderItem(item));
        }
    }
    renderCart();
        

})