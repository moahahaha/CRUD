

var table = document.querySelector("#cat_table")
var tbody = document.querySelector("#table_body")
var add_button = document.querySelector("#add")
var delete_button = document.querySelector("#delete")
var save_button = document.querySelector("#save")

var rase_input = document.querySelector("#rasenavn")
var størrelse_input = document.querySelector("#størrelse")
var levetid_input = document.querySelector("#levetid")
var opprinnelse_input = document.querySelector("#opprinnelse")
var pels_input = document.querySelector("#pels")
var pris_input = document.querySelector("#pris")

var active_row
var tds 
var a=0
var b=0
var editing = true


const retrievedData = localStorage.getItem('tableData');

function rebuildTable(data) {
    const table = document.getElementById('cat_table').getElementsByTagName('tbody')[0];
    table.innerHTML = '';

    const headingsRow = table.insertRow();
    headingsRow.innerHTML = "<th>Rase</th><th>Størrelse</th><th>Levetid</th><th>Opprinnelse</th><th>Pels</th><th>Pris</th><th></th>";

data.forEach((row) => {
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    

    cell1.textContent = row.rase;
    cell2.textContent = row.størrelse;
    cell3.textContent = row.levetid;
    cell4.textContent = row.opprinnelse;
    cell5.textContent = row.pels;
    cell6.textContent = row.pris;

    const deleteButtonCell = newRow.insertCell(6);
        deleteButtonCell.textContent = "Slett rad";
        deleteButtonCell.className = "btn";
        deleteButtonCell.addEventListener("click", removeItem);

});
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener("click", editItem);
}
}

if (retrievedData) {
    console.log(retrievedData)
    rebuildTable(JSON.parse(retrievedData));
  }


  function readTable() {
    const table = document.getElementById('cat_table').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    console.log(table);
    const rowData = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length > 0) {
            const row = {};
            row.rase = cells[0].textContent;
            row.størrelse = cells[1].textContent;
            row.levetid = cells[2].textContent;
            row.opprinnelse = cells[3].textContent;
            row.pels = cells[4].textContent;
            row.pris = cells[5].textContent;
            rowData.push(row);
        }
    }

    return rowData;
}

function removeItem(){
    this.parentNode.remove();
    console.log("delete button")   
    
} 

save_button.addEventListener("click", function(){
    const tableData = readTable(); 
    localStorage.setItem('tableData', JSON.stringify(tableData));
    console.log(localStorage.getItem('tableData'))

})

 function addEventListenersToButtons() {
        var elements = document.getElementsByClassName("btn");
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", removeItem);
        }
    }

add_button.addEventListener("click", function(){
    console.log(rase_input.value);
    

    const newRow = document.createElement("tr");
    newRow.className = "row";
    newRow.id = "edit" + b;
    
    newRow.innerHTML = `
        <td>${rase_input.value}</td>
        <td>${størrelse_input.value}</td>
        <td>${levetid_input.value}</td>
        <td>${opprinnelse_input.value}</td>
        <td>${pels_input.value}</td>
        <td>${pris_input.value}</td>
        <td class="btn" id="delete${a}">Slett rad</td>
    `;
    
        // Add the new row to the table body
    tbody.appendChild(newRow);
    
        // Add event listener to the newly added "Slett rad" cell
    const lastCell = newRow.querySelector(`#delete${a}`);
    lastCell.addEventListener("click", removeItem);
    
        // Add event listener to the new row
    newRow.addEventListener("click", editItem);
    
    a += 1;
    b += 1;
    console.log("button clicked");
});
    
function editItem(){        
    //console.log(this)   
     
        if (editing == (true)) {
            editing = false
            tds = this.childNodes
            //console.log(tds)
            tds.forEach(function(node,index){
                console.log(node,index)
                if (index != 12){
                    node.innerHTML = "<input type='text' value='"+node.innerHTML +"'>"
                } else (
                    node.innerHTML = "Slett rad"
                )
                

        });
        active_row = this
        //legg til eventlistener igjen-enter
        //this.removeEventListener("click",editItem); 
     }  
    }


    window.addEventListener("keypress", function(event, ) {
        if (event.key === "Enter") {  
            console.log("enter_pressed")                                             
            editing=true 
        
        //console.log(active_row)
        if (active_row){
            tds = active_row.childNodes

            console.log(tds)

       
            tds.forEach(function(node,index){
               console.log(node.firstChild)
               console.log(node.nodeName)
               if (node.nodeName == "TD" ) {
                   node.innerHTML = node.firstChild.value
              }
            });
        
            }
            active_row.addEventListener("click",editItem);
    
        }

    });
