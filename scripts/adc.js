// Антидубль и ограничение на отправку 2 лидов
const formes = document.querySelectorAll("form");

if (localStorage.getItem("lcount") === '2') {
    window.location.assign("stop.html");
}

formes.forEach((form) => {
    form.addEventListener("submit", (evt) => {
        const tel = form.querySelector('input[type="tel"]').value;


        if (tel === localStorage.getItem("tel")) {
            evt.preventDefault();
            window.location.assign("double.html");
            return;
        } else {
            localStorage.setItem("tel", `${tel}`);

            if (!localStorage.getItem("lcount")) {
                localStorage.setItem("lcount", '1');
            } else {
                localStorage.setItem("lcount", '2');
            }
        }

    });
});

// Очистка localStorage через 24 часа
let limit = 24 * 3600 * 1000;
let localStorageInitTime = localStorage.getItem('localStorageInitTime');
if (localStorageInitTime === null) {
    localStorage.setItem('localStorageInitTime', +new Date());
} else if (+new Date() - localStorageInitTime > limit) {
    localStorage.clear();
    localStorage.setItem('localStorageInitTime', +new Date());
}

// Маска номера
const code = "39";
const inputs = document.querySelectorAll('input[type="tel"]');
inputs.forEach((input) => {
    input.value = `+${code}`;
});
const lengthMain = 10;
const lengthTotal = code.length + lengthMain
const forms = document.querySelectorAll("form");
forms.forEach((form) => {
    const submitBtn = form.querySelector('[type="submit"]');
    const inputPhone = form.querySelector('input[type="tel"]');
    if (submitBtn && inputPhone) {
        submitBtn.disabled = true;
        inputPhone.addEventListener("input", (e) => {
            const plus = e.target.value.includes("+");
            const clearStr = e.target.value.replace(/[^+\d]/g, "");
            if (plus) {
                inputPhone.setAttribute("minlength", lengthTotal + 1);
            } else {
                inputPhone.setAttribute("minlength", lengthTotal);
            }
            inputPhone.value = clearStr;
            if (/(\+39|39)([0-9]{10})/.test(clearStr)) {
                submitBtn.disabled = false;
                inputPhone.style.border = "2px solid green";
            } else {
                submitBtn.disabled = true;
                inputPhone.style.border = "2px solid red";
            }
        });
    }
});

// Скрипт блока ввода цифр в поле имени
let names = document.querySelectorAll('input[type="text"]');

for (let i = 0; i < names.length; i++) {
    names[i].addEventListener("keydown", (evt) => {
        if (evt.key.match(/[0-9]/)) {
            evt.preventDefault();
            return;
        }
    });
}
