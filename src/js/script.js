
console.clear();

// Дана простая форма авторизации.

// Необходимо отменить отправку формы по умолчанию и проверить поля с логином и паролем по следующим признакам:

// поля непустые (если одно из полей пустое, вывести в консоль сообщение "All fields are required")
// логин и пароль должны соответствовать одной и записей в массива registeredUsers (в случае несовпадения, вывести в консоль сообщение "Incorrect login or password")
// если учетные данные подходят, вывести в консоль сообщение "Access granted" и очистить поля формы.

const registeredUsers = [
  ["admin", "KoI18"],
  ["manager", "SuperMe108"],
  ["editor", "12345"],
];

const [
    [login, password],
    // ...otherData
] = registeredUsers;

console.log(login, password);

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    console.log("submit")
    event.preventDefault();
    if(validate()) {
        form.reset();
        alert("Access granted")
    }else{
        alert("all field are required");
    }
}

function validate() {
    let isValid = true; 
    inputs.forEach(input => {
        if(!input.value.trim() || input.value !== login || input.value !== password){
            isValid = false;
        }else{
            alert("Access granted");
        }
    })
    return isValid;
}
