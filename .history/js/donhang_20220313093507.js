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
    // console.log(Listitem)
    function renderItem(item){
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const img = document.createElement("img");
        img.setAttribute("src", item.photo);
        td



        tbody.append(tr);
    }
    if(Array.isArray(Listitem) && Listitem.length > 0){
        [...Listitem].forEach(item => renderItem(item));
    } 
})