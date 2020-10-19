const huskDiv = document.querySelector(".Husk");
const glemDiv = document.querySelector(".Glem");
const form = document.querySelector("form");
const nameInput = document.querySelector("#navn");
const submitButton = document.querySelector("#submit");
const forgetButton = document.querySelector("#glemNavn");

const h1 = document.querySelector("h1");
const text = document.querySelector("#text");

// Stop the form from submitting when a button is pressed
form.addEventListener("submit", function(e){
    e.preventDefault();

});

submitButton.addEventListener("click", function(){
    // store the entered name in web storage
    localStorage.setItem("navn", nameInput.value);
    // run the funktion 
    nameDisplayCheck();
})

forgetButton.addEventListener('click', function(){
    //remove the stored name from web storage
    localStorage.removeItem("navn");
    nameDisplayCheck();
});

function nameDisplayCheck(){
    // check whether the 'name' data item is stored in web Storage
    if(localStorage.getItem('navn')){
        let name = localStorage.getItem('navn');
        h1.textContent = 'Velkommen ' + name;
        text.textContent = 'Velkommen til ' + name;
        glemDiv.style.display = 'block'
        huskDiv.style.display = 'none'
    } else {
        h1.textContent = 'Velkommen til ukendte person';
        text.textContent = 'Hej med dig ukendte person';
        glemDiv.style.display = 'none'
        huskDiv.style.display = 'block'
    }
}

document.body.onload = nameDisplayCheck