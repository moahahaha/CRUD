

var table = document.querySelector("#cat_table")
var tbody = document.querySelector("#table_body")
var save_button = document.querySelector("#save")

var rase_input = document.querySelector("#rasenavn")
var størrelse_input = document.querySelector("#størrelse")
var levetid_input = document.querySelector("#levetid")
var opprinnelse_input = document.querySelector("#opprinnelse")
var pels_input = document.querySelector("#pels")
var pris_input = document.querySelector("#pris")



save_button.addEventListener("click", function(){
    console.log(rase_input.value)

    tbody.innerHTML += "<tr> <td>" + rase_input.value + "</td> <td>" + størrelse_input.value + "</td> <td>" + levetid_input.value + "</td> <td>" + opprinnelse_input.value +"</td> <td>" + pels_input.value + "</td> <td>" + pris_input.value + "</td> </tr>"

    console.log("button clicked")
})