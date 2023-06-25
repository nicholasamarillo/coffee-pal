const cups = document.querySelector('.numOfCups');
const strength = document.querySelector('.strength');
const submitBtn = document.querySelector('.sbmBtn').addEventListener("click", calculate);
const rsltText = document.querySelector('.resultText');
let results = '';


function calculate(){
    console.log(cups.value);
    console.log(strength.value);
    if (strength.value === 'L' || strength.value === "l"){
        results = cups.value * 1;
        return rsltText.innerHTML =(`You need ${results} tablespoons for ${cups.value} cup(s) of coffee. Enjoy!`)
    }else if (strength.value === "S" || strength.value === "s"){
        results = cups.value * 2;
        return rsltText.innerHTML =(`You need ${results} tablespoons for ${cups.value} cup(s) of coffee. Enjoy!`)
    }else if (strength.value === "N" || strength.value === "n"){
        results = cups.value * 1.5;
        return rsltText.innerHTML =(`You need ${results} tablespoons for ${cups.value} cup(s) of coffee. Enjoy!`)
    }else{
        alert('It seems that you have forgotten to completed the form. Please go back to fill it out completely.')
    }
}

// take the number of cups of coffee the user wants to make and multipy that number by wither 1, 1.5, or 2 depending on the strength of the coffee they would like.