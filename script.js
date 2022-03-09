let total = 0;

window.onload = function() {
    document.getElementById(`add`).addEventListener(`click`, (event)=>{
        event.preventDefault();
        add();
    });
}

function get(id){
    return document.getElementById(id).value;
}

function add(){
    if(get(`name`) == ``) return alert(`Please enter a name`);
    if(parseInt(get(`rate`)).toString() == "NaN") return alert(`Please enter a valid number`);
    if(parseInt(get(`quantity`)).toString() == "NaN") return alert(`Please enter a valid number`);

    let itemSrNo = document.createTextNode(document.getElementById(`list`).childElementCount);
    let itemName = document.createTextNode(get(`name`));
    let itemRate = document.createTextNode(get(`rate`));
    let itemQuantity = document.createTextNode(get(`quantity`));
    let itemTotal = document.createTextNode(get(`rate`)*get(`quantity`));

    let itemSrNoElement = document.createElement(`td`);
    let itemNameElement = document.createElement(`td`);
    let itemRateElement = document.createElement(`td`);
    let itemQuantityElement = document.createElement(`td`);
    let itemTotalElement = document.createElement(`td`);

    let itemRow = document.createElement(`tr`);

    itemSrNoElement.appendChild(itemSrNo);
    itemNameElement.appendChild(itemName);
    itemRateElement.appendChild(itemRate);
    itemQuantityElement.appendChild(itemQuantity);
    itemTotalElement.appendChild(itemTotal);

    itemRow.appendChild(itemSrNoElement);
    itemRow.appendChild(itemNameElement);
    itemRow.appendChild(itemRateElement);
    itemRow.appendChild(itemQuantityElement);
    itemRow.appendChild(itemTotalElement);

    document.getElementById(`list`).appendChild(itemRow);

    total += get(`rate`)*get(`quantity`);
    document.getElementById(`total`).textContent = `Total Price: ${total}`;
}