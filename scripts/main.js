const input = document.querySelector("#cpf");
let cpf;
let validateButton = document.querySelector("#validate");
let isValid = document.querySelector("#isValid");

validateButton.addEventListener('click', event => {
    cpf = input.value;

    const validateCPF = () => {
        let cpfArray = Array.from(String(cpf), Number);
        let validation1, validation2, isCPFValid;

    
        if (cpfArray.length == 10) {
            cpfArray.unshift(0);
        }
    
        validation1 = (cpfArray[0] * 10 + cpfArray[1] * 9 + cpfArray[2] * 8 + cpfArray[3] * 7 + cpfArray[4] * 6 + cpfArray[5] * 5 + cpfArray[6] * 4 + cpfArray[7] * 3 + cpfArray[8] * 2) * 10 % 11;
    
        validation2 = (cpfArray[0] * 11 + cpfArray[1] * 10 + cpfArray[2] * 9 + cpfArray[3] * 8 + cpfArray[4] * 7 + cpfArray[5] * 6 + cpfArray[6] * 5 + cpfArray[7] * 4 + cpfArray[8] * 3 + cpfArray[9] * 2) * 10 % 11;
    
        if (validation1 == cpfArray[9] && validation2 == cpfArray[10]) {
            isCPFValid = true;
        } else {
            isCPFValid = false;
        }
    
        return isCPFValid;
    };

    if (validateCPF() == true) {
        isValid.innerHTML = "O CPF é válido"
    } else {
        isValid.innerHTML = "O CPF não é válido"
    }
})

let ola = "ola"