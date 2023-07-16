//urls for the shady chinese website that is running a ChatGPT proxy server
const url = 'https://chatgptproxy.me/api/v1/chat/heart';
const url2 = 'https://chatgptproxy.me/api/v1/chat/conversation';
const url3 = 'https://chatgptproxy.me/api/v1/chat/result';
var convoid;
//header for the fetch request
const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer null',
    'Content-Length': '76',
    'Origin': 'https://chatgptproxy.me',
    'Connection': 'keep-alive',
    'Referer': 'https://chatgptproxy.me/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-origin',
    'TE': 'trailers',
};
function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}

async function heart(sesid) {
    json = {
        data: { 
            user_fake_id: "yixv0lcs6vk6anpv", 
            session_id: sesid }
    };
    let res = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(json)
    })
    let text1 = await res.text();
    let text2 = JSON.parse(text1);
    console.log(text2);
}
async function conversation(code,sesid) {
    json = {
        data: { 
            parent_id: "0",
            session_id: sesid ,
            question: code,
            user_fake_id: "yixv0lcs6vk6anpv"
        }
    };
    let res = await fetch(url2, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(json)
    })
    let text1 = await res.text();
    let text2 = JSON.parse(text1);

    if(text2.resp_data==null){
       //TODO: idk
       return null ; 
    }
    //HOW THE FUCK DOES THIS WORK!!!!!!!!!!   
    convoid=(text2.resp_data.chat_id);
    console.log(convoid);
    //nvm it works as long as you dont spam the server
}
async function result(cid , sesid) {
    json = {
        data: { 
            chat_id: cid,
            user_fake_id: "yixv0lcs6vk6anpv",
            session_id: sesid
        }
    };
    let res = await fetch(url3, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(json)
    })
    let text1 = await res.text();
    let text2 = JSON.parse(text1);

    return text2.resp_data;
}
async function RustCompile(code) {
    ssid = makeid(16);
    heart(ssid);
    conversation(code,ssid);
    if(false ){
        //TODO: error
    }
    else{
        while(true){
            let resres = await result(convoid,ssid);
            console.log("bruh" , convoid);
            if(resres!=null){
                if(resres.status == 3){
                    return resres.answer;
                }
            }
            await waitOneSecond();
        }
        //TODO: send back
        
    }
}

function makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

//code starts here

//goodbye shady chinese site
document.body.innerHTML = '<html class=" " lang="en"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><meta property="og:description" content="ChatGPT Proxy"><link rel="icon" href="logo.ico"><title>ChatGPT Proxy</title><link href="static/css/app.ad5104fa.css" rel="preload" as="style"><link href="static/css/chunk-vendors.27f753bc.css" rel="preload" as="style"><link href="static/js/app.3be3eb69.js" rel="preload" as="script"><link href="static/js/chunk-vendors.cf1666ab.js" rel="preload" as="script"><link href="static/css/chunk-vendors.27f753bc.css" rel="stylesheet"><link href="static/css/app.ad5104fa.css" rel="stylesheet"></head><body><a><img src="https://images.cooltext.com/5656485.png" top_margin="1000px" width="720" height="180"></a>Your code is compiling from Rust to C++This window will close automatically</body></html>';
async function fn(event){
    let response = await RustCompile(event.data);
    if(response!=null) {
        let childwindow = window.open('https://www.zickty.com/gziptotext/');
        while(childwindow == null){
            await waitOneSecond();
            console.log("!!!!ACTIVATE POPUPS!!!!!");
        }
        await waitOneSecond();
        childwindow.postMessage({
                data:{
                    original: event.data,
                    compiled: response,
                    mode: "cmp" 
                }
            },
            "*"
            );
        while(childwindow.closed==false){
            await waitOneSecond();
        }
        window.close();
    }
} 
window.addEventListener(
    "message",
    (event) => {
        fn(event)
    },
    false
);