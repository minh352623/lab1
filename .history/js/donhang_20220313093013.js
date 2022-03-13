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

    let Listitem = localStorage.length > 0 ?JSON.parse(localStorage.getItem("Listitem")): [];
    // console.log(todos);
    function renderItem(item){

    }
    if(Array.isArray(Listitem) && Listitem.length > 0){
        [...Listitem].forEach(item => console.log(Listitem.length));
    } 
})