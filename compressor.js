function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}

async function fn(event){

    let ta = document.querySelectorAll("textarea") 
    let bu = document.querySelectorAll("button")
    switch (event.data.data.mode){
        case "cmp":{
            ta[1].value = event.data.data.original;
            bu[1].click();
            await waitOneSecond();
            let answer = String.prototype.concat("//Written in Rust\n//",ta[0].value,"\n\n\n",event.data.data.compiled);
            ta[1].value = answer;
            break;
        }
    }
}

window.addEventListener(
    "message",
    (event) => {
        fn(event);
    },
    false
);