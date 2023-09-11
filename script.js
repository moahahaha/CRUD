

var table = document.querySelector("#cat_table")
var tbody = document.querySelector("#table_body")
var save_button = document.querySelector("#save")
var delete_button = document.querySelector("#delete")

var rase_input = document.querySelector("#rasenavn")
var størrelse_input = document.querySelector("#størrelse")
var levetid_input = document.querySelector("#levetid")
var opprinnelse_input = document.querySelector("#opprinnelse")
var pels_input = document.querySelector("#pels")
var pris_input = document.querySelector("#pris")


var a=0
var b=0
var editing = true

function removeItem(){
    this.parentNode.remove();
    console.log("delete button")   
} 



save_button.addEventListener("click", function(){
    console.log(rase_input.value)

    tbody.innerHTML += "<tr class='row' id='edit" +b+"'> <td>" + rase_input.value + "</td> <td>" + størrelse_input.value +
    "</td> <td>" + levetid_input.value + "</td> <td>" + opprinnelse_input.value +"</td> <td>" + 
    pels_input.value + "</td> <td>" + pris_input.value + "</td> <td class='btn' id='delete" +a+"'>Slett rad</td></tr>"

    //var button_1 = document.getElementById("delete" + a)
    //console.log(button_1)
    //button_1.addEventListener("click", removeItem);


    var elements = document.getElementsByClassName("btn"); 
    for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", removeItem);
    }

    var cat_rows = document.getElementsByClassName("row");
    for (var i = 0; i < elements.length; i++){
        if (editing == true) {
            cat_rows[i].addEventListener("click", editItem);
            console.log(cat_rows, "update events added")}
        }    
    
                                       
    b += 1
    a += 1
    console.log("button clicked")
})

 function editItem(){        
    //console.log(this)   
     
        if (editing == (true)) {
            editing = false
            var tds = this.childNodes
            console.log(tds)
            tds.forEach(function(node,index){
                console.log(node)
                node.innerHTML = "<input type='text' value='"+node.innerHTML +"'>"

        })
        var active_row = this
        
        this.removeEventListener("click",editItem);  }  
    }
    window.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {  
            console.log("enter_pressed")                                             
            editing=true
            
        }
    })