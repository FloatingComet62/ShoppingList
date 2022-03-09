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
    let itemSrNo = document.getElementById(`list`).childElementCount;
    let itemName = get(`name`);
    let itemRate = get(`rate`);
    let itemQuantity = get(`quantity`);
    let itemTotal = get(`rate`)*get(`quantity`)
    let element = `<tr>
        <td>${itemSrNo}</td>
        <td>${itemName}</td>
        <td>${itemRate}</td>
        <td>${itemQuantity}</td>
        <td>${itemTotal}</td>
    </tr>`
    $("#list").append(element);
    total += get(`rate`)*get(`quantity`);
    $("#total").text(total);
}