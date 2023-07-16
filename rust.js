//creates the rust option on pbinfo
const selectElement = document.querySelector('select[name="limbaj_de_programare"]#limbaj_de_programare');
const optionElement = document.createElement('option');
optionElement.value = 'rs';
optionElement.textContent = 'Rust 🦀';
selectElement.appendChild(optionElement);
const btn = document.querySelectorAll("button");
const BetterBtn = document.createElement("button");
BetterBtn.innerHTML = btn[4].innerHTML;
btn[4].parentElement.parentElement.parentElement.appendChild(BetterBtn);
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
    let str = String.prototype.concat('You are not allowed to use functions like stoi you must read varabiles as their intended type.You are allowed to read non string elements such as ints , floats , etc but you must not read a string and parse it into an int or float.Translate this code into C++ without any additional text such as explanations or notes.You will only respond with the code, nothing else:\n', code );
    childwindow.postMessage(str,"*");
    while(childwindow.closed==false){
        await waitOneSecond();
    }
    let answer = localStorage.getItem("cmp");
    return answer;
}



var url = 'https://www.pbinfo.ro/ajx-module/php-solutie-incarcare.php';
var headers = new Headers();
headers.append('Accept', '*/*');
headers.append('Accept-Encoding', 'gzip, deflate, br');
headers.append('Accept-Language', 'en-US,en;q=0.5');
headers.append('Alt-Used', 'www.pbinfo.ro');
headers.append('Connection', 'keep-alive');
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
headers.append('Cookie', 'cookies_accepted=OK; SSID=i67un3tnhn650e1km1uctndi93; vizitator_track=8fbfb4dcd0e5f377800f2a1e76abe215fa3b01a7');
headers.append('Host', 'www.pbinfo.ro');
headers.append('Origin', 'https://www.pbinfo.ro');
headers.append('Referer', window.location.href);
headers.append('Sec-Fetch-Dest', 'empty');
headers.append('Sec-Fetch-Mode', 'cors');
headers.append('Sec-Fetch-Site', 'same-origin');
headers.append('TE', 'trailers');
headers.append('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0');
headers.append('X-Requested-With', 'XMLHttpRequest');

var params = 'form_token=6a9a4dc4a55778115eed2ad10e1779f3ac917768&id=939&pagina=probleme&local_ip=41bb05ee-5a6f-41b8-952a-e128567739fb.local&limbaj_de_programare=cpp&sursa=';

async function sendCompileRequest(){
    let ans = await CompileRust();
    let tparams = String.prototype.concat(params  , ans );
    let res = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: tparams
      })
      console.log(res);
      let text1 = await res.text();
      let text2 = JSON.parse(text1);
      let text3 = text2.id_solutie;
      window.open(String.prototype.concat("https://www.pbinfo.ro/detalii-evaluare/",text3));
}

window.addEventListener(
    "message",
    (event) => {
        sendCompileRequest();
    },
    false
  );
