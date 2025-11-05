const btn = document.querySelector(".submit-button");
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const ageInput = document.querySelector("#age")
const sexInput = document.querySelector("#sex")
btn.addEventListener("click", (e) => {
e.preventDefault();
if(nameInput.value != "" && emailInput.value != ""){
    alert("You have successfully booked your flight!");
}

console.log();
});