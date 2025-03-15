let firstInputBox = document.getElementById('input-box-1');

let secondInputBox = document.getElementById('input-box-2');

let pcRandomNumber = Math.floor(Math.random() * 100);

let enterBtn = document.getElementById('enter-btn');


let numberOfAttempts = 0;


enterBtn.addEventListener('click', ()=>{
    if(firstInputBox.value == pcRandomNumber) {
        secondInputBox.value = `Correct Your Number Of Attempts is ${numberOfAttempts} ..!`;
    }else if(firstInputBox.value == ""){
        secondInputBox.value = "Please Enter The Number..!";
    }else if(firstInputBox.value > 100) {
        secondInputBox.value = "Please Enter The Number between 0 - 100..!";
    }else if(firstInputBox.value > pcRandomNumber) {
        secondInputBox.value = "Your Number Is greater Then The Random Number..!";
        numberOfAttempts++;
    }else if(firstInputBox.value < pcRandomNumber) {
        secondInputBox.value = "Your Number Is less Then The Random Number..!";
        numberOfAttempts++;
    }else {
        secondInputBox.value = "Please Enter Numbers Only..!"
    }
})

const clearInputBox2 = ()=> {
    secondInputBox.value = "";
}




