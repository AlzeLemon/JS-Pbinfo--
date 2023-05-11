//creates the rust option on pbinfo
const selectElement = document.querySelector('select[name="limbaj_de_programare"]#limbaj_de_programare');
const optionElement = document.createElement('option');
optionElement.value = 'rs';
optionElement.textContent = 'Rust 🦀';
selectElement.appendChild(optionElement);

function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}

async function CompileRust(){
    let ta = document.querySelectorAll("textarea")
    let childwindow = window.open('https://chatgptproxy.me/#/');
    await waitOneSecond();
    let code = ta[0].value;
    let str = String.prototype.concat('You are not allowed to use functions like stoi you must read varabiles as their intended type.Translate this code into C++ without any additional text such as explanations or notes:\n', code );
    childwindow.postMessage(str,"*");
}
console.log("a");
window.addEventListener(
    "message",
    (event) => {
            console.log("Comp");
            CompileRust();
    },
    false
  );