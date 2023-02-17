const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const cpf = document.getElementById('cpf')
const number = document.getElementById('cel')

number.addEventListener('keypress', () => {
    let numberlength = number.value.length

    if (numberlength === 0) {
        number.value += '('
    }
    else if (numberlength === 3) {
        number.value += ') '
    }
    else if (numberlength === 10) {
        number.value += '-'
    }
})

cpf.addEventListener('keypress', () => {
    let cpflength = cpf.value.length

    if (cpflength === 3 || cpflength === 7) {
        cpf.value += '.'
    }
    else if (cpflength === 11) {
        cpf.value += '-'
    }
})

username.addEventListener("keypress", function(e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});
function namecheck() {
    const usernameValue = username.value

    if (usernameValue === "") {
        setErrorfor(username, "O nome de usuário é obrigatório");
    }
    else {
        setSuccessFor(username);
    }
}
function emailcheck() {
    const emailValue = email.value

    if (emailValue === "") {
        setErrorfor(email, "O email é obrigatório");
    } 
    else if (!checkEmail(emailValue)) {
        setErrorfor(email, "Por favor, insira um email válido");
    } 
    else {
        setSuccessFor(email);
}
}
function cpfcheck() {
    const cpfValue = cpf.value

    if (cpfValue === "") {
        setErrorfor(cpf, "O cpf é obrigatório");
    }
    else if(!TestaCPF(formataCPF(cpfValue))) {
        setErrorfor(cpf, "Por favor, insira um cpf válido");
    }
    else {
        setSuccessFor(cpf);
}
}
function numbercheck() {
    const numberValue = number.value

    if (numberValue === "") {
        setErrorfor(number, "O número é obrigatório");
    }
    else if(!checkNumber(formataNumber(numberValue))) {
        setErrorfor(number, "(xx) xxxxx-xxxx")
    }
    else {
        setSuccessFor(number)
    }
}

function checkInputs() {
    const usernameValue = username.value
    const emailValue = email.value
    const cpfValue = cpf.value
    const numberValue = number.value

    if (usernameValue === "") {
        setErrorfor(username, "O nome de usuário é obrigatório");
    }
    else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorfor(email, "O email é obrigatório");
    } 
    else if (!checkEmail(emailValue)) {
        setErrorfor(email, "Por favor, insira um email válido");
    } 
    else {
        setSuccessFor(email);
}

    if (cpfValue === "") {
        setErrorfor(cpf, "O cpf é obrigatório");
    }
    else if(!TestaCPF(formataCPF(cpfValue))) {
        setErrorfor(cpf, "Por favor, insira um cpf válido");
    }
    else {
        setSuccessFor(cpf);
}
    if (numberValue === "") {
        setErrorfor(number, "O número é obrigatório");
    }
    else if(!checkNumber(formataNumber(numberValue))) {
        setErrorfor(number, "(xx) xxxxx-xxxx")
    }
    else {
        setSuccessFor(number)
    }

}
    const formControls = form.querySelectorAll(".form-control");
    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {
        console.log("O formulário está 100% válido!");
    }
function setErrorfor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    // mensagem de erro
    small.innerText = message;

    // classe de erro
    formControl.className = "form-control error";
}
function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Classe de sucesso
    formControl.className = "form-control success";
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email);
}
function formataCPF(cpf) {
    let cpf_semPT = cpf.replace(".", "").replace(".", "").replace("-", "")

    return cpf_semPT
}

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
function formataNumber(number) {
    let number_semPT = number.replace("(", "").replace(") ", "").replace("-", "")

    return number_semPT
}

function checkNumber(cel) {
    cel =  cel.replace('/[^0-9]/', '');
    return cel.match(/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/);
}

