window.onload = function() {
    load();
    document.getElementById(`add`).addEventListener(`click`, (event)=>{
        event.preventDefault();
        add();
    });
}

function get(id){
    return document.getElementById(id).value;
}

function load(){
    $("#list").empty();
    $("#list").append(`        <tr><th colspan="5">Shopping List</th></tr>
    <tr>
        <th>Sr No.</th>
        <th>Name</th>
        <th>Rate</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Options</th>
    </tr>`)
    let total = 0;
    let srNo = 1;
    let allItems = JSON.parse(localStorage.getItem(`items`)) || [];
    allItems.forEach(item => {
        let itemName = item.name;
        let itemRate = parseInt(item.rate);
        let itemQuantity = parseInt(item.quantity);
        let itemTotal = itemRate * itemQuantity;
        let element = `<tr>
            <td>${srNo}</td>
            <td>${itemName}</td>
            <td>${itemRate}</td>
            <td>${itemQuantity}</td>
            <td>${itemTotal}</td>
            <td><button class="btn btn-danger" onclick="remove(${srNo})">Remove</button></td>
        </tr>`
        $("#list").append(element);
        total += itemTotal;
        srNo++;
    });
    $("#total").text(total);
}

function add(){
    let item = {
        name: get(`name`),
        rate: get(`rate`),
        quantity: get(`quantity`)
    }
    let allItems = JSON.parse(localStorage.getItem(`items`)) || [];
    allItems.push(item);
    localStorage.setItem(`items`, JSON.stringify(allItems));
    load();
}

function remove(srNo){
    let allItems = JSON.parse(localStorage.getItem(`items`)) || [];
    allItems.splice(srNo - 1, 1);
    localStorage.setItem(`items`, JSON.stringify(allItems));
    load();
}