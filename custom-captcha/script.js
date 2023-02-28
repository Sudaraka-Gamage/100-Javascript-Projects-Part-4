const captcha = document.querySelector(".captcha");
const reloadBtn = document.querySelector(".reload-btn");
const inputField = document.querySelector("input");
const checkBtn = document.querySelector(".check-btn");
const statusTxt = document.querySelector(".status-txt");

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha(){
    for(let i = 0; i < 6; i++){
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomChar}`;
    }
}

getCaptcha();
reloadBtn.addEventListener("click", () => {
    captcha.innerText = "";
    getCaptcha();
});

checkBtn.addEventListener("click", e => {
        e.preventDefault();

        statusTxt.getElementsByClassName.display = "block";

        let inputVal = inputField.value.split('').join(' ');
        console.log(inputVal);
        if(inputVal == captcha.innerText){
            statusTxt.style.color = "#4db2ec";
            statusTxt.innerText = "Nice! Captch matched";
            setTimeout(() => {
                statusTxt.style.display = "";
                inputField.value = "";
                captcha.innerText = "";
                getCaptcha();
            }, 4000);
        }else{
            statusTxt.style.color = "#ff0000";
            statusTxt.innerText = "Captch not matched! please try again";
        } 
    });