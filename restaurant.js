console.log("Hello")

function order(){
    console.log(document.getElementById("food-menu").value)
    if(document.getElementById("food-menu").value == "Burger"){
        console.log("Serve with Fries!")
    }
    else if(document.getElementById("food-menu").value == "Salmon"){
        console.log("Serve with Rice!")
    }
    // if I used else if() again I would have had to write [document.getElementById("food-menu").value ==] again.
    // still would have worked, this is just more concise.
    else{
        console.log("Serve with Edamame!")
    }
}